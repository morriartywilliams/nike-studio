import { useState, useEffect } from "react";

import { STORE }        from "./data/store.js";
import { useCart }      from "./hooks/useCart.js";
import { useFilters }   from "./hooks/useFilters.js";

import Navbar        from "./components/Navbar.jsx";
import Hero          from "./components/Hero.jsx";
import MarqueeStrip  from "./components/MarqueeStrip.jsx";
import Collections   from "./components/Collections.jsx";
import ShopSection   from "./components/shop/ShopSection.jsx";
import Editorial     from "./components/Editorial.jsx";
import Footer        from "./components/Footer.jsx";
import CartDrawer    from "./components/cart/CartDrawer.jsx";
import ProductModal  from "./components/ProductModal.jsx";

/**
 * Root application component.
 * Owns the overlay / modal state; all other state lives in custom hooks.
 */
export default function App() {
  /* ── Custom hooks ── */
  const {
    cart, cartCount, productIndex,
    addToCart, increaseQty, decreaseQty, removeItem,
  } = useCart();

  const {
    search, setSearch,
    collection, setCollection,
    size, setSize,
    sort, setSort,
    allCollections, allSizes,
    filteredProducts,
    resetFilters,
  } = useFilters();

  /* ── UI state ── */
  const [cartOpen,    setCartOpen]    = useState(false);
  const [previewId,   setPreviewId]   = useState(null);
  const [previewSize, setPreviewSize] = useState(null);

  /* Derived */
  const heroProducts   = filteredProducts.length > 0 ? filteredProducts : STORE.products;
  const previewProduct = previewId ? productIndex.get(previewId) : null;

  /* ── Body scroll lock when overlays are open ── */
  useEffect(() => {
    const locked = cartOpen || Boolean(previewId);
    document.body.classList.toggle("lock", locked);
    return () => document.body.classList.remove("lock");
  }, [cartOpen, previewId]);

  /* ── Global Escape key handler ── */
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key !== "Escape") return;
      setCartOpen(false);
      setPreviewId(null);
      setPreviewSize(null);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  /* ── Navigation helpers ── */
  const scrollToShop = () =>
    document.getElementById("shop")?.scrollIntoView({ behavior: "smooth", block: "start" });

  const focusCollection = (name) => {
    setCollection(name);
    document.getElementById("shop")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  /* ── Preview helpers ── */
  const openPreview = (id) => {
    const product = productIndex.get(id);
    if (!product) return;
    setPreviewId(id);
    setPreviewSize(product.sizes[0]);
  };

  const closePreview = () => {
    setPreviewId(null);
    setPreviewSize(null);
  };

  /* ── Add to cart (closes modal, opens drawer) ── */
  const handleAddToCart = (productId, selectedSize) => {
    addToCart(productId, selectedSize);
    closePreview();
    setCartOpen(true);
  };

  /* ── Quick-add from product card ── */
  const handleQuickAdd = (productId, defaultSize) => {
    addToCart(productId, defaultSize);
    setCartOpen(true);
  };

  return (
    <div className="page-shell">
      {/* ── Ambient decorative blobs ── */}
      <div
        className="ambient"
        style={{ top: 120, right: 12, width: 180, height: 180, background: "rgba(217,60,47,0.12)" }}
      />
      <div
        className="ambient"
        style={{ top: 580, left: -10, width: 220, height: 220, background: "rgba(86,117,255,0.09)" }}
      />
      <div
        className="ambient"
        style={{ bottom: 160, right: "4%", width: 180, height: 180, background: "rgba(21,107,88,0.12)" }}
      />

      {/* ── Navigation ── */}
      <Navbar
        cartCount={cartCount}
        onCartOpen={() => setCartOpen(true)}
        onFocusCollection={focusCollection}
      />

      {/* ── Main content ── */}
      <main>
        <Hero
          products={heroProducts}
          onShopScroll={scrollToShop}
          onFocusCollection={focusCollection}
          onPreview={openPreview}
        />

        <MarqueeStrip />

        <Collections onFocusCollection={focusCollection} />

        <ShopSection
          products={filteredProducts}
          search={search}
          collection={collection}
          size={size}
          sort={sort}
          allSizes={allSizes}
          allCollections={allCollections}
          onSearch={setSearch}
          onCollection={setCollection}
          onSize={setSize}
          onSort={setSort}
          onReset={resetFilters}
          onQuickAdd={handleQuickAdd}
          onPreview={openPreview}
        />

        <Editorial />
      </main>

      <Footer />

      {/* ── Cart drawer (conditional) ── */}
      {cartOpen && (
        <CartDrawer
          cart={cart}
          onClose={() => setCartOpen(false)}
          onIncrease={increaseQty}
          onDecrease={decreaseQty}
          onRemove={removeItem}
        />
      )}

      {/* ── Product preview modal (conditional) ── */}
      {previewProduct && (
        <ProductModal
          product={previewProduct}
          selectedSize={previewSize}
          onClose={closePreview}
          onSelectSize={setPreviewSize}
          onAddToCart={handleAddToCart}
        />
      )}
    </div>
  );
}
