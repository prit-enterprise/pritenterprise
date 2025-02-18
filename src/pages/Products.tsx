import { Card } from "@/components/ui/card";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Oxx-Classic",
      category: "Energy Drinks",
      description: "",
      image: "/public/products/1-Web-Oxx-Classic.png"
    },
    {
      id: 2,
      name: "Oxx-Prime",
      category: "Energy Drinks",
      description: "",
      image: "/public/products/1-Web-Oxx-Prime.png"
    },
    {
      id: 3,
      name: "Tetra-Copy",
      category: "Fruit Juices",
      description: "",
      image: "/public/products/125_ML-Tetra...opy-V2-1.png"
    },
    {
      id: 4,
      name: "Tetra-Orange",
      category: "Fruit Juices",
      description: "",
      image: "/public/products/125_ML-Tetra...range-2-1.png"
    },
    {
      id: 5,
      name: "Soda",
      category: "Carbonated Beverages",
      description: "",
      image: "/public/products/698.png"
    },
    {
      id: 6,
      name: "22423-LOVE-..E-160288",
      category: "Unknown",
      description: "",
      image: "/public/products/22423-LOVE-..E-160288.png"
    },
    {
      id: 7,
      name: "22423-MALT...S-CAP288",
      category: "Unknown",
      description: "",
      image: "/public/products/22423-MALT...S-CAP288.png"
    },
    {
      id: 8,
      name: "BERRY 288",
      category: "Unknown",
      description: "",
      image: "/public/products/BERRY 288.png"
    },
    {
      id: 9,
      name: "Changer-CAN...w-01-288",
      category: "Unknown",
      description: "",
      image: "/public/products/Changer-CAN...w-01-288.png"
    },
    {
      id: 10,
      name: "Cranberry-Or...ra_Packet",
      category: "Unknown",
      description: "",
      image: "/public/products/Cranberry-Or...ra_Packet.png"
    },
    {
      id: 11,
      name: "(BB0 GREEN-G-160-CAP288",
      category: "Unknown",
      description: "",
      image: "/public/products/(BB0 GREEN-G-160-CAP288.png"
    },
    {
      id: 12,
      name: "Guava_160ml288",
      category: "Unknown",
      description: "",
      image: "/public/products/Guava_160ml288.png"
    },
    {
      id: 13,
      name: "Guava-Tetra_Packet",
      category: "Unknown",
      description: "",
      image: "/public/products/Guava-Tetra_Packet.pong"
    },
    {
      id: 14,
      name: "HERBY-800PXL",
      category: "Unknown",
      description: "",
      image: "/public/products/HERBY-800PXL.png"
    },
    {
      id: 15,
      name: "image-22",
      category: "Unknown",
      description: "",
      image: "/public/products/image-22.png"
    },
    {
      id: 16,
      name: "JEERA-160-CAP288",
      category: "Unknown",
      description: "",
      image: "/public/products/JEERA-160-CAP288.png"
    },
    {
      id: 17,
      name: "Lemon-Apple-Tetra_Packet",
      category: "Unknown",
      description: "",
      image: "/public/products/Lemon-Apple-Tetra_Packet.png"
    },
    {
      id: 18,
      name: "Lemon-Orang...ra_Packet",
      category: "Unknown",
      description: "",
      image: "/public/products/Lemon-Orang...ra_Packet.png"
    },
    {
      id: 19,
      name: "Limon-Pudina..._Packet-1",
      category: "Unknown",
      description: "",
      image: "/public/products/Limon-Pudina..._Packet-1.png"
    },
    {
      id: 20,
      name: "Limpoo_160ml288",
      category: "Unknown",
      description: "",
      image: "/public/products/Limpoo_160ml288.png"
    },
    {
      id: 21,
      name: "LIMUN-160-CAP288",
      category: "Unknown",
      description: "",
      image: "/public/products/LIMUN-160-CAP288.png"
    },
    {
      id: 22,
      name: "Lychee_160ml288",
      category: "Unknown",
      description: "",
      image: "/public/products/Lychee_160ml288.png"
    },
    {
      id: 23,
      name: "Lychee-Tetra_Packet",
      category: "Unknown",
      description: "",
      image: "/public/products/Lychee-Tetra_Packet.png"
    },
    {
      id: 24,
      name: "MALTY-CAN-...latten288",
      category: "Unknown",
      description: "",
      image: "/public/products/MALTY-CAN-...latten288.png"
    },
    {
      id: 25,
      name: "Mozzy_160ml288",
      category: "Unknown",
      description: "",
      image: "/public/products/Mozzy_160ml288.png"
    },
    {
      id: 26,
      name: "DO NEW_Davat_...23_WEB_",
      category: "Unknown",
      description: "",
      image: "/public/products/DO NEW_Davat_...23_WEB_.png"
    },
    {
      id: 27,
      name: "ORANGE-160-CAP288",
      category: "Unknown",
      description: "",
      image: "/public/products/ORANGE-160-CAP288.png"
    },
    {
      id: 28,
      name: "PEPYO-NEW-...TLE-F288",
      category: "Unknown",
      description: "",
      image: "/public/products/PEPYO-NEW-...TLE-F288.png"
    },
    {
      id: 29,
      name: "Pineapple-Tetra_Packet",
      category: "Unknown",
      description: "",
      image: "/public/products/Pineapple-Tetra_Packet.png"
    },
    {
      id: 30,
      name: "powermode-c...mopolitan",
      category: "Unknown",
      description: "",
      image: "/public/products/powermode-c...mopolitan.png"
    },
    {
      id: 31,
      name: "powermode-g...er-lemon",
      category: "Unknown",
      description: "",
      image: "/public/products/powermode-g...er-lemon.png"
    },
    {
      id: 32,
      name: "powermode-jamun",
      category: "Unknown",
      description: "",
      image: "/public/products/powermode-jamun.png"
    },
    {
      id: 33,
      name: "powermode-orange",
      category: "Unknown",
      description: "",
      image: "/public/products/powermode-orange.png"
    },
    {
      id: 34,
      name: "powermode-verry-berry",
      category: "Unknown",
      description: "",
      image: "/public/products/powermode-verry-berry.ong"
    },
    {
      id: 35,
      name: "SODA-750ML2880",
      category: "Unknown",
      description: "",
      image: "/public/products/SODA-750ML2880.pong"
    },
    {
      id: 36,
      name: "water-bottle-880px",
      category: "Unknown",
      description: "",
      image: "/public/products/water-bottle-880px.png"
    }
  ];

  const categories = ["All", "Carbonated Beverages", "Fruit Juices", "Health Drinks", "Traditional Drinks"];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Navbar Space */}
      <div className="relative w-full h-[calc(100vh-4rem)] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/public/banner.jpg"
            alt="Products Banner"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/5" /> {/* Subtle overlay */}
        <div className="relative z-10 h-full flex items-center">
          <div className="px-4 md:px-8 mt-16">
            <h1 className="text-6xl font-bold text-black mb-6 font-dancing-script">Our Products</h1>
            
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-contain p-4"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                <p className="mt-2 text-gray-500">{product.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
