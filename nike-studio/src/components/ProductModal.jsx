import ProductImage  from "./ui/ProductImage.jsx";
import Swatches      from "./ui/Swatches.jsx";
import { formatPrice } from "../utils/format.js";

/**
 * Full-screen product preview modal with size selection and add-to-cart.
 *
 * @param {{
 *   product:      object,
 *   selectedSize: number,
 *   onClose:      () => void,
 *   onSelectSize: (size: number) => void,
 *   onAddToCart:  (id: string, size: number) => void,
 * }} props
 */
export default function ProductModal({
  product,
  selectedSize,
  onClose,
  onSelectSize,
  onAddToCart,
}) {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={`Product details: ${product.name}`}
      onClick={handleOverlayClick}
    >
      <div className="modal-shell">
        {/* ── Left: product image ── */}
        <div className="modal-media">
          <ProductImage src={product.image} alt={product.name} />
        </div>

        {/* ── Right: product copy ── */}
        <div className="modal-copy">
          {/* Header */}
          <div className="modal-header">
            <div>
              <p className="mini-label">
                {product.collection} / {product.category}
              </p>
              <h3>{product.name}</h3>
            </div>
            <button
              className="btn btn-icon"
              aria-label="Close product preview"
              onClick={onClose}
            >
              ✕
            </button>
          </div>

          {/* Price + rating */}
          <div className="modal-price-row">
            <strong>{formatPrice(product.price)}</strong>
            <span className="rating-pill">{product.rating.toFixed(1)} ★</span>
          </div>

          {/* Description */}
          <p>{product.description}</p>

          {/* Size selector */}
          <section>
            <strong>Select size</strong>
            <div className="size-grid">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  className={`size-btn${selectedSize === s ? " active" : ""}`}
                  onClick={() => onSelectSize(s)}
                  aria-pressed={selectedSize === s}
                >
                  US {s}
                </button>
              ))}
            </div>
          </section>

          {/* Colour swatches */}
          <section>
            <strong>Color direction</strong>
            <Swatches colors={product.colors} />
          </section>

          <p className="subtle-desc">
            Smooth cushioning, premium finish, and a fast checkout flow built
            for daily shopping.
          </p>

          {/* CTAs */}
          <div className="modal-actions">
            <button
              className="btn btn-primary"
              onClick={() => onAddToCart(product.id, selectedSize)}
            >
              Add to cart — US {selectedSize}
            </button>
            <button className="btn btn-secondary" onClick={onClose}>
              Keep browsing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
