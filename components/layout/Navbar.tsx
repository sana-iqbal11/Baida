import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Offer", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="relative z-50 w-full">
      <div className="bg-gold px-4 py-3 text-center text-sm text-white">
        ✨ Grand Opening Offer • Get 15% OFF on Your First Order
      </div>

      <nav className="border-b border-beige bg-cream">
        <input id="menu-toggle" type="checkbox" className="peer hidden" />

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
                className="transition hover:text-dark"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <Link
            href="https://wa.me/971XXXXXXXXX"
            target="_blank"
            className="hidden rounded-full bg-dark px-6 py-3 text-cream lg:block"
          >
            Order on WhatsApp
          </Link>

          <label
            htmlFor="menu-toggle"
            className="z-[60] cursor-pointer text-3xl text-dark lg:hidden"
          >
            ☰
          </label>
        </div>

        <label
          htmlFor="menu-toggle"
          className="invisible fixed inset-0 bg-black/40 opacity-0 transition-all duration-300 peer-checked:visible peer-checked:opacity-100 lg:hidden"
        />

        <div className="fixed right-0 top-0 z-[70] h-full w-[85%] max-w-sm translate-x-full bg-cream shadow-2xl transition-transform duration-300 ease-in-out peer-checked:translate-x-0 lg:hidden">
          <div className="flex items-center justify-between border-b border-beige px-6 py-5">
            <Link href="/" className="text-2xl tracking-[0.35em] text-dark">
              BAIDA
            </Link>

            <label htmlFor="menu-toggle" className="cursor-pointer text-3xl text-dark">
              ✕
            </label>
          </div>

          <div className="flex flex-col gap-6 px-6 py-8 text-brown">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg hover:text-dark"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="https://wa.me/971XXXXXXXXX"
              target="_blank"
              className="mt-4 rounded-full bg-dark py-3 text-center text-cream"
            >
              Order on WhatsApp
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}