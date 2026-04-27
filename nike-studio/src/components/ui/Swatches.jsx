/**
 * Renders a row of colour swatches.
 * @param {{ colors: string[] }} props
 */
export default function Swatches({ colors }) {
  return (
    <div className="swatch-row">
      {colors.map((color, index) => (
        <span
          key={index}
          className="swatch"
          style={{ background: color }}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}
