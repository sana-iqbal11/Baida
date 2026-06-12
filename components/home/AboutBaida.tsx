import Button from "@/components/common/Button";

export default function AboutBaida() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[36px] bg-[#F8F4EE] shadow-lg">
          {/* FLEX ROW - always horizontal on large screens */}
          <div className="flex flex-col lg:flex-row">
            {/* LEFT: Content */}
            <div className="flex flex-1 flex-col justify-center px-8 py-12 md:px-14 lg:px-16">
              <p className="mb-3 text-xs uppercase tracking-[0.4em] text-gold">
                Our Story
              </p>

              <h2 className="text-4xl font-light leading-tight text-dark md:text-6xl">
                About <span className="text-gold">BAIDA</span>
              </h2>

              <div className="mt-5 h-[2px] w-20 bg-gold"></div>

              <p className="mt-8 leading-8 text-brown">
                BAIDA is crafted with passion, bringing luxury candles made in
                small batches using premium ingredients.
              </p>

              <p className="mt-5 leading-8 text-brown">
                Every product is designed to create warmth, comfort, and elegant
                atmosphere in your space.
              </p>

              {/* Stats */}
              <div className="mt-10 flex gap-10">
                <div>
                  <h3 className="text-2xl font-semibold text-gold">100%</h3>
                  <p className="text-sm text-brown">Handcrafted</p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gold">Premium</h3>
                  <p className="text-sm text-brown">Quality</p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gold">Small</h3>
                  <p className="text-sm text-brown">Batch</p>
                </div>
              </div>

              <div className="mt-10">
                <Button variant="primary">Shop Collection →</Button>
              </div>
            </div>

            {/* RIGHT: Image (IMPORTANT FIX) */}
            <div className="relative w-full lg:w-[45%]">
              <img
                src="/images/aboutbaida.jpg"
                alt="About BAIDA"
                className="h-[420px] w-full object-cover lg:h-full"
              />

              <div className="absolute bottom-6 left-6 rounded-xl bg-white/90 px-5 py-3 backdrop-blur">
                <p className="text-dark font-medium">Handcrafted Luxury</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
