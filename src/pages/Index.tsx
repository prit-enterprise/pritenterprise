
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Phone } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Welcome to Prit Enterprise
          </h1>
          <p className="text-xl text-white mb-8">
            Official distributor of Davat Beverages in Dahod
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/products">
              <Button className="bg-white text-[#7E69AB] hover:bg-gray-100 flex items-center space-x-2">
                <ShoppingCart size={20} />
                <span>View Products</span>
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 flex items-center space-x-2">
                <Phone size={20} />
                <span>Contact Us</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-4">Wide Product Range</h3>
              <p className="text-gray-600">Extensive selection of quality beverages to meet all your needs</p>
            </Card>
            <Card className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-4">Reliable Delivery</h3>
              <p className="text-gray-600">Timely and efficient delivery service across Dahod</p>
            </Card>
            <Card className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-4">Quality Assurance</h3>
              <p className="text-gray-600">Guaranteed quality and freshness of all products</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
