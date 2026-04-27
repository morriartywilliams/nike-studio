import ProductImage from "./ui/ProductImage.jsx";
import Swatches     from "./ui/Swatches.jsx";
import { STORE }    from "../data/store.js";
import { formatPrice } from "../utils/format.js";

/**
 * Full-width hero section with editorial copy and a featured product card.
 *
 * @param {{
 *   products:           object[],
 *   onShopScroll:       () => void,
 *   onFocusCollection:  (name: string) => void,
 *   onPreview:          (id: string) => void,
 * }} props
 */
export default function Hero({ products, onShopScroll, onFocusCollection, onPreview }) {
  const topProduct = products[0] ?? STORE.products[0];

  return (
    <section className="hero section" id="home">
      {/* ── Left copy column ── */}
      <div className="hero-copy">
        <span className="eyebrow">{STORE.hero.eyebrow}</span>
        <h1>{STORE.hero.title}</h1>
        <p>{STORE.hero.description}</p>

        <div className="hero-actions">
          <button className="btn btn-primary" onClick={onShopScroll}>
            Shop the collection
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => onFocusCollection("Jordan")}
          >
            Focus on Jordans
          </button>
        </div>

        <div className="hero-stats">
          {STORE.stats.map((stat, i) => (
            <div
              className="stat-card"
              key={i}
              style={{ animationDelay: `${0.1 + i * 0.08}s` }}
            >
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Right visual column ── */}
      <div className="hero-visual">
        <article className="hero-card">
          <span className="hero-badge">Top pick right now</span>

          <div className="hero-img-wrap">
            <ProductImage src={topProduct.image} alt={topProduct.name} />
          </div>

          <div className="hero-meta">
            <div className="hero-title">
              <strong>{topProduct.name}</strong>
              <p>{topProduct.tagline}</p>
            </div>
            <span className="price-pill">{formatPrice(topProduct.price)}</span>
          </div>

          <div className="hero-footer">
            <Swatches colors={topProduct.colors} />
            <button
              className="btn btn-secondary"
              onClick={() => onPreview(topProduct.id)}
            >
              View details
            </button>
          </div>
        </article>

        <div className="floating-note one">Free shipping on bigger baskets</div>
        <div className="floating-note two">Member-ready drops every week</div>
      </div>
    </section>
  );
}
