"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    totalAmount,
  } = useCart();

  const whatsappNumber = "971509609311";

  const checkoutMessage = `Hello BAIDA,

I want to place an order:

${cartItems
  .map(
    (item) =>
      `${item.name} - Qty: ${item.quantity} - AED ${
        item.price * item.quantity
      }`
  )
  .join("\n")}

Total: AED ${totalAmount}`;

  return (
    <main className="min-h-screen bg-cream px-4 py-12 md:px-6 md:py-16">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-4xl font-light text-dark md:text-6xl">
          Your Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="mt-10 rounded-3xl bg-white p-8 text-center">
            <p className="text-brown">Your cart is empty.</p>

            <Link
              href="/products"
              className="mt-6 inline-flex rounded-full bg-dark px-8 py-3 text-cream"
            >
              Shop Products
            </Link>
          </div>
        ) : (
          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_380px]">
            <div className="space-y-5">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="grid gap-5 rounded-3xl bg-white p-4 shadow-sm md:grid-cols-[120px_1fr_auto]"
                >
                  <div className="relative h-32 overflow-hidden rounded-2xl bg-beige">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <h2 className="text-2xl font-light text-dark">
                      {item.name}
                    </h2>

                    <p className="mt-2 text-brown">AED {item.price}</p>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="mt-4 text-sm text-red-500"
                    >
                      Remove
                    </button>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="h-9 w-9 rounded-full bg-cream text-dark"
                    >
                      -
                    </button>

                    <span className="min-w-6 text-center text-dark">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="h-9 w-9 rounded-full bg-cream text-dark"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="h-fit rounded-3xl bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-light text-dark">Order Summary</h2>

              <div className="mt-6 flex justify-between text-brown">
                <span>Total</span>
                <span>AED {totalAmount}</span>
              </div>

              <Link
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  checkoutMessage
                )}`}
                target="_blank"
                className="mt-6 flex w-full justify-center rounded-full bg-dark px-6 py-4 text-cream"
              >
                Checkout on WhatsApp
              </Link>

              <button
                onClick={clearCart}
                className="mt-3 w-full rounded-full border border-beige px-6 py-4 text-dark"
              >
                Clear Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}