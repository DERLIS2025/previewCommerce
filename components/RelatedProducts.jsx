'use client'

import { productDummyData } from "@/assets/assets";
import ProductCard from "@/components/ProductCard";

const RelatedProducts = ({ product }) => {
  if (!product) return null;

  const relatedProducts = productDummyData.filter(
    (item) =>
      item.id !== product.id &&
      product.relatedProductIds?.includes(item.id)
  );

  if (!relatedProducts.length) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-10 sm:pb-14">
      <div className="mb-6 sm:mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
          Venta cruzada
        </p>
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-800 mt-2">
          Productos complementarios
        </h2>
        <p className="text-slate-500 mt-2 max-w-2xl">
          Complementá tu elección con productos y servicios que acompañan mejor este tipo de trabajo.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {relatedProducts.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;
