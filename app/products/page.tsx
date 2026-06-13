import ProductCard from "@/components/product/ProductCard";
import SectionHeader from "@/components/common/SectionHeader";
import { products } from "@/data/products";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-cream">
      {/* Hero */}
       <section
        className="relative bg-cover bg-center px-6 py-24 text-center md:py-32"
        style={{
          backgroundImage: "url('/images/contact.webp')",
        }}
      >
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-gold">
          Our Collection
        </p>

        <h1 className="text-5xl font-light text-dark md:text-7xl">
          Handcrafted Candles
        </h1>

        <div className="mt-5 flex items-center justify-center gap-3">
          <span className="h-px w-12 bg-gold"></span>
          <span className="text-sm text-gold">✦</span>
          <span className="h-px w-12 bg-gold"></span>
        </div>

        <p className="mx-auto mt-6 max-w-2xl leading-8 text-brown">
          Explore BAIDA scented candles crafted to bring warmth, comfort and
          elegance into your space.
        </p>
      </section>

      {/* Products Grid */}
      <section className="px-4 pb-24 md:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            tag="Shop Now"
            title="All Products"
            description="Choose your favorite candle and view details before ordering."
          />

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}