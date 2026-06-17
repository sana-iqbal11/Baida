"use client";

import Image from "next/image";
import Button from "../common/Button";
import ProductTag from "../common/ProductTag";
import { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";
import AddToCartButton from "./AddToCartButton";
import toast from "react-hot-toast";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="group relative h-[500px] overflow-hidden rounded-xl bg-beige">
      <Image
        src={product.image}
        alt={product.name}
        fill
        className="object-cover transition-all duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      <div className="absolute left-4 top-4 z-10">
        <ProductTag label={product.tag} />
      </div>

      <div className="absolute bottom-0 left-0 z-10 w-full p-5 text-white md:p-6">
        <h3 className="text-xl font-light leading-snug break-words md:text-2xl">
          {product.name}
        </h3>

        <p className="mt-2 text-base text-gold md:text-lg">
          AED {product.price}
        </p>
      </div>

      <div
        className="
          absolute inset-0 z-20
          flex items-center justify-center
          opacity-100
          md:opacity-0
          transition-all duration-500
          md:group-hover:opacity-100
        "
      >
        <div className="flex w-full max-w-[220px] flex-col gap-3 px-6">
          <Button
            href={`/products/${product.slug}`}
            variant="secondary"
            className="w-full whitespace-nowrap"
          >
            View Details
          </Button>

          <AddToCartButton
            product={product}
            className="w-full cursor-pointer whitespace-nowrap"
            
          />
          
        </div>
      </div>
    </div>
  );
}