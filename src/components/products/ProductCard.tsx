
import { Card } from "@/components/ui/card";

interface ProductCardProps {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
}

const ProductCard = ({ name, category, image, description }: ProductCardProps) => {
  return (
    <Card className="group neo-border neo-shadow hover:-translate-y-1 transition-transform">
      <div className="aspect-square bg-[#f5f5f7] p-8 border-b-2 border-black">
        <img
          src={image}
          alt={name}
          className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold tracking-tight mb-2">{name}</h3>
        <p className="text-base text-black/70 mb-4">{category}</p>
        <p className="text-sm text-black/60">{description}</p>
      </div>
    </Card>
  );
};

export default ProductCard;
