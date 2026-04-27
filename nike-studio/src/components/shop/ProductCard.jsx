import ProductImage from "../ui/ProductImage.jsx";
import Swatches     from "../ui/Swatches.jsx";
import { formatPrice } from "../../utils/format.js";

/**
 * Individual product card shown in the catalog grid.
 *
 * @param {{
 *   product:     object,
 *   idx:         number,
 *   onQuickAdd:  (id: string, size: number) => void,
 *   onPreview:   (id: string) => void,
 * }} props
 */
export default function ProductCard({ product, onQuickAdd, onPreview, idx }) {
  const visibleSizes = product.sizes.slice(0, 4);
  const extraCount   = product.sizes.length - visibleSizes.length;

  return (
    <article
      className="product-card"
      style={{ animationDelay: `${idx * 0.07}s` }}
    >
      {/* ── Top meta row ── */}
      <div className="card-top">
        <span className="card-badge">{product.badge}</span>
        <span className="rating-pill">⭐ {product.rating.toFixed(1)}</span>
      </div>

      {/* ── Product image ── */}
      <div className="product-img-wrap">
        <ProductImage src={product.image} alt={product.name} />
      </div>

      {/* ── Copy block ── */}
      <div className="product-copy">
        <div className="product-header">
          <div>
            <p className="mini-label" style={{ marginBottom: 4 }}>
              {product.collection}
            </p>
            <h3>{product.name}</h3>
          </div>
          <span className="price-pill">{formatPrice(product.price)}</span>
        </div>

        <p>{product.tagline}</p>
        <Swatches colors={product.colors} />

        <div className="size-row">
          {visibleSizes.map((s) => (
            <span key={s} className="size-pill">
              US {s}
            </span>
          ))}
          {extraCount > 0 && (
            <span className="size-pill">+{extraCount}</span>
          )}
        </div>
      </div>

      {/* ── CTA buttons ── */}
      <div className="card-actions">
        <button
          className="btn btn-primary"
          onClick={() => onQuickAdd(product.id, product.sizes[0])}
        >
          Quick add
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => onPreview(product.id)}
        >
          Preview
        </button>
      </div>
    </article>
  );
}
