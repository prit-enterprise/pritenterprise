
import { Card } from "@/components/ui/card";

interface ProductCardProps {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
}

const ProductCard = ({ name, category, image }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
      <div className="aspect-w-1 aspect-h-1 bg-gradient-to-br from-orange-50 to-amber-50 p-4">
        <img
          src={image}
          alt={name}
          className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 md:p-6">
        <h3 className="text-lg md:text-xl font-semibold text-orange-900 mb-2">{name}</h3>
        <p className="text-sm text-orange-600">{category}</p>
      </div>
    </Card>
  );
};

export default ProductCard;
