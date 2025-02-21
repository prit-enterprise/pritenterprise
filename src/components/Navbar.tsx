
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white sticky top-0 z-50 neo-border">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-lg font-bold hover:-translate-y-0.5 transition-transform">Prit Enterprise</span>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 neo-border hover:-translate-y-0.5 transition-transform"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { path: "/", label: "Home" },
              { path: "/about", label: "About" },
              { path: "/products", label: "Products" },
              { path: "/contact", label: "Contact" }
            ].map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`px-4 py-2 hover:-translate-y-0.5 transition-transform ${
                  isActive(path)
                    ? "bg-black text-white neo-shadow"
                    : "text-black hover:neo-border"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 bg-white">
            {[
              { path: "/", label: "Home" },
              { path: "/about", label: "About" },
              { path: "/products", label: "Products" },
              { path: "/contact", label: "Contact" }
            ].map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`block px-4 py-2 hover:-translate-y-0.5 transition-transform ${
                  isActive(path)
                    ? "bg-black text-white neo-shadow"
                    : "text-black hover:neo-border"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
