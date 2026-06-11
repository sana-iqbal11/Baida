import SectionHeader from "@/components/common/SectionHeader";
import { features } from "@/data/features";

import { FiGift, FiHeart, FiSun, FiFeather } from "react-icons/fi";

export default function WhyChooseBaida() {
  const icons = [
    <FiFeather key="feather" size={26} />,
    <FiHeart key="heart" size={26} />,
    <FiGift key="gift" size={26} />,
    <FiSun key="sun" size={26} />,
  ];

  return (
    <section className="bg-cream px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          tag="Why Choose Us"
          title="Why Choose BAIDA"
          description="Thoughtfully crafted candles designed to bring warmth, comfort and elegance into your space."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="group rounded-[28px] border border-beige/60 bg-white/80 p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-gold hover:shadow-xl"
            >
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-gold/50 bg-beige text-dark transition group-hover:bg-gold group-hover:text-white">
                {icons[index]}
              </div>

              <h3 className="text-2xl font-light text-dark">
                {feature.title}
              </h3>

              <p className="mt-4 leading-7 text-brown">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}