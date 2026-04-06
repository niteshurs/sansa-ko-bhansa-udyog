import { motion } from "motion/react";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { ACHAR_PRODUCTS, MOMO_PRODUCTS, PRODUCTS } from "../data/products";
import { PAGE_DESCRIPTIONS, PAGE_TITLES } from "../seo-config";

type Filter = "all" | "achar" | "momo";

export default function Products() {
  const [filter, setFilter] = useState<Filter>("all");

  // SEO: Update document title on page load
  useEffect(() => {
    document.title = PAGE_TITLES.products;
    const metaDesc = document.querySelector("meta[name='description']");
    if (metaDesc) metaDesc.setAttribute("content", PAGE_DESCRIPTIONS.products);
  }, []);

  const filteredProducts =
    filter === "all"
      ? PRODUCTS
      : filter === "achar"
        ? ACHAR_PRODUCTS
        : MOMO_PRODUCTS;

  return (
    <div>
      {/* Page Header */}
      <section
        className="bg-brand-dark text-white py-16 lg:py-20 relative overflow-hidden"
        aria-label="Products header"
      >
        <div className="absolute inset-0 opacity-10">
          <img
            src="/assets/generated/hero-banner.dim_1400x700.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-brand-primary text-white text-xs font-bold px-3 py-1.5 rounded-full mb-4 tracking-wider uppercase">
              Sansa Ko Bhansa Udyog
            </span>
            <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">
              Our <span className="text-brand-golden">Products</span>
            </h1>
            <p className="text-gray-300 max-w-xl mx-auto">
              Authentic Nepali achar pickles and handmade frozen momos — crafted
              with love and traditional recipes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-white border-b border-gray-100 sticky top-[calc(4rem+2rem)] z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="flex gap-1 py-3"
            role="tablist"
            aria-label="Product categories"
          >
            {(
              [
                { value: "all", label: "All Products" },
                { value: "achar", label: "🫙 Achar Pickles" },
                { value: "momo", label: "🥟 Frozen Momos" },
              ] as { value: Filter; label: string }[]
            ).map((tab) => (
              <button
                type="button"
                key={tab.value}
                role="tab"
                aria-selected={filter === tab.value}
                data-ocid="products.tab"
                onClick={() => setFilter(tab.value)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  filter === tab.value
                    ? "bg-brand-primary text-white"
                    : "text-gray-600 hover:bg-orange-50 hover:text-brand-primary"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Achar section */}
          {(filter === "all" || filter === "achar") && (
            <div className="mb-12">
              {filter === "all" && (
                <h2 className="text-2xl font-extrabold text-gray-900 mb-6 flex items-center gap-2">
                  🫙{" "}
                  <span>
                    Achar <span className="text-brand-primary">Pickles</span>
                  </span>
                </h2>
              )}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
                {(filter === "all" ? ACHAR_PRODUCTS : filteredProducts).map(
                  (product, i) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                    >
                      <ProductCard product={product} index={i + 1} />
                    </motion.div>
                  ),
                )}
              </div>
            </div>
          )}

          {/* Momo section */}
          {(filter === "all" || filter === "momo") && (
            <div>
              {filter === "all" && (
                <h2 className="text-2xl font-extrabold text-gray-900 mb-6 flex items-center gap-2">
                  🥟{" "}
                  <span>
                    Frozen <span className="text-brand-primary">Momos</span>
                  </span>
                </h2>
              )}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
                {(filter === "all" ? MOMO_PRODUCTS : filteredProducts).map(
                  (product, i) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                    >
                      <ProductCard product={product} index={i + 1} />
                    </motion.div>
                  ),
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
