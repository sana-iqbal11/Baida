import Button from "@/components/common/Button";

export default function ParallaxBanner() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat bg-fixed px-6 py-32 md:py-40"
      style={{
        backgroundImage: "url('/images/parallel.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <p className="mb-5 text-sm uppercase tracking-[0.35em] text-gold">
          Crafted For Moments
        </p>

        <h2 className="text-3xl font-light leading-tight text-white md:text-7xl">
          Light Up Your Space With Elegance
        </h2>

        <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/85">
          Discover handcrafted scented candles made to bring warmth, comfort,
          and a soft luxury glow into your everyday life.
        </p>

        <div className="mt-9">
          <Button variant="secondary">
            Explore Collection →
          </Button>
        </div>
      </div>
    </section>
  );
}