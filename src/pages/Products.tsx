
import { Card } from "@/components/ui/card";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Cola Classic",
      category: "Carbonated Beverages",
      description: "Refreshing cola drink with the perfect blend of flavors",
      image: "/product-images/1.jpg"
    },
    {
      id: 2,
      name: "Orange Burst",
      category: "Carbonated Beverages",
      description: "Zesty orange carbonated refreshment",
      image: "/product-images/2.jpg"
    },
    // ... Add all 36 products with their respective images
    {
      id: 36,
      name: "Amla Sharbat",
      category: "Traditional Drinks",
      description: "Healthy and refreshing traditional Indian gooseberry drink",
      image: "/product-images/36.jpg"
    }
  ];

  const categories = ["All", "Carbonated Beverages", "Fruit Juices", "Health Drinks", "Traditional Drinks"];

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <div className="bg-[#f5f5f7] py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-semibold text-gray-900 mb-6">Our Products</h1>
          <p className="text-xl text-gray-500">
            Explore our extensive range of Davat Beverages and other premium drinks
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="flex justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                <p className="text-gray-600">{product.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
