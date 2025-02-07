import React, { useState } from "react";
import Header from "./Header";
import FilterBar from "./FilterBar";
import ProductGrid from "./ProductGrid";
import ComparisonDrawer from "./ComparisonDrawer";

interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  rating: number;
  imageUrl: string;
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

interface HomeProps {
  initialProducts?: Product[];
}

const Home = ({ initialProducts = defaultProducts }: HomeProps) => {
  const [products] = useState<Product[]>(initialProducts);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleCompare = (id: string) => {
    const product = products.find((p) => p.id === id);
    if (product && selectedProducts.length < 3) {
      setSelectedProducts([...selectedProducts, product]);
    }
  };

  const handleRemoveComparison = (id: string) => {
    setSelectedProducts(selectedProducts.filter((p) => p.id !== id));
  };

  const handleVisit = (id: string) => {
    console.log(`Visiting product ${id}`);
  };

  const handleSearch = (query: string) => {
    console.log(`Searching for ${query}`);
  };

  const handleCategoryChange = (category: string) => {
    console.log(`Category changed to ${category}`);
  };

  const handlePriceRangeChange = (range: number[]) => {
    console.log(`Price range changed to ${range}`);
  };

  const handleFilterRemove = (filter: string) => {
    console.log(`Removing filter ${filter}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        onSearch={handleSearch}
        onMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
      />

      <main className="pt-20">
        <FilterBar
          onSearch={handleSearch}
          onCategoryChange={handleCategoryChange}
          onPriceRangeChange={handlePriceRangeChange}
          onFilterRemove={handleFilterRemove}
        />

        <ProductGrid
          products={products}
          onCompare={handleCompare}
          onVisit={handleVisit}
        />

        {selectedProducts.length > 0 && (
          <ComparisonDrawer
            selectedProducts={selectedProducts}
            onRemove={handleRemoveComparison}
            onCompare={() => console.log("Comparing products")}
          />
        )}
      </main>
    </div>
  );
};

export default Home;
