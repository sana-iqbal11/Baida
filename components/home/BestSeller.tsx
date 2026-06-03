"use client";

import { products } from "@/data/products";
import SectionHeader from "@/components/common/SectionHeader";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import "swiper/css";
import "swiper/css/navigation";
import ProductCard from "../product/ProductCard";

export default function BestSellers() {
  const bestSellers = products.filter((product) => product.isBestSeller);

  return (
    <section className="bg-cream px-6 py-15">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          tag="Customer Favorites"
          title="Best Sellers"
          description="Discover our most loved handcrafted candles."
        />

        <Swiper
          className="baida-swiper"
          modules={[Navigation]}
          navigation={{
            prevEl: ".best-prev",
            nextEl: ".best-next",
          }}
          spaceBetween={28}
          slidesPerView={1.15}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {bestSellers.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-10 flex justify-center gap-4">
          <button className="best-prev cursor-pointer flex h-12 w-12 items-center justify-center rounded-full bg-dark text-cream transition-all duration-300 hover:bg-gold">
            <FiArrowLeft size={18} />
          </button>

          <button className="best-next cursor-pointer flex h-12 w-12 items-center justify-center rounded-full bg-dark text-cream transition-all duration-300 hover:bg-gold">
            <FiArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}