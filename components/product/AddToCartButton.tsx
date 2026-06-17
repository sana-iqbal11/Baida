"use client";

import Button from "@/components/common/Button";
import { useCart } from "@/context/CartContext";
import { Product } from "@/types/product";

type Props = {
  product: Product;
  className?: string;
};

export default function AddToCartButton({ product, className = "" }: Props) {
  const { addToCart } = useCart();

  return (
    <Button
      variant="primary"
      className={className}
      onClick={() => {
        addToCart(product);
        alert(`${product.name} added to cart`);
      }}
    >
      Add to Cart
    </Button>
  );
}