import Image from "next/image";
import Button from "@/components/common/Button";



type AboutBaidaProps = {
  showButton?: boolean;
};

export default function AboutBaida({ showButton = true }: AboutBaidaProps) {
  
  return (
    <section className="bg-white px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[28px] bg-[#F8F4EE] shadow-lg md:rounded-[36px]">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            {/* Content */}
            <div className="flex flex-col justify-center px-6 py-10 md:px-12 lg:px-16 lg:py-14">
              <p className="mb-3 text-xs uppercase tracking-[0.4em] text-gold">
                Our Story
              </p>

              <h2 className="text-4xl font-light leading-tight text-dark md:text-6xl">
                About <span className="text-gold">BAIDA</span>
              </h2>

              {/* Same divider style as other sections */}
              <div className="mt-5 flex items-center gap-3">
                <span className="h-px w-12 bg-gold"></span>
                <span className="text-sm text-gold">✦</span>
                <span className="h-px w-12 bg-gold"></span>
              </div>

              <p className="mt-7 text-sm leading-7 text-brown md:text-base md:leading-8">
                BAIDA is crafted with passion, bringing luxury candles made in
                small batches using premium ingredients.
              </p>

              <p className="mt-4 text-sm leading-7 text-brown md:text-base md:leading-8">
                Every product is designed to create warmth, comfort, and an
                elegant atmosphere in your space.
              </p>

              {/* Stats */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-gold md:text-2xl">
                    100%
                  </h3>
                  <p className="text-xs text-brown md:text-sm">Handcrafted</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gold md:text-2xl">
                    Premium
                  </h3>
                  <p className="text-xs text-brown md:text-sm">Quality</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gold md:text-2xl">
                    Small
                  </h3>
                  <p className="text-xs text-brown md:text-sm">Batch</p>
                </div>
              </div>

             {showButton && (
  <div className="mt-8">
    <Button variant="primary">Shop Collection →</Button>
  </div>
)}
            </div>

            {/* Image */}
            <div className="relative min-h-[360px] md:min-h-[460px] lg:min-h-[560px]">
              <Image
                src="/images/aboutbaida.jpg"
                alt="About BAIDA"
                fill
                className="object-cover"
              />

              <div className="absolute bottom-5 left-5 rounded-xl bg-white/90 px-4 py-3 backdrop-blur md:bottom-6 md:left-6 md:px-5">
                <p className="text-sm font-medium text-dark md:text-base">
                  Handcrafted Luxury
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}