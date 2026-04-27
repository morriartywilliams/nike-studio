import { STORE } from "../data/store.js";

/**
 * Editorial section: brand story card, service cards,
 * testimonials, and newsletter sign-up.
 */
export default function Editorial() {
  return (
    <section className="section section-gap" id="experience">
      <div className="section-heading">
        <div>
          <span className="section-kicker">Why this store feels premium</span>
          <h2>
            Clean visuals, quick decisions, and a smoother path from browse to
            basket.
          </h2>
        </div>
        <p>
          The layout stays focused on shoe discovery while giving enough detail,
          trust signals, and motion to feel like a high-end concept brand site.
        </p>
      </div>

      <div className="editorial-grid">
        {/* ── Story card ── */}
        <article className="story-card">
          <p className="mini-label">Design direction</p>
          <h3>
            Minimal enough to feel premium, bold enough to still feel like Nike
            culture.
          </h3>
          <p>
            The experience balances soft neutral surfaces with sharp contrast,
            editorial typography, and bold product presentation so Air Force and
            Jordan styles still feel distinct.
          </p>
          <ul className="story-list">
            <li>
              Dedicated collection stories keep Air Force, Jordan, and
              performance shoes easy to explore.
            </li>
            <li>
              Fast filters, preview modal, and cart drawer make the flow simple
              without losing polish.
            </li>
            <li>
              Responsive grids and smooth spacing keep the layout comfortable on
              smaller screens.
            </li>
          </ul>
        </article>

        {/* ── Right column ── */}
        <div>
          {/* Service cards */}
          <div className="service-grid">
            {STORE.services.map((service, i) => (
              <article key={i} className="service-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>

          {/* Testimonials */}
          <div className="testimonial-grid">
            {STORE.testimonials.map((t, i) => (
              <article key={i} className="testimonial-card">
                <strong>"{t.quote}"</strong>
                <em>
                  {t.author} / {t.role}
                </em>
              </article>
            ))}
          </div>

          {/* Newsletter */}
          <article className="newsletter-card">
            <div className="newsletter-header">
              <div>
                <p className="mini-label">Member updates</p>
                <h3>Stay close to new drops and weekly highlights.</h3>
              </div>
              <span className="notice-chip">Concept sign-up</span>
            </div>
            <p>
              This demo keeps the form simple, but the section is ready for real
              newsletter or member-drop flows.
            </p>
            <div className="newsletter-form">
              <input
                className="newsletter-input"
                type="email"
                placeholder="Enter your email"
                aria-label="Email address"
              />
              <button className="btn btn-primary">Join the list</button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
