import { useState, useMemo } from "react";
import { STORE } from "../data/store.js";

/**
 * Manages search, collection, size, and sort filter state,
 * and returns the filtered + sorted product list.
 */
export function useFilters() {
  const [search,     setSearch]     = useState("");
  const [collection, setCollection] = useState("All");
  const [size,       setSize]       = useState("Any");
  const [sort,       setSort]       = useState("featured");

  /* Derived: unique collections & sizes available across all products */
  const allCollections = useMemo(
    () => Array.from(new Set(STORE.collections.map((c) => c.name))),
    []
  );
  const allSizes = useMemo(
    () =>
      Array.from(new Set(STORE.products.flatMap((p) => p.sizes))).sort(
        (a, b) => a - b
      ),
    []
  );

  /* Derived: filtered + sorted product list */
  const filteredProducts = useMemo(() => {
    const q = search.trim().toLowerCase();
    return STORE.products
      .filter((p) => collection === "All" || p.collection === collection)
      .filter((p) => size === "Any" || p.sizes.includes(Number(size)))
      .filter(
        (p) =>
          !q ||
          [p.name, p.collection, p.category, p.tagline]
            .join(" ")
            .toLowerCase()
            .includes(q)
      )
      .sort((a, b) => {
        switch (sort) {
          case "price-low":  return a.price - b.price;
          case "price-high": return b.price - a.price;
          case "newest":     return b.releaseIndex - a.releaseIndex;
          case "rating":     return b.rating - a.rating;
          default:           return a.featuredRank - b.featuredRank;
        }
      });
  }, [search, collection, size, sort]);

  const resetFilters = () => {
    setSearch("");
    setCollection("All");
    setSize("Any");
    setSort("featured");
  };

  return {
    search,     setSearch,
    collection, setCollection,
    size,       setSize,
    sort,       setSort,
    allCollections,
    allSizes,
    filteredProducts,
    resetFilters,
  };
}
