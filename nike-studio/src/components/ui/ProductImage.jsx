import { useState } from "react";

/**
 * Lazy-loaded product image with a greyscale fallback on error.
 * @param {{ src: string, alt: string, className?: string }} props
 */
export default function ProductImage({ src, alt, className = "" }) {
  const [hasError, setHasError] = useState(false);

  return (
    <img
      className={className}
      src={src}
      alt={alt}
      loading="lazy"
      style={hasError ? { opacity: 0.3, filter: "grayscale(1)" } : undefined}
      onError={() => setHasError(true)}
    />
  );
}
