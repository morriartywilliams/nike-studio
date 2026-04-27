import ProductImage from "./ui/ProductImage.jsx";
import { STORE }    from "../data/store.js";

/**
 * Three-column collection showcase.
 *
 * @param {{ onFocusCollection: (name: string) => void }} props
 */
export default function Collections({ onFocusCollection }) {
  return (
    <section className="section section-gap" id="collections">
      <div className="section-heading">
        <div>
          <span className="section-kicker">Featured collections</span>
          <h2>Curated around the pairs people actually want to wear.</h2>
        </div>
        <p>
          From Air Force essentials to statement Jordans and technical trainers
          — each section is focused, clean, and designed for fast discovery.
        </p>
      </div>

      <div className="collection-grid">
        {STORE.collections.map((col, i) => (
          <article
            key={col.name}
            className="collection-card"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="collection-copy">
              <span className="label">{col.label}</span>
              <h3>{col.name}</h3>
              <p>{col.description}</p>
              <p className="accent-note">{col.accent}</p>
            </div>

            <div className="collection-img-wrap">
              <ProductImage src={col.image} alt={col.name} />
            </div>

            <button
              className="btn btn-link"
              style={{ marginTop: 18 }}
              onClick={() => onFocusCollection(col.name)}
            >
              Explore {col.name} →
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
