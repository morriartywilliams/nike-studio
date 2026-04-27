/**
 * Site-wide footer with a brief description and navigation links.
 */
export default function Footer() {
  return (
    <footer className="footer section">
      <p>
        Concept storefront for Nike-inspired footwear shopping. Designed to
        feel professional, clean, and easy to use.
      </p>
      <nav className="footer-links" aria-label="Footer">
        <a href="#home">Home</a>
        <a href="#collections">Collections</a>
        <a href="#shop">Catalog</a>
        <a href="#experience">Experience</a>
      </nav>
    </footer>
  );
}
