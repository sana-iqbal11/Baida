"use client";

import { useRef } from "react";

import SectionHeader from "@/components/common/SectionHeader";
import { products } from "@/data/products";

import type { Swiper as SwiperType } from "swiper";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import "swiper/css";
import "swiper/css/navigation";
import ProductCard from "../product/ProductCard";

export default function BestSellers() {
  const bestSellers = products.filter((p) => p.isBestSeller);
  const swiperRef = useRef<SwiperType | null>(null);

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
    swiperRef.current?.autoplay.start();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
    swiperRef.current?.autoplay.start();
  };

  return (
    <section className="bg-cream px-6 py-15">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          tag="Customer Favorites"
          title="Best Sellers"
          description="Discover our most loved handcrafted candles."
        />

        <div className="relative mt-10">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={28}
            slidesPerView={1.15}
            loop={true}
            speed={800}
            grabCursor={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              swiper.autoplay.start();
            }}
          >
            {bestSellers.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            onClick={handlePrev}
            className="
              hidden md:flex
              absolute top-1/2 -left-6 z-20
              h-14 w-14 -translate-y-1/2
              items-center justify-center
              rounded-full bg-dark text-cream
              shadow-xl transition hover:bg-gold
            "
          >
            <FiArrowLeft className="text-xl" />
          </button>

          <button
            onClick={handleNext}
            className="
              hidden md:flex
              absolute top-1/2 -right-6 z-20
              h-14 w-14 -translate-y-1/2
              items-center justify-center
              rounded-full bg-dark text-cream
              shadow-xl transition hover:bg-gold
            "
          >
            <FiArrowRight className="text-xl" />
          </button>

          <div className="mt-8 flex justify-center gap-4 md:hidden">
            <button
              onClick={handlePrev}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-dark text-cream shadow-lg"
            >
              <FiArrowLeft />
            </button>

            <button
              onClick={handleNext}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-dark text-cream shadow-lg"
            >
              <FiArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}