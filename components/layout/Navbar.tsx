const navLinks = ["Home", "Products", "Offer", "About Us", "Contact Us"];

export default function Navbar() {
  return (
    <header className="w-full relative z-50">
      <div className="bg-gold text-white text-center text-sm py-3 px-4">
          ✨ Grand Opening Offer • Get 15% OFF on Your First Order
      </div>

      <nav className="bg-cream border-b border-beige">
        <input id="menu-toggle" type="checkbox" className="peer hidden" />

        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
          <h1 className="text-dark text-2xl md:text-3xl tracking-[0.4em] font-light">
            BAIDA
          </h1>

          <div className="hidden lg:flex items-center gap-10 text-brown">
            {navLinks.map((link) => (
              <a key={link} href="#" className="hover:text-dark transition">
                {link}
              </a>
            ))}
          </div>

          <button className="hidden lg:block bg-dark text-cream px-6 py-3 rounded-full">
            Order on WhatsApp
          </button>

          <label
            htmlFor="menu-toggle"
            className="lg:hidden text-dark text-3xl cursor-pointer z-[60]"
          >
            ☰
          </label>
        </div>

        {/* Dark overlay */}
        <label
          htmlFor="menu-toggle"
          className="fixed inset-0 bg-black/40 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible transition-all duration-300 lg:hidden"
        />

        {/* Mobile Drawer */}
        <div className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-cream z-[70] translate-x-full peer-checked:translate-x-0 transition-transform duration-300 ease-in-out lg:hidden shadow-2xl">
          <div className="flex items-center justify-between px-6 py-5 border-b border-beige">
            <h2 className="text-dark text-2xl tracking-[0.35em]">BAIDA</h2>

            <label
              htmlFor="menu-toggle"
              className="text-dark text-3xl cursor-pointer"
            >
              ✕
            </label>
          </div>

          <div className="flex flex-col gap-6 px-6 py-8 text-brown">
            {navLinks.map((link) => (
              <a key={link} href="#" className="text-lg hover:text-dark">
                {link}
              </a>
            ))}

            <button className="bg-dark text-cream py-3 rounded-full mt-4">
              Order on WhatsApp
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}