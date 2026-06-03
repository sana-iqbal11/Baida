import { Product } from "@/data/types";
import Image from "next/image";
import ProductTag from "../common/ProductTag";
import Button from "../common/Button";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative h-[500px] overflow-hidden bg-beige">
      <Image
        src={product.image}
        alt={product.name}
        fill
        className="object-cover transition-all duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      <div className="absolute left-5 top-5">
        <ProductTag label={product.tag} />
      </div>

      <div className="absolute bottom-0 left-0 w-full p-6 text-white">
        <h3 className="text-2xl font-light">{product.name}</h3>
        <p className="mt-2 text-gold">AED {product.price}</p>
      </div>

      <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 transition-all duration-500 group-hover:opacity-100">
        <Button href={`/products/${product.slug}`} variant="secondary">
          View Details
        </Button>

        <Button variant="primary" className="cursor-pointer" >
          Add to Cart
        </Button>
      </div>
    </div>
  );
}