"use client";

import Image from "next/image";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

type Props = {
    isOpen: boolean;
    onClose: () => void;
};

export default function CartDrawer({ isOpen, onClose }: Props) {
    const {
        cartItems,
        totalAmount,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
    } = useCart();

    const whatsappNumber = "971509609311";

    const message = `Hello BAIDA,

I want to place an order:

${cartItems
            .map(
                (item) =>
                    `${item.name} x ${item.quantity} = AED ${item.price * item.quantity}`
            )
            .join("\n")}

Total: AED ${totalAmount}`;

    return (
        <>
            <div
                onClick={onClose}
                className={`fixed inset-0 z-[90] bg-black/30  transition-opacity duration-500 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
            />

            <aside
                className={`fixed right-0 top-0 z-[100] h-dvh w-full max-w-md bg-cream shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-full opacity-0"
                    }`}
            >
                <div className="h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />

                <div className="flex items-center justify-between border-b border-beige px-6 py-5">
                    <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-gold">
                            BAIDA
                        </p>
                        <h2 className="text-2xl font-light text-dark">Shopping Cart</h2>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        className="flex cursor-pointer h-10 w-10 items-center justify-center rounded-full border border-beige text-dark transition hover:bg-beige"
                    >
                        ✕
                    </button>
                </div>

                <div className="h-[calc(100dvh-230px)] overflow-y-auto px-5 py-5">
                    {cartItems.length === 0 ? (
                        <div className="flex h-full flex-col items-center justify-center text-center">
                            <p className="text-2xl font-light text-dark">Your cart is empty</p>
                            <p className="mt-3 text-sm text-brown">
                                Add your favorite candles to continue.
                            </p>
                            <Link
                                href="/products"
                                onClick={onClose}
                                className="mt-6 rounded-full bg-dark px-6 py-3 text-cream"
                            >
                                Shop Collection
                            </Link>
                        </div>

                    ) : (
                        <div className="space-y-4">
                            {cartItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="rounded-3xl bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                                >
                                    <div className="flex gap-4">
                                        <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl bg-beige">
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>

                                        <div className="flex flex-1 flex-col">
                                            <div className="flex justify-between gap-3">
                                                <h3 className="text-base font-medium text-dark">
                                                    {item.name}
                                                </h3>

                                                <p className="text-sm text-brown">
                                                    AED {item.price * item.quantity}
                                                </p>
                                            </div>

                                            <p className="mt-1 text-sm text-brown">
                                                AED {item.price}
                                            </p>

                                            <div className="mt-auto flex items-center justify-between pt-3">
                                                <div className="flex items-center gap-2 rounded-full bg-cream px-2 py-1">
                                                    <button
                                                        type="button"
                                                        onClick={() => decreaseQuantity(item.id)}
                                                        className="flex cursor-pointer h-7 w-7 items-center justify-center rounded-full bg-white text-dark"
                                                    >
                                                        -
                                                    </button>

                                                    <span className="min-w-5 text-center text-sm text-dark">
                                                        {item.quantity}
                                                    </span>

                                                    <button
                                                        type="button"
                                                        onClick={() => increaseQuantity(item.id)}
                                                        className="flex cursor-pointer h-7 w-7 items-center justify-center rounded-full bg-white text-dark"
                                                    >
                                                        +
                                                    </button>
                                                </div>

                                                <button
                                                    type="button"
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="text-xs cursor-pointer text-red-500 transition hover:underline"
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="absolute bottom-0 left-0 w-full border-t border-beige bg-white px-6 py-5">
                    <div className="mb-5 flex items-center justify-between text-dark">
                        <span className="text-sm uppercase tracking-[0.2em] text-brown">
                            Total
                        </span>
                        <span className="text-2xl font-light">AED {totalAmount}</span>
                    </div>

                    <Link
                        href="/checkout"
                        onClick={onClose}
                        className={`block rounded-full py-4 text-center transition ${cartItems.length === 0
                                ? "pointer-events-none bg-beige text-brown"
                                : "bg-dark text-cream hover:bg-brown"
                            }`}
                    >
                        Proceed to Checkout
                    </Link>
                </div>
            </aside>
        </>
    );
}