import Image from "next/image";
import Button from "../common/Button";
import ProductTag from "../common/ProductTag";
import { Product } from "@/types/product";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative h-[500px] overflow-hidden rounded-xl bg-beige">
      {/* IMAGE */}
      <Image
        src={product.image}
        alt={product.name}
        fill
        className="object-cover transition-all duration-700 group-hover:scale-110"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* TAG */}
      <div className="absolute left-4 top-4">
        <ProductTag label={product.tag} />
      </div>

      {/* TEXT SECTION (FIXED) */}
      <div className="absolute bottom-0 left-0 w-full p-5 md:p-6 text-white">
        <h3 className="text-xl md:text-2xl font-light leading-snug break-words">
          {product.name}
        </h3>

        <p className="mt-2 text-gold text-base md:text-lg">
          AED {product.price}
        </p>
      </div>

      {/* HOVER BUTTONS (FIXED SPACING) */}
      {/* HOVER BUTTONS (COLUMN LAYOUT FIX) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100">
        <div className="flex flex-col gap-3 px-6 w-full max-w-[220px]">
          <Button
            href={`/products/${product.slug}`}
            variant="secondary"
            className="w-full whitespace-nowrap"
          >
            View Details
          </Button>

          <Button
            variant="primary"
            className="w-full cursor-pointer whitespace-nowrap"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
