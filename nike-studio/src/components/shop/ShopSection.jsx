import FilterPanel from "./FilterPanel.jsx";
import ProductCard  from "./ProductCard.jsx";

/**
 * Full catalog section: filter controls above, product grid below.
 */
export default function ShopSection({
  products,
  search, collection, size, sort,
  allSizes, allCollections,
  onSearch, onCollection, onSize, onSort, onReset,
  onQuickAdd, onPreview,
}) {
  const activeFilters = [
    collection !== "All"   ? collection         : null,
    size       !== "Any"   ? `Size ${size}`     : null,
    search.trim()          ? `"${search.trim()}"` : null,
  ].filter(Boolean);

  return (
    <section className="section section-gap" id="shop">
      {/* ── Filters ── */}
      <FilterPanel
        search={search}
        collection={collection}
        size={size}
        sort={sort}
        allSizes={allSizes}
        collections={allCollections}
        onSearch={onSearch}
        onCollection={onCollection}
        onSize={onSize}
        onSort={onSort}
        onReset={onReset}
      />

      {/* ── Catalog meta ── */}
      <div className="catalog-meta">
        <div>
          <strong>{products.length} styles available</strong>
          <div className="active-filters">
            {activeFilters.length > 0 ? (
              activeFilters.map((f, i) => (
                <span key={i} className="notice-chip">
                  {f}
                </span>
              ))
            ) : (
              <span className="notice-chip">Showing the full curated edit</span>
            )}
          </div>
        </div>
        <span className="notice-chip">Smooth browsing on desktop and mobile</span>
      </div>

      {/* ── Product grid ── */}
      <div className="product-grid">
        {products.length > 0 ? (
          products.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              idx={i}
              onQuickAdd={onQuickAdd}
              onPreview={onPreview}
            />
          ))
        ) : (
          <div className="empty-state">
            <h3>No matches found</h3>
            <p>Try a broader search, change the size, or reset the filters.</p>
          </div>
        )}
      </div>
    </section>
  );
}
