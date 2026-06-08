"use client";

import { categories } from "@/data/categories";
import CategoryCard from "@/components/categories/CategoryCard";
import SectionHeader from "@/components/common/SectionHeader";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";


import "swiper/css";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

export default function TopCategories() {
  return (
    <section className="bg-cream px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          tag="Shop By Category"
          title="Explore Collections"
          description="Choose your favorite candle style from our handcrafted collections."
        />

        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".category-prev",
            nextEl: ".category-next",
          }}
          spaceBetween={28}
          slidesPerView={1.15}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {categories.map((category) => (
            <SwiperSlide key={category.id}>
              <CategoryCard category={category} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-10 flex justify-center gap-4">
          <button className="category-prev flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-dark text-cream transition hover:bg-gold">
            <FiArrowLeft size={18} />
          </button>

          <button className="category-next flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-dark text-cream transition hover:bg-gold">
            <FiArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}