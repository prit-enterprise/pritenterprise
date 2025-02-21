
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Phone, Star, Shield, Truck } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-[#FFDE59] py-32 neo-border">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <span className="inline-block bg-black text-white px-4 py-2 mb-8 uppercase tracking-wider text-sm neo-shadow transform hover:-translate-y-0.5 transition-transform">
            Exclusive Distributor of Davat Beverages
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-8 leading-tight">
            Timeless Flavors,<br />Trusted Distribution
          </h1>
          <p className="text-lg md:text-xl text-black/80 mb-12 max-w-2xl mx-auto">
            Since 1999, Prit Enterprise has been crafting excellence in the beverages industry. Now proudly serving as the exclusive distributor for Davat Beverages.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <Link to="/products">
              <button className="w-full md:w-auto px-8 py-4 bg-black text-white neo-shadow hover:-translate-y-0.5 transition-transform flex items-center justify-center gap-2 text-lg">
                <ShoppingCart className="w-5 h-5" />
                Explore Products
              </button>
            </Link>
            <Link to="/contact">
              <button className="w-full md:w-auto px-8 py-4 bg-white neo-border neo-shadow hover:-translate-y-0.5 transition-transform flex items-center justify-center gap-2 text-lg">
                <Phone className="w-5 h-5" />
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Partnership Highlight */}
      <div className="py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our distribution of Davat Beverages</h2>
            <p className="text-xl text-black/70 max-w-2xl mx-auto">
              Uniting Prit Enterprise's robust distribution network with Davat's exceptional product quality and innovation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 p-8 bg-[#61E8E1] neo-border neo-shadow">
              <h3 className="text-2xl font-bold">World-Class Beverages</h3>
              <p className="text-black/80">
                Davat Beverages is renowned for blending traditional and contemporary flavors, with modern production facilities in Rajkot, Gujarat. Together, we're bringing their exceptional range of products to customers across Dahod.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 bg-white neo-border">
                  <Star className="text-black shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold mb-2">Premium Quality</h4>
                    <p className="text-black/70">State-of-the-art production facilities ensuring the highest standards</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-white neo-border">
                  <Shield className="text-black shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold mb-2">Innovation</h4>
                    <p className="text-black/70">Continuous research and development for better products</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-white neo-border">
                  <Truck className="text-black shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold mb-2">Wide Distribution</h4>
                    <p className="text-black/70">Extensive network covering multiple states</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { 
                  src: "/products/NEW_Davat_FINAL_Logo_2023_WEB_.png", 
                  style: { objectFit: "contain", backgroundColor: "white", padding: "2rem" }
                },
                { 
                  src: "/factory.jpg", 
                  style: { objectFit: "cover" }
                },
                { 
                  src: "/r&d.jpg", 
                  style: { objectFit: "cover" }
                },
                { 
                  src: "/jeera-home.jpg", 
                  style: { objectFit: "cover" }
                }
              ].map(({ src, style }, index) => (
                <div key={src} className="neo-border neo-shadow hover:-translate-y-1 transition-transform aspect-square overflow-hidden">
                  <img
                    src={src}
                    alt={`Davat Beverages ${index + 1}`}
                    className="w-full h-full"
                    
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="py-32 bg-[#FF90B3] neo-border">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Carbonated Beverages",
                desc: "Refreshing fizzy drinks in various flavors",
                img: "carbonated.png"
              },
              {
                title: "Fruit Beverages",
                desc: "Natural and ready-to-serve fruit drinks",
                img: "juices.png"
              },
              {
                title: "Canned Beverages",
                desc: "Premium canned drinks for on-the-go",
                img: "canned.png"
              }
            ].map((product) => (
              <div key={product.title} className="bg-white neo-border neo-shadow hover:-translate-y-1 transition-transform">
                <div className="aspect-square p-8 border-b-2 border-black bg-[#F5F5F5]">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{product.title}</h3>
                  <p className="text-black/70">{product.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-32">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">Why Choose Prit Enterprise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "25+ Years Experience",
                desc: "Established in 1999, we bring expertise and reliability to beverage distribution"
              },
              {
                title: "Exclusive Partnership",
                desc: "Official distributor of Davat Beverages' premium product range"
              },
              {
                title: "Quality Assured",
                desc: "Maintaining the highest standards in product quality and storage"
              }
            ].map((item) => (
              <div key={item.title} className="p-8 text-center bg-[#61E8E1] neo-border neo-shadow hover:-translate-y-1 transition-transform">
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-black/80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
