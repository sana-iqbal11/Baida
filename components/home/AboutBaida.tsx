import Image from "next/image";
import Button from "@/components/common/Button";

export default function AboutBaida() {
  return (
    <section className="bg-white px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[36px] bg-cream shadow-sm lg:grid-cols-2">
        
        {/* Left Image */}
        <div className="relative min-h-[420px] lg:min-h-[620px] object-cover scale-105">
          <Image
            src="/images/aboutbaida.jpg"
            alt="About BAIDA"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-center px-8 py-14 md:px-16 lg:px-20">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-gold">
            Our Story
          </p>

          <h2 className="text-5xl font-light leading-tight text-dark md:text-7xl">
            About BAIDA
          </h2>

          <div className="mt-5 flex items-center gap-3">
            <span className="h-px w-14 bg-gold"></span>
            <span className="text-sm text-gold">✦</span>
            <span className="h-px w-14 bg-gold"></span>
          </div>

          <p className="mt-8 max-w-xl leading-8 text-brown">
            BAIDA was born from a passion for handcrafted candles and timeless
            fragrances. Every candle is carefully poured in small batches using
            premium ingredients, creating pieces that bring warmth, comfort, and
            elegance into everyday life.
          </p>

          <p className="mt-5 max-w-xl leading-8 text-brown">
            We believe that a candle is more than a product — it creates
            memories, transforms spaces, and adds a touch of luxury to every
            moment.
          </p>

          <div className="mt-10">
            <Button variant="primary">
              Explore Collection →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}