
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Phone, Star, Shield, Truck } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-secondary py-32 border-y border-border">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <span className="inline-block text-muted-foreground font-medium mb-8 uppercase tracking-widest text-sm">
            Exclusive Distributor of Davat Beverages
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary mb-8 leading-tight">
            Timeless Flavors,<br />Trusted Distribution
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Since 1999, Prit Enterprise has been crafting excellence in the beverages industry. Now proudly serving as the exclusive distributor for Davat Beverages.
          </p>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
            <Link to="/products">
              <Button size="lg" className="w-full md:w-auto px-8">
                <ShoppingCart className="mr-2" />
                Explore Products
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="w-full md:w-auto px-8">
                <Phone className="mr-2" />
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Partnership Highlight */}
      <div className="py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-serif mb-6 text-primary">Our Partnership with Davat Beverages</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Uniting Prit Enterprise's robust distribution network with Davat's exceptional product quality and innovation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h3 className="text-2xl font-serif text-primary">World-Class Beverages</h3>
              <p className="text-muted-foreground leading-relaxed">
                Davat Beverages is renowned for blending traditional and contemporary flavors, with modern production facilities in Rajkot, Gujarat. Together, we're bringing their exceptional range of products to customers across Dahod.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Star className="text-primary shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-serif text-primary mb-2">Premium Quality</h4>
                    <p className="text-muted-foreground">State-of-the-art production facilities ensuring the highest standards</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Shield className="text-primary shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-serif text-primary mb-2">Innovation</h4>
                    <p className="text-muted-foreground">Continuous research and development for better products</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Truck className="text-primary shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-serif text-primary mb-2">Wide Distribution</h4>
                    <p className="text-muted-foreground">Extensive network covering multiple states</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <img src="/products/NEW_Davat_FINAL_Logo_2023_WEB_.png" alt="Davat Beverages Product" className="w-full aspect-square object-cover hover:opacity-90 transition-opacity" />
              <img src="/factory.jpg" alt="Davat Beverages Facility" className="w-full aspect-square object-cover hover:opacity-90 transition-opacity" />
              <img src="/r&d.jpg" alt="Davat Beverages Range" className="w-full aspect-square object-cover hover:opacity-90 transition-opacity" />
              <img src="/jeera-home.jpg" alt="Davat Quality Control" className="w-full aspect-square object-cover hover:opacity-90 transition-opacity" />
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="py-32 bg-secondary border-y border-border">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-20">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-background border-border hover:border-primary transition-colors duration-300">
              <div className="aspect-square p-12 border-b border-border">
                <img src="/product-images/carbonated.jpg" alt="Carbonated Beverages" className="object-contain w-full h-full hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-serif mb-3 text-primary">Carbonated Beverages</h3>
                <p className="text-muted-foreground leading-relaxed">Refreshing fizzy drinks in various flavors</p>
              </div>
            </Card>
            <Card className="bg-background border-border hover:border-primary transition-colors duration-300">
              <div className="aspect-square p-12 border-b border-border">
                <img src="/product-images/fruit-drinks.jpg" alt="Fruit Beverages" className="object-contain w-full h-full hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-serif mb-3 text-primary">Fruit Beverages</h3>
                <p className="text-muted-foreground leading-relaxed">Natural and ready-to-serve fruit drinks</p>
              </div>
            </Card>
            <Card className="bg-background border-border hover:border-primary transition-colors duration-300">
              <div className="aspect-square p-12 border-b border-border">
                <img src="/product-images/canned.jpg" alt="Canned Beverages" className="object-contain w-full h-full hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-serif mb-3 text-primary">Canned Beverages</h3>
                <p className="text-muted-foreground leading-relaxed">Premium canned drinks for on-the-go</p>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-32">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-20">Why Choose Prit Enterprise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center border-border hover:border-primary transition-colors duration-300">
              <h3 className="text-xl font-serif mb-4 text-primary">25+ Years Experience</h3>
              <p className="text-muted-foreground leading-relaxed">Established in 1999, we bring expertise and reliability to beverage distribution</p>
            </Card>
            <Card className="p-8 text-center border-border hover:border-primary transition-colors duration-300">
              <h3 className="text-xl font-serif mb-4 text-primary">Exclusive Partnership</h3>
              <p className="text-muted-foreground leading-relaxed">Official distributor of Davat Beverages' premium product range</p>
            </Card>
            <Card className="p-8 text-center border-border hover:border-primary transition-colors duration-300">
              <h3 className="text-xl font-serif mb-4 text-primary">Quality Assured</h3>
              <p className="text-muted-foreground leading-relaxed">Maintaining the highest standards in product quality and storage</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
