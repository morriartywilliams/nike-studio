/**
 * Catalog control panel: text search, size select, sort select,
 * and collection chip tabs.
 *
 * @param {{
 *   search:        string,
 *   collection:    string,
 *   size:          string,
 *   sort:          string,
 *   allSizes:      number[],
 *   collections:   string[],
 *   onSearch:      (v: string) => void,
 *   onCollection:  (v: string) => void,
 *   onSize:        (v: string) => void,
 *   onSort:        (v: string) => void,
 *   onReset:       () => void,
 * }} props
 */
export default function FilterPanel({
  search, collection, size, sort,
  allSizes, collections,
  onSearch, onCollection, onSize, onSort, onReset,
}) {
  const collectionOpts = ["All", ...collections, "Lifestyle"];

  return (
    <div className="filter-panel">
      <div className="filter-top">
        <div>
          <p className="mini-label">Store controls</p>
          <h3>Find your next pair without the clutter.</h3>
          <p>
            Search by name, narrow by collection, lock in a size, and sort the
            catalog your way.
          </p>
        </div>
        <button className="btn btn-ghost" onClick={onReset}>
          Reset filters
        </button>
      </div>

      {/* ── Controls row ── */}
      <div className="control-grid">
        <div className="control-field">
          <label htmlFor="searchInput">Search</label>
          <input
            id="searchInput"
            className="search-input"
            type="search"
            placeholder="Search Air Force, Jordan, training…"
            value={search}
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>

        <div className="control-field">
          <label htmlFor="sizeSelect">Size</label>
          <select
            id="sizeSelect"
            className="select-input"
            value={size}
            onChange={(e) => onSize(e.target.value)}
          >
            <option value="Any">Any size</option>
            {allSizes.map((s) => (
              <option key={s} value={s}>
                US {s}
              </option>
            ))}
          </select>
        </div>

        <div className="control-field">
          <label htmlFor="sortSelect">Sort</label>
          <select
            id="sortSelect"
            className="select-input"
            value={sort}
            onChange={(e) => onSort(e.target.value)}
          >
            <option value="featured">Featured first</option>
            <option value="newest">Newest drops</option>
            <option value="rating">Highest rated</option>
            <option value="price-low">Price: low to high</option>
            <option value="price-high">Price: high to low</option>
          </select>
        </div>
      </div>

      {/* ── Collection chip tabs ── */}
      <div className="chip-row" role="tablist" aria-label="Collection filter">
        {collectionOpts.map((opt) => (
          <button
            key={opt}
            className={`chip-btn${collection === opt ? " active" : ""}`}
            role="tab"
            aria-selected={collection === opt}
            onClick={() => onCollection(opt)}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
