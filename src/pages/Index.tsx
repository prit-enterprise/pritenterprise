
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Phone } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-[#f5f5f7] py-32">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-6xl font-semibold text-gray-900 mb-6">
            Refreshing India, 
            <br />One Drink at a Time
          </h1>
          <p className="text-xl text-gray-500 mb-12 max-w-3xl mx-auto">
            Since 2009, Prit Enterprise has been delivering premium beverages across Gujarat. We're your trusted partner in refreshment and distribution.
          </p>
          <div className="flex justify-center space-x-6">
            <Link to="/products">
              <Button size="lg" className="bg-gray-900 hover:bg-gray-800">
                Explore Products
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline">
                Become a Distributor
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center mb-16">Our Product Range</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <img src="/product-images/soft-drinks.jpg" alt="Soft Drinks" className="rounded-2xl shadow-lg mb-6 w-full hover:scale-105 transition-transform duration-300" />
              <h3 className="text-xl font-semibold mb-2">Soft Drinks</h3>
              <p className="text-gray-500">Refreshing carbonated beverages</p>
            </div>
            <div className="text-center">
              <img src="/product-images/fruit-juices.jpg" alt="Fruit Juices" className="rounded-2xl shadow-lg mb-6 w-full hover:scale-105 transition-transform duration-300" />
              <h3 className="text-xl font-semibold mb-2">Natural Fruit Juices</h3>
              <p className="text-gray-500">100% natural and healthy</p>
            </div>
            <div className="text-center">
              <img src="/product-images/health-drinks.jpg" alt="Health Drinks" className="rounded-2xl shadow-lg mb-6 w-full hover:scale-105 transition-transform duration-300" />
              <h3 className="text-xl font-semibold mb-2">Health Drinks</h3>
              <p className="text-gray-500">Protein-rich nutritional beverages</p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-24 bg-[#f5f5f7]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center mb-16">Why Choose Prit Enterprise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center bg-white/50 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4">14+ Years Experience</h3>
              <p className="text-gray-600">Established in 2009, we bring expertise and reliability</p>
            </Card>
            <Card className="p-8 text-center bg-white/50 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4">Wide Distribution</h3>
              <p className="text-gray-600">Extensive network across Gujarat and beyond</p>
            </Card>
            <Card className="p-8 text-center bg-white/50 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4">Quality Assured</h3>
              <p className="text-gray-600">Premium products with consistent quality</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
