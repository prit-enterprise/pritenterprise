
import { Home, Phone, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[rgba(255,255,255,0.8)] backdrop-blur-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between h-16 items-center px-8">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-lg font-semibold text-gray-900">Prit Enterprise</span>
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              About
            </Link>
            <Link to="/products" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Products
            </Link>
            <Link to="/contact" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
