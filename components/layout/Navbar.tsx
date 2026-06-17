"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FiShoppingBag } from "react-icons/fi";
import { useCart } from "@/context/CartContext";
import CartDrawer from "@/components/cart/CartDrawer";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { cartCount } = useCart();

  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen || isCartOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, isCartOpen]);

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <header className="relative z-50 w-full">
        <div className="bg-gold px-4 py-3 text-center text-sm text-white">
          ✨ Grand Opening Offer • Get 15% OFF on Your First Order
        </div>

        <nav className="border-b border-beige bg-cream">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
            <Link
              href="/"
              className="text-2xl font-light tracking-[0.4em] text-dark md:text-3xl"
            >
              BAIDA
            </Link>

            <div className="hidden items-center gap-10 text-brown lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative pb-2 transition ${
                    isActive(link.href)
                      ? "font-medium text-dark after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-gold"
                      : "hover:text-dark"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="hidden items-center gap-5 lg:flex">
              <button
                type="button"
                onClick={() => setIsCartOpen(true)}
                className="relative flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-beige text-dark transition hover:bg-beige"
              >
                <FiShoppingBag size={22} />

                {cartCount > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-gold text-xs text-white">
                    {cartCount}
                  </span>
                )}
              </button>

              <Link
                href="https://wa.me/971509609311"
                target="_blank"
                className="rounded-full bg-dark px-6 py-3 text-cream transition hover:bg-brown"
              >
                Order on WhatsApp
              </Link>
            </div>

            <div className="flex items-center gap-4 lg:hidden">
              <button
                type="button"
                onClick={() => setIsCartOpen(true)}
                className="relative flex h-10 w-10 items-center justify-center rounded-full border border-beige text-dark"
              >
                <FiShoppingBag size={21} />

                {cartCount > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-gold text-xs text-white">
                    {cartCount}
                  </span>
                )}
              </button>

              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="z-[60] cursor-pointer text-3xl text-dark"
              >
                ☰
              </button>
            </div>
          </div>

          {isOpen && (
            <button
              type="button"
              aria-label="Close menu overlay"
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[60] bg-black/40 lg:hidden"
            />
          )}

          <div
            className={`fixed right-0 top-0 z-[70] h-dvh w-[85%] max-w-sm bg-cream shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex items-center justify-between border-b border-beige px-6 py-5">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="text-2xl tracking-[0.35em] text-dark"
              >
                BAIDA
              </Link>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="cursor-pointer text-3xl text-dark"
              >
                ✕
              </button>
            </div>

            <div className="flex h-[calc(100dvh-73px)] flex-col gap-6 overflow-y-auto px-6 py-8 text-brown">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`border-b border-beige pb-3 text-lg transition ${
                    isActive(link.href)
                      ? "font-medium text-dark"
                      : "hover:text-dark"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  setIsCartOpen(true);
                }}
                className="flex cursor-pointer items-center justify-between border-b border-beige pb-3 text-lg text-brown"
              >
                <span>Cart</span>
                <span className="rounded-full bg-gold px-3 py-1 text-xs text-white">
                  {cartCount}
                </span>
              </button>

              <Link
                href="https://wa.me/971509609311"
                target="_blank"
                onClick={() => setIsOpen(false)}
                className="mt-4 rounded-full bg-dark py-3 text-center text-cream"
              >
                Order on WhatsApp
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </>
  );
}