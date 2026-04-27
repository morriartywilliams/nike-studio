import ProductImage  from "../ui/ProductImage.jsx";
import { formatPrice } from "../../utils/format.js";

/**
 * Slide-in cart drawer with item list, quantity steppers, and order summary.
 *
 * @param {{
 *   cart:       object[],
 *   onClose:    () => void,
 *   onIncrease: (id: string, size: number) => void,
 *   onDecrease: (id: string, size: number) => void,
 *   onRemove:   (id: string, size: number) => void,
 * }} props
 */
export default function CartDrawer({ cart, onClose, onIncrease, onDecrease, onRemove }) {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping  = subtotal === 0 || subtotal >= 250 ? 0 : 18;
  const total     = subtotal + shipping;

  return (
    <>
      {/* Backdrop */}
      <div className="overlay" onClick={onClose} aria-hidden="true" />

      {/* Drawer panel */}
      <aside className="cart-drawer" aria-label="Shopping cart">
        {/* Header */}
        <div className="drawer-header">
          <div>
            <p className="mini-label">Your cart</p>
            <h3>Ready to check out</h3>
          </div>
          <button
            className="btn btn-icon"
            aria-label="Close cart"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        {/* Free-shipping nudge */}
        <p className="drawer-note">
          Free shipping unlocks when your basket reaches {formatPrice(250)}.
        </p>

        {/* Item list */}
        <div className="drawer-body">
          {cart.length > 0 ? (
            cart.map((item) => (
              <article
                className="cart-item"
                key={`${item.id}-${item.size}`}
              >
                <div className="cart-item-img">
                  <ProductImage src={item.image} alt={item.name} />
                </div>

                <div className="cart-item-details">
                  <div className="cart-item-top">
                    <div>
                      <strong>{item.name}</strong>
                      <span className="subtle-text">US {item.size}</span>
                    </div>
                    <strong>{formatPrice(item.price * item.quantity)}</strong>
                  </div>

                  <div className="cart-item-bottom">
                    <div className="qty-stepper">
                      <button
                        aria-label="Decrease quantity"
                        onClick={() => onDecrease(item.id, item.size)}
                      >
                        −
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        aria-label="Increase quantity"
                        onClick={() => onIncrease(item.id, item.size)}
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="remove-btn"
                      onClick={() => onRemove(item.id, item.size)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="empty-cart">
              <h3>Your cart is empty</h3>
              <p>
                Add a pair to see totals, shipping progress, and a
                ready-to-buy summary.
              </p>
            </div>
          )}
        </div>

        {/* Order summary */}
        <div className="drawer-footer">
          <div className="summary-line">
            <span>Subtotal</span>
            <strong>{formatPrice(subtotal)}</strong>
          </div>
          <div className="summary-line">
            <span>Shipping</span>
            <strong>{shipping === 0 ? "Free" : formatPrice(shipping)}</strong>
          </div>
          <div className="summary-line total">
            <span>Total</span>
            <strong>{formatPrice(total)}</strong>
          </div>
          <div className="drawer-actions">
            <button className="btn btn-primary">Secure checkout</button>
            <button className="btn btn-secondary" onClick={onClose}>
              Continue shopping
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
