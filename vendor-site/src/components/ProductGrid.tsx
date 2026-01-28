"use client";

import { useState, useMemo } from "react";
import ProductCard from "./ProductCard";

type Product = {
  id: number;
  name: string;
  price: number;
  createdAt: string;
  image: string;
};

type SortOption = "recent" | "price-low" | "price-high";

const ITEMS_PER_PAGE = 3;

export default function ProductGrid({
  products,
}: {
  products: Product[];
}) {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<SortOption>("recent");
  const [currentPage, setCurrentPage] = useState(1);

  const processedProducts = useMemo(() => {
    let filtered = products.filter(p =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );

    switch (sort) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "recent":
      default:
        filtered.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() -
            new Date(a.createdAt).getTime()
        );
        break;
    }

    return filtered;
  }, [products, search, sort]);

  // Reset to page 1 when search or sort changes
  const totalPages = Math.ceil(
    processedProducts.length / ITEMS_PER_PAGE
  );

  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return processedProducts.slice(start, start + ITEMS_PER_PAGE);
  }, [processedProducts, currentPage]);

  return (
    <div>
      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={e => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          className="border rounded px-4 py-2 w-full sm:w-1/2 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />

        <select
          value={sort}
          onChange={e => {
            setSort(e.target.value as SortOption);
            setCurrentPage(1);
          }}
          className="border rounded px-4 py-2 w-full sm:w-1/3 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        >
          <option value="recent">Most Recent</option>
          <option value="price-low">Price: Low → High</option>
          <option value="price-high">Price: High → Low</option>
        </select>
      </div>

      {/* Empty State */}
      {processedProducts.length === 0 && (
        <p className="text-center text-gray-500">
          No products found.
        </p>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {paginatedProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            disabled={currentPage === 1}
            onClick={() =>
              setCurrentPage(p => Math.max(p - 1, 1))
            }
            className="px-4 py-2 border rounded disabled:opacity-50"
          >
            Prev
          </button>

          <span className="font-medium">
            Page {currentPage} of {totalPages}
          </span>

          <button
            disabled={currentPage === totalPages}
            onClick={() =>
              setCurrentPage(p =>
                Math.min(p + 1, totalPages)
              )
            }
            className="px-4 py-2 border rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
