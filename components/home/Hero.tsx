export default function Hero() {
  return (
    <section className="relative h-full md:h-[425px] overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover object-center"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/25" />

      <div className="relative z-10 flex h-full items-start justify-center px-6 pt-5 md:pt-24 text-center text-white">
        <div className="max-w-3xl">
          <p className="mb-0 text-3xl">بيضاء</p>

          <p className="mb-0 text-sm md:text-base uppercase tracking-[0.35em] text-gold">
            Pure • Natural • Handcrafted
          </p>

          <h1 className="mb-0 text-5xl md:text-8xl tracking-[0.2em] font-light">
            BAIDA
          </h1>

          <p className="mx-auto mb-0 max-w-2xl text-base md:text-lg leading-8">
            Luxury scented candles crafted to bring warmth, comfort and elegance
            to every space.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6 md:mb-2">
            <button className="bg-cream text-dark px-8 py-3 rounded-full">
              Shop Collection
            </button>

            <button className="border border-cream text-cream px-8 py-3 rounded-full">
              Explore Scents
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}