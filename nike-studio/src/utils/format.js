const fmt = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
});

/**
 * Format a numeric value as a USD price string.
 * @param {number} value
 * @returns {string}  e.g. "$145"
 */
export const formatPrice = (value) => fmt.format(value);
