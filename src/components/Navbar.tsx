
import { Home, Phone, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-[#9b87f5]">Prit Enterprise</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-1 text-gray-700 hover:text-[#7E69AB]">
              <Home size={20} />
              <span>Home</span>
            </Link>
            <Link to="/products" className="flex items-center space-x-1 text-gray-700 hover:text-[#7E69AB]">
              <ShoppingCart size={20} />
              <span>Products</span>
            </Link>
            <Link to="/contact" className="flex items-center space-x-1 text-gray-700 hover:text-[#7E69AB]">
              <Phone size={20} />
              <span>Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
