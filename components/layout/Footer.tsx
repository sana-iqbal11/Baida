export default function Footer() {
  return (
    <footer className="bg-dark text-cream">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10 py-12 md:py-16">
        {/* Top Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent mb-12" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div>
            <p className="text-gold text-xs md:text-sm uppercase tracking-[0.3em] mb-3">
              Pure • Natural • Handcrafted
            </p>

            <h2 className="text-2xl md:text-3xl tracking-[0.25em] md:tracking-[0.35em] font-light mb-4">
              BAIDA
            </h2>

            <p className="text-cream/70 leading-7 text-sm md:text-base">
              Luxury scented candles crafted to bring warmth, comfort and
              elegance to every space.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gold uppercase tracking-[0.2em] text-sm mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-cream/80">
              <li>
                <a href="#" className="hover:text-gold transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition">
                  Offers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-gold uppercase tracking-[0.2em] text-sm mb-5">
              Contact
            </h3>

            <div className="space-y-3 text-cream/80 text-sm md:text-base">
              <p>+92 300 1234567</p>
              <p>hello@baida.com</p>
              <p>Pakistan</p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-gold uppercase tracking-[0.2em] text-sm mb-5">
              Stay Connected
            </h3>

            <p className="text-cream/70 mb-5 text-sm md:text-base">
              Subscribe for exclusive offers and new fragrance launches.
            </p>

            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-white/10 border border-white/10 rounded-full px-5 py-3 outline-none focus:border-gold placeholder:text-cream/40"
              />

              <button className="w-full bg-gold text-dark py-3 rounded-full font-medium hover:opacity-90 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 my-10" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-sm text-cream/60">
          <p>© {new Date().getFullYear()} BAIDA. All rights reserved.</p>

          <div className="flex flex-wrap justify-center md:justify-end gap-5">
            <a href="#" className="hover:text-gold transition">
              Instagram
            </a>

            <a href="#" className="hover:text-gold transition">
              Facebook
            </a>

            <a href="#" className="hover:text-gold transition">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
