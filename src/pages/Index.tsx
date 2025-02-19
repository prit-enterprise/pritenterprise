
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Phone, Star, Shield, Truck } from "lucide-react";

const Index = () => {
  return <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-orange-100 via-red-50 to-amber-50 py-32">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <span className="inline-block text-orange-600 font-medium mb-4">Exclusive Distributor of Davat Beverages</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6">
            Timeless Flavors, Trusted Distribution
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto">Since 1999, Prit Enterprise has been in beverages industry. Now proudly serving as the exclusive distributor for Davat Beverages.</p>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
            <Link to="/products">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 w-full md:w-auto">
                <ShoppingCart className="mr-2" />
                Explore Products
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="w-full md:w-auto border-orange-200 hover:bg-orange-50">
                <Phone className="mr-2" />
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Partnership Highlight */}
      <div className="py-24 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-orange-900">Our Partnership with Davat Beverages</h2>
            <p className="text-lg md:text-xl text-orange-700 max-w-3xl mx-auto">
              Uniting Prit Enterprise's robust distribution network with Davat's exceptional product quality and innovation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-orange-800">World-Class Beverages</h3>
              <p className="text-orange-700">Davat Beverages is renowned for blending traditional and contemporary flavors, with modern production facilities in Rajkot, Gujarat. Together, we're bringing their exceptional range of products to customers across Dahod.</p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Star className="text-orange-500 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium text-orange-800">Premium Quality</h4>
                    <p className="text-orange-600">State-of-the-art production facilities ensuring the highest standards</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Shield className="text-orange-500 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium text-orange-800">Innovation</h4>
                    <p className="text-orange-600">Continuous research and development for better products</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Truck className="text-orange-500 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium text-orange-800">Wide Distribution</h4>
                    <p className="text-orange-600">Extensive network covering multiple states</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="/products/NEW_Davat_FINAL_Logo_2023_WEB_.png" alt="Davat Beverages Product" className="rounded-2xl shadow-lg hover:scale-105 transition-all duration-300" />
              <img src="/factory.jpg" alt="Davat Beverages Facility" className="rounded-2xl shadow-lg hover:scale-105 transition-all duration-300" />
              <img src="/r&d.jpg" alt="Davat Beverages Range" className="rounded-2xl shadow-lg hover:scale-105 transition-all duration-300" />
              <img src="/jeera-home.jpg" alt="Davat Quality Control" className="rounded-2xl shadow-lg hover:scale-105 transition-all duration-300" />
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="py-24 bg-gradient-to-t from-orange-100 to-amber-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16 text-orange-900">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
              <div className="aspect-w-4 aspect-h-3">
                <img src="/product-images/carbonated.jpg" alt="Carbonated Beverages" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-orange-900">Carbonated Beverages</h3>
                <p className="text-orange-600">Refreshing fizzy drinks in various flavors</p>
              </div>
            </Card>
            <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
              <div className="aspect-w-4 aspect-h-3">
                <img src="/product-images/fruit-drinks.jpg" alt="Fruit Beverages" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-orange-900">Fruit Beverages</h3>
                <p className="text-orange-600">Natural and ready-to-serve fruit drinks</p>
              </div>
            </Card>
            <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
              <div className="aspect-w-4 aspect-h-3">
                <img src="/product-images/canned.jpg" alt="Canned Beverages" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-orange-900">Canned Beverages</h3>
                <p className="text-orange-600">Premium canned drinks for on-the-go</p>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-24 bg-gradient-to-b from-orange-50 to-amber-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16 text-orange-900">Why Choose Prit Enterprise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-orange-900">25+ Years Experience</h3>
              <p className="text-orange-700">Established in 1999, we bring expertise and reliability to beverage distribution</p>
            </Card>
            <Card className="p-8 text-center bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-orange-900">Exclusive Partnership</h3>
              <p className="text-orange-700">Official distributor of Davat Beverages' premium product range</p>
            </Card>
            <Card className="p-8 text-center bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-orange-900">Quality Assured</h3>
              <p className="text-orange-700">Maintaining the highest standards in product quality and storage</p>
            </Card>
          </div>
        </div>
      </div>
    </div>;
};

export default Index;
