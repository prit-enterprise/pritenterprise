
import { Card } from "@/components/ui/card";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Soft Drinks",
      category: "Beverages",
      description: "Refreshing carbonated drinks in various flavors",
      image: "/product-images/1.jpg"
    },
    // ... Add all 36 products with their respective images
  ];

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <div className="bg-[#f5f5f7] py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-semibold text-gray-900 mb-6">Our Products</h1>
          <p className="text-xl text-gray-500">
            Discover our extensive range of beverages, from refreshing soft drinks to healthy protein beverages
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 py-20">
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
