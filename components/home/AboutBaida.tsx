import Image from "next/image";
import Button from "@/components/common/Button";

export default function AboutBaida() {
    return (
        <section className="bg-white px-6 py-16 md:py-24">
            <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
                <div className="relative h-[380px] overflow-hidden rounded-t-[150px] bg-beige md:h-[500px]">
                    <Image
                        src="/images/aboutbaida.jpg"
                        alt="About BAIDA"
                        fill
                        className="object-cover"
                    />
                </div>

               <div className="max-w-lg flex flex-col justify-center h-full">
                    <p className="mb-3 text-sm uppercase tracking-[0.35em] text-gold">
                        Our Story
                    </p>

                    <h2 className="text-5xl font-light text-dark md:text-5xl">
                        About BAIDA
                    </h2>

                    <div className="mt-5 flex items-center gap-3">
                        <span className="h-px w-14 bg-gold"></span>
                        <span className="text-gold text-sm">✦</span>
                        <span className="h-px w-14 bg-gold"></span>
                    </div>

                    <p className="mt-8 leading-8 text-brown">
                        BAIDA was born from a passion for handcrafted candles and timeless
                        fragrances. Every candle is carefully poured in small batches using
                        premium ingredients, creating pieces that bring warmth, comfort, and
                        elegance into everyday life.
                    </p>

                    <p className="mt-5 leading-8 text-brown">
                        We believe that a candle is more than a product — it creates
                        memories, transforms spaces, and adds a touch of luxury to every
                        moment.
                    </p>

                    <div className="mt-9">
                        <Button variant="primary">
                            Explore Collection →
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}