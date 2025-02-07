import React from "react";
import ProductCard from "./ProductCard";

interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  rating: number;
  imageUrl: string;
}

interface ProductGridProps {
  products?: Product[];
  onCompare?: (id: string) => void;
  onVisit?: (id: string) => void;
}

const defaultProducts: Product[] = [
  {
    id: "1",
    name: "AI Assistant Pro",
    description: "Advanced AI assistant for productivity and task automation",
    category: "Productivity",
    price: 29.99,
    rating: 4.5,
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=assistant",
  },
  {
    id: "2",
    name: "ImageGen AI",
    description: "Create stunning images with advanced AI generation",
    category: "Image Generation",
    price: 39.99,
    rating: 4.8,
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=image",
  },
  {
    id: "3",
    name: "ChatBot Builder",
    description: "Build and deploy custom chatbots for your business",
    category: "Chatbot",
    price: 49.99,
    rating: 4.2,
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=chatbot",
  },
  {
    id: "4",
    name: "AI Analytics Suite",
    description: "Powerful analytics and insights powered by AI",
    category: "Analytics",
    price: 59.99,
    rating: 4.6,
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=analytics",
  },
];

const ProductGrid = ({
  products = defaultProducts,
  onCompare = () => {},
  onVisit = () => {},
}: ProductGridProps) => {
  return (
    <div className="w-full min-h-screen bg-gray-50 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            category={product.category}
            price={product.price}
            rating={product.rating}
            imageUrl={product.imageUrl}
            onCompare={onCompare}
            onVisit={onVisit}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
