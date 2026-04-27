import { STORE } from "../data/store.js";

/**
 * Scrolling pill strip showcasing store highlights.
 * Renders each marquee item twice so the strip looks full even at wide viewports.
 */
export default function MarqueeStrip() {
  const items = [...STORE.marquee, ...STORE.marquee];
  return (
    <section className="marquee-strip section" aria-label="Store highlights">
      {items.map((item, i) => (
        <span key={i} className="marquee-pill">
          {item}
        </span>
      ))}
    </section>
  );
}
