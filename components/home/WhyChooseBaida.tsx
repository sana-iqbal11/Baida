import SectionHeader from "@/components/common/SectionHeader";
import { features } from "@/data/features";

import { FiGift, FiHeart, FiSun, FiFeather } from "react-icons/fi";

export default function WhyChooseBaida() {
  const icons = [
    <FiFeather key="feather" size={24} />,
    <FiHeart key="heart" size={24} />,
    <FiGift key="gift" size={24} />,
    <FiSun key="sun" size={24} />,
  ];

  return (
    <section className="bg-cream px-3 py-16 md:px-6 md:py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          tag="Why Choose Us"
          title="Why Choose BAIDA"
          description="Thoughtfully crafted candles designed to bring warmth, comfort and elegance into your space."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="group rounded-[24px] border border-gold/40 bg-white p-6 text-center shadow-md transition-all duration-300 lg:p-8 lg:hover:-translate-y-2 lg:hover:border-gold lg:hover:shadow-xl"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-gold/50 bg-gold text-white transition lg:bg-beige lg:text-dark lg:group-hover:bg-gold lg:group-hover:text-white">
                {icons[index]}
              </div>

              <h3 className="text-xl font-light text-dark lg:text-2xl">
                {feature.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-brown lg:mt-4 lg:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}