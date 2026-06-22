"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import toast from "react-hot-toast";

export default function CheckoutPage() {
  const { cartItems, totalAmount, clearCart } = useCart();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    emirate: "",
    address: "",
    notes: "",
  });

  const whatsappNumber = "971509609311";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      toast.error("Your cart is empty");
      return;
    }

    const message = `New BAIDA Order

Customer Details:
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Emirate: ${formData.emirate}
Address: ${formData.address}
Notes: ${formData.notes || "N/A"}

Order Items:
${cartItems
  .map(
    (item) =>
      `${item.name} x ${item.quantity} = AED ${item.price * item.quantity}`
  )
  .join("\n")}

Payment Method: Cash on Delivery
Total: AED ${totalAmount}`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    clearCart();

    window.location.href = "/order-success";
  };

  return (
    <main className="min-h-screen bg-cream px-4 py-12 md:px-6 md:py-16">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-4xl font-light text-dark md:text-6xl">
          Checkout
        </h1>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_420px]">
          <form
            onSubmit={handlePlaceOrder}
            className="rounded-3xl bg-white p-6 shadow-sm md:p-8"
          >
            <h2 className="text-2xl font-light text-dark">
              Customer Details
            </h2>

            <div className="mt-6 grid gap-5">
              <input
                required
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="rounded-2xl border border-beige bg-cream px-5 py-4 outline-none focus:border-gold"
              />

              <input
                required
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="rounded-2xl border border-beige bg-cream px-5 py-4 outline-none focus:border-gold"
              />

              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="rounded-2xl border border-beige bg-cream px-5 py-4 outline-none focus:border-gold"
              />

              <select
                required
                name="emirate"
                value={formData.emirate}
                onChange={handleChange}
                className="rounded-2xl border border-beige bg-cream px-5 py-4 outline-none focus:border-gold"
              >
                <option value="">Select Emirate</option>
                <option value="Abu Dhabi">Abu Dhabi</option>
                <option value="Dubai">Dubai</option>
                <option value="Sharjah">Sharjah</option>
                <option value="Ajman">Ajman</option>
                <option value="Ras Al Khaimah">Ras Al Khaimah</option>
                <option value="Umm Al Quwain">Umm Al Quwain</option>
                <option value="Fujairah">Fujairah</option>
              </select>

              <textarea
                required
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Full Delivery Address"
                rows={4}
                className="resize-none rounded-2xl border border-beige bg-cream px-5 py-4 outline-none focus:border-gold"
              />

              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Order Notes (optional)"
                rows={3}
                className="resize-none rounded-2xl border border-beige bg-cream px-5 py-4 outline-none focus:border-gold"
              />

              <div className="rounded-2xl bg-cream p-5">
                <p className="font-medium text-dark">Payment Method</p>
                <p className="mt-2 text-brown">Cash on Delivery</p>
              </div>

              <button
                type="submit"
                className="rounded-full bg-dark px-8 py-4 text-cream transition hover:bg-brown"
              >
                Place Order
              </button>
            </div>
          </form>

          <div className="h-fit rounded-3xl bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-light text-dark">Order Summary</h2>

            {cartItems.length === 0 ? (
              <div className="mt-6 text-center">
                <p className="text-brown">Your cart is empty.</p>
                <Link
                  href="/products"
                  className="mt-5 inline-flex rounded-full bg-dark px-6 py-3 text-cream"
                >
                  Shop Products
                </Link>
              </div>
            ) : (
              <div className="mt-6 space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4 border-b pb-4">
                    <div className="relative h-20 w-20 overflow-hidden rounded-xl bg-beige">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-dark">{item.name}</h3>
                      <p className="text-sm text-brown">
                        Qty: {item.quantity}
                      </p>
                      <p className="mt-1 text-sm text-gold">
                        AED {item.price * item.quantity}
                      </p>
                    </div>
                  </div>
                ))}

                <div className="flex justify-between pt-3 text-xl text-dark">
                  <span>Total</span>
                  <span>AED {totalAmount}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}