import Image from "next/image";
import Link from "next/link";
import { Category } from "@/types/category";

type CategoryCardProps = {
  category: Category;
};

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/products?category=${category.slug}`}
      className="group relative block h-[420px] overflow-hidden rounded-t-full bg-beige"
    >
      <Image
        src={category.image}
        alt={category.name}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

      <div className="absolute bottom-0 left-0 w-full p-7 text-center">
        <h3 className="text-3xl font-light text-white">
          {category.name}
        </h3>
      </div>
    </Link>
  );
}