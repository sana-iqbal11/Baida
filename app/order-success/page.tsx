import Link from "next/link";

export default function OrderSuccessPage() {
  return (
    <main className="min-h-screen bg-cream px-4 py-20 md:px-6">
      <div className="mx-auto max-w-3xl rounded-[32px] bg-white p-8 text-center shadow-sm md:p-12">
        <p className="text-sm uppercase tracking-[0.35em] text-gold">
          Order Received
        </p>

        <h1 className="mt-4 text-4xl font-light text-dark md:text-6xl">
          Thank You
        </h1>

        <p className="mx-auto mt-6 max-w-xl leading-8 text-brown">
          Your order request has been received. Our team will contact you
          shortly to confirm your order and delivery details.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="https://wa.me/971509609311"
            target="_blank"
            className="rounded-full bg-dark px-8 py-4 text-cream transition hover:bg-brown"
          >
            Contact on WhatsApp
          </Link>

          <Link
            href="tel:+971509609311"
            className="rounded-full border border-beige px-8 py-4 text-dark transition hover:bg-beige"
          >
            Call BAIDA
          </Link>
        </div>

        <Link
          href="/products"
          className="mt-8 inline-block text-sm text-brown underline"
        >
          Continue Shopping
        </Link>
      </div>
    </main>
  );
}