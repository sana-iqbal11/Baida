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
      <div className="absolute left-4 top-4 z-10">
        <ProductTag label={product.tag} />
      </div>

      {/* TEXT SECTION */}
      <div className="absolute bottom-0 left-0 z-10 w-full p-5 text-white md:p-6">
        <h3 className="text-xl font-light leading-snug break-words md:text-2xl">
          {product.name}
        </h3>

        <p className="mt-2 text-base text-gold md:text-lg">
          AED {product.price}
        </p>
      </div>

      {/* BUTTONS */}
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