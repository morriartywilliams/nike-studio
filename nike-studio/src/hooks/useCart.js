import { useState, useCallback, useEffect, useMemo } from "react";
import { STORE, CART_KEY } from "../data/store.js";

/**
 * Manages the shopping cart: persistence, add / increase / decrease / remove.
 */
export function useCart() {
  /* ── Initialise from localStorage ── */
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem(CART_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  /* ── Build a fast product lookup map ── */
  const productIndex = useMemo(
    () => new Map(STORE.products.map((p) => [p.id, p])),
    []
  );

  /* ── Persist on every change ── */
  useEffect(() => {
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(cart));
    } catch {
      /* storage unavailable — fail silently */
    }
  }, [cart]);

  /* ── Derived values ── */
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  /* ── Actions ── */
  const addToCart = useCallback(
    (productId, selectedSize) => {
      const product = productIndex.get(productId);
      if (!product) return;

      const size = selectedSize ?? product.sizes[0];

      setCart((prev) => {
        const existing = prev.find(
          (item) => item.id === product.id && item.size === size
        );
        if (existing) {
          return prev.map((item) =>
            item.id === product.id && item.size === size
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        }
        return [
          ...prev,
          {
            id:       product.id,
            name:     product.name,
            image:    product.image,
            price:    product.price,
            size,
            quantity: 1,
          },
        ];
      });
    },
    [productIndex]
  );

  const increaseQty = useCallback((productId, size) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === productId && item.size === size
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }, []);

  const decreaseQty = useCallback((productId, size) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === productId && item.size === size
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }, []);

  const removeItem = useCallback((productId, size) => {
    setCart((prev) =>
      prev.filter((item) => !(item.id === productId && item.size === size))
    );
  }, []);

  return {
    cart,
    cartCount,
    productIndex,
    addToCart,
    increaseQty,
    decreaseQty,
    removeItem,
  };
}
