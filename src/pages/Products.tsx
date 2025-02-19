
import { Card } from "@/components/ui/card";
import { useState } from "react";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Energy Drinks",
    "Fruit Juices",
    "Carbonated Beverages"
  ];

  // Updated products array with the correct image paths
  const products = [
    {
      id: 1,
      name: "Oxx-Classic",
      category: "Energy Drinks",
      description: "",
      image: "/products/1-Web-Oxx-Classic.png"
    },
    {
      id: 2,
      name: "Oxx-Prime",
      category: "Energy Drinks",
      description: "",
      image: "/products/1-Web-Oxx-Prime.png"
    },
    {
      id: 3,
      name: "Tetra-Copy",
      category: "Fruit Juices",
      description: "",
      image: "/products/125_ML-Tetra...opy-V2-1.png"
    },
    {
      id: 4,
      name: "Tetra-Orange",
      category: "Fruit Juices",
      description: "",
      image: "/products/125_ML-Tetra...range-2-1.png"
    },
    {
      id: 5,
      name: "Soda",
      category: "Carbonated Beverages",
      description: "",
      image: "/products/698.png"
    },
    {
      id: 6,
      name: "22423-LOVE-..E-160288",
      category: "Unknown",
      description: "",
      image: "/products/22423-LOVE-..E-160288.png"
    },
    {
      id: 7,
      name: "22423-MALT...S-CAP288",
      category: "Unknown",
      description: "",
      image: "/products/22423-MALT...S-CAP288.png"
    },
    {
      id: 8,
      name: "BERRY 288",
      category: "Unknown",
      description: "",
      image: "/products/BERRY 288.png"
    },
    {
      id: 9,
      name: "Changer-CAN...w-01-288",
      category: "Unknown",
      description: "",
      image: "/products/Changer-CAN...w-01-288.png"
    },
    {
      id: 10,
      name: "Cranberry-Or...ra_Packet",
      category: "Unknown",
      description: "",
      image: "/products/Cranberry-Or...ra_Packet.png"
    },
    {
      id: 11,
      name: "(BB0 GREEN-G-160-CAP288",
      category: "Unknown",
      description: "",
      image: "/products/(BB0 GREEN-G-160-CAP288.png"
    },
    {
      id: 12,
      name: "Guava_160ml288",
      category: "Unknown",
      description: "",
      image: "/products/Guava_160ml288.png"
    },
    {
      id: 13,
      name: "Guava-Tetra_Packet",
      category: "Unknown",
      description: "",
      image: "/products/Guava-Tetra_Packet.pong"
    },
    {
      id: 14,
      name: "HERBY-800PXL",
      category: "Unknown",
      description: "",
      image: "/products/HERBY-800PXL.png"
    },
    {
      id: 15,
      name: "image-22",
      category: "Unknown",
      description: "",
      image: "/products/image-22.png"
    },
    {
      id: 16,
      name: "JEERA-160-CAP288",
      category: "Unknown",
      description: "",
      image: "/products/JEERA-160-CAP288.png"
    },
    {
      id: 17,
      name: "Lemon-Apple-Tetra_Packet",
      category: "Unknown",
      description: "",
      image: "/products/Lemon-Apple-Tetra_Packet.png"
    },
    {
      id: 18,
      name: "Lemon-Orang...ra_Packet",
      category: "Unknown",
      description: "",
      image: "/products/Lemon-Orang...ra_Packet.png"
    },
    {
      id: 19,
      name: "Limon-Pudina..._Packet-1",
      category: "Unknown",
      description: "",
      image: "/products/Limon-Pudina..._Packet-1.png"
    },
    {
      id: 20,
      name: "Limpoo_160ml288",
      category: "Unknown",
      description: "",
      image: "/products/Limpoo_160ml288.png"
    },
    {
      id: 21,
      name: "LIMUN-160-CAP288",
      category: "Unknown",
      description: "",
      image: "/products/LIMUN-160-CAP288.png"
    },
    {
      id: 22,
      name: "Lychee_160ml288",
      category: "Unknown",
      description: "",
      image: "/products/Lychee_160ml288.png"
    },
    {
      id: 23,
      name: "Lychee-Tetra_Packet",
      category: "Unknown",
      description: "",
      image: "/products/Lychee-Tetra_Packet.png"
    },
    {
      id: 24,
      name: "MALTY-CAN-...latten288",
      category: "Unknown",
      description: "",
      image: "/products/MALTY-CAN-...latten288.png"
    },
    {
      id: 25,
      name: "Mozzy_160ml288",
      category: "Unknown",
      description: "",
      image: "/products/Mozzy_160ml288.png"
    },
    {
      id: 27,
      name: "ORANGE-160-CAP288",
      category: "Unknown",
      description: "",
      image: "/products/ORANGE-160-CAP288.png"
    },
    {
      id: 28,
      name: "PEPYO-NEW-...TLE-F288",
      category: "Unknown",
      description: "",
      image: "/products/PEPYO-NEW-...TLE-F288.png"
    },
    {
      id: 29,
      name: "Pineapple-Tetra_Packet",
      category: "Unknown",
      description: "",
      image: "/products/Pineapple-Tetra_Packet.png"
    },
    {
      id: 30,
      name: "powermode-c...mopolitan",
      category: "Unknown",
      description: "",
      image: "/products/powermode-c...mopolitan.png"
    },
    {
      id: 31,
      name: "powermode-g...er-lemon",
      category: "Unknown",
      description: "",
      image: "/products/powermode-g...er-lemon.png"
    },
    {
      id: 32,
      name: "powermode-jamun",
      category: "Unknown",
      description: "",
      image: "/products/powermode-jamun.png"
    },
    {
      id: 33,
      name: "powermode-orange",
      category: "Unknown",
      description: "",
      image: "/products/powermode-orange.png"
    },
    {
      id: 34,
      name: "powermode-verry-berry",
      category: "Unknown",
      description: "",
      image: "/products/powermode-verry-berry.ong"
    },
    {
      id: 35,
      name: "SODA-750ML2880",
      category: "Unknown",
      description: "",
      image: "/products/SODA-750ML2880.pong"
    },
    {
      id: 36,
      name: "water-bottle-880px",
      category: "Unknown",
      description: "",
      image: "/products/water-bottle-880px.png"
    }
  ];

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <div className="bg-[#f5f5f7] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-6">Our Products</h1>
          <p className="text-lg md:text-xl text-gray-500">
            Explore our complete range of premium beverages
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                selectedCategory === category
                  ? "bg-gray-900 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProducts.map((product) => (
            <Card 
              key={product.id} 
              className="overflow-hidden group hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-w-1 aspect-h-1 bg-white p-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-sm text-gray-500">{product.category}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
