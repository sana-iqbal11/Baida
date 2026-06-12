export default function AboutHero() {
  return (
    <section
      className="relative flex min-h-[75vh] items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/aboutheros.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/35" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white">
        <p className="mb-4 text-sm uppercase tracking-[0.4em] text-gold">
          Our Story
        </p>

        <h1 className="text-5xl font-light md:text-7xl">
          About BAIDA
        </h1>

        <p className="mx-auto mt-6 max-w-2xl lg:text-lg leading-8 text-white/90">
          Crafted with passion, inspired by elegance, and designed
          to bring warmth, comfort, and beautiful moments into every space.
        </p>
      </div>
    </section>
  );
}