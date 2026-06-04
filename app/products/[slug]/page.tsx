import Image from "next/image";
import { products } from "@/data/products";
import Button from "@/components/common/Button";
import SectionHeader from "@/components/common/SectionHeader";
import ProductCard from "@/components/product/ProductCard";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductDetailsPage({ params }: Props) {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return <main className="bg-cream p-10">Product not found</main>;
  }

  const recommendedProducts = products
    .filter((item) => item.slug !== product.slug)
    .slice(0, 4);

  return (
    <main className="bg-cream px-6 py-16">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
        <div className="relative h-[500px] overflow-hidden bg-beige">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gold">
            {product.tag}
          </p>

          <h1 className="text-5xl font-light text-dark">
            {product.name}
          </h1>

          <p className="mt-4 text-2xl text-brown">
            AED {product.price}
          </p>

          <p className="mt-6 leading-8 text-brown">
            {product.description}
          </p>

          <div className="mt-8 space-y-3 text-dark">
            <p>Size: {product.size}</p>
            <p>Burn Time: {product.burnTime}</p>
          </div>

          <div className="mt-8">
            <Button variant="primary">
              Add to Cart
            </Button>
          </div>
        </div>
      </div>

      <section className="mx-auto mt-24 max-w-7xl">
        <SectionHeader
          tag="You May Also Like"
          title="Recommended Products"
          description="Explore more handcrafted candles from BAIDA."
        />

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {recommendedProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </main>
  );
}