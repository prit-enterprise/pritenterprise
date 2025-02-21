
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
    <Card className="group border-2 border-neutral-200 hover:border-neutral-900 transition-all duration-300">
      <div className="aspect-square bg-[#f5f5f7] p-8 border-b-2 border-neutral-200 group-hover:border-neutral-900 transition-colors">
        <img
          src={image}
          alt={name}
          className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold tracking-tight mb-2">{name}</h3>
        <p className="text-base text-gray-600">{category}</p>
      </div>
    </Card>
  );
};

export default ProductCard;
