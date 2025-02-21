
interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}

const CategoryFilter = ({ categories, selectedCategory, onCategorySelect }: CategoryFilterProps) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategorySelect(category)}
            className={`px-6 py-3 transition-transform hover:-translate-y-0.5 neo-border ${
              selectedCategory === category
                ? "bg-black text-white neo-shadow"
                : "bg-white text-black hover:neo-shadow"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
