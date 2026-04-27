/**
 * Sticky glassmorphic top navigation bar.
 *
 * @param {{
 *   cartCount:          number,
 *   onCartOpen:         () => void,
 *   onFocusCollection:  (name: string) => void,
 * }} props
 */
export default function Navbar({ cartCount, onCartOpen, onFocusCollection }) {
  return (
    <header className="topbar">
      <a className="brand" href="#home">
        <div className="brand-mark">NS</div>
        <div className="brand-text">
          <strong>Nike Studio</strong>
          <span>Premium Footwear</span>
        </div>
      </a>

      <nav className="main-nav" aria-label="Primary">
        <a href="#home">Home</a>
        <a href="#collections">Collections</a>
        <a href="#shop">Shop</a>
        <a href="#experience">Experience</a>
      </nav>

      <div className="header-actions">
        <button
          className="btn btn-ghost"
          onClick={() => onFocusCollection("Jordan")}
        >
          Shop Jordan
        </button>
        <button className="btn btn-cart" onClick={onCartOpen}>
          Cart <span className="cart-count">{cartCount}</span>
        </button>
      </div>
    </header>
  );
}
