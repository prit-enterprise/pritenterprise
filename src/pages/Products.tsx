
import { useState } from "react";
import ProductsHero from "@/components/products/ProductsHero";
import CategoryFilter from "@/components/products/CategoryFilter";
import ProductGrid from "@/components/products/ProductGrid";
import { categories, products } from "@/data/products";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white pt-24">
      <ProductsHero />
      <CategoryFilter 
        categories={categories}
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
      />
      <ProductGrid products={filteredProducts} />
    </div>
  );
};

export default Products;
