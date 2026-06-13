"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="bg-dark text-cream">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 md:px-10 md:py-16">
        {/* Top Divider */}
        <div className="mb-12 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Brand */}
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gold md:text-sm">
              Pure • Natural • Handcrafted
            </p>

            <Link
              href="/"
              className="mb-4 block text-2xl font-light tracking-[0.25em] transition hover:text-gold md:text-3xl md:tracking-[0.35em]"
            >
              BAIDA
            </Link>

            <p className="text-sm leading-7 text-cream/70 md:text-base">
              Luxury scented candles crafted to bring warmth, comfort and
              elegance to every space.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-sm uppercase tracking-[0.2em] text-gold">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className={`transition duration-300 ${
                        isActive
                          ? "font-semibold text-gold"
                          : "text-cream/80 hover:text-gold"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-sm uppercase tracking-[0.2em] text-gold">
              Contact
            </h3>

            <div className="space-y-3 text-sm text-cream/80 md:text-base">
              <Link
                href="https://wa.me/971509609311"
                target="_blank"
                className="block transition hover:text-gold"
              >
                +971 50 960 9311
              </Link>

              <Link
                href="mailto:hello@baida.com"
                className="block transition hover:text-gold"
              >
                hello@baida.com
              </Link>

              <p>Abu Dhabi, UAE</p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-5 text-sm uppercase tracking-[0.2em] text-gold">
              Stay Connected
            </h3>

            <p className="mb-5 text-sm text-cream/70 md:text-base">
              Subscribe for exclusive offers and new fragrance launches.
            </p>

            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-full border border-white/10 bg-white/10 px-5 py-3 outline-none placeholder:text-cream/40 focus:border-gold"
              />

              <button className="w-full rounded-full bg-gold py-3 font-medium text-dark transition hover:opacity-90">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-cream/60 md:flex-row md:text-left">
          <p>© {new Date().getFullYear()} BAIDA. All rights reserved.</p>

          <div className="flex flex-wrap justify-center gap-5 md:justify-end">
            <Link
              href="https://instagram.com"
              target="_blank"
              className="transition hover:text-gold"
            >
              Instagram
            </Link>

            <Link
              href="https://facebook.com"
              target="_blank"
              className="transition hover:text-gold"
            >
              Facebook
            </Link>

            <Link
              href="https://wa.me/971509609311"
              target="_blank"
              className="transition hover:text-gold"
            >
              WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}