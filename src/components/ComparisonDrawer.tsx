import React from "react";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";
import { X, ArrowRight } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import ProductCard from "./ProductCard";

interface ComparisonDrawerProps {
  selectedProducts?: Array<{
    id: string;
    name: string;
    description: string;
    category: string;
    price: number;
    rating: number;
    imageUrl: string;
  }>;
  onRemove?: (id: string) => void;
  onCompare?: () => void;
}

const ComparisonDrawer = ({
  selectedProducts = [
    {
      id: "1",
      name: "AI Tool 1",
      description: "A powerful AI tool for content generation",
      category: "Content",
      price: 29.99,
      rating: 4.5,
      imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=tool1",
    },
    {
      id: "2",
      name: "AI Tool 2",
      description: "Advanced image generation platform",
      category: "Image",
      price: 39.99,
      rating: 4.8,
      imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=tool2",
    },
  ],
  onRemove = () => {},
  onCompare = () => {},
}: ComparisonDrawerProps) => {
  return (
    <Sheet defaultOpen>
      <SheetTrigger asChild>
        <div className="fixed bottom-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full shadow-lg cursor-pointer">
          Compare ({selectedProducts.length})
        </div>
      </SheetTrigger>
      <SheetContent side="bottom" className="h-[500px] bg-white">
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold mb-4">
            Compare AI Tools ({selectedProducts.length}/3)
          </SheetTitle>
        </SheetHeader>
        <Separator className="my-4" />
        <ScrollArea className="h-[350px] w-full">
          <div className="flex gap-4 p-4">
            {selectedProducts.map((product) => (
              <div key={product.id} className="relative">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute -top-2 -right-2 z-10 rounded-full bg-destructive text-destructive-foreground hover:bg-destructive/90"
                  onClick={() => onRemove(product.id)}
                >
                  <X className="h-4 w-4" />
                </Button>
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </ScrollArea>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t">
          <Button
            className="w-full"
            size="lg"
            onClick={onCompare}
            disabled={selectedProducts.length < 2}
          >
            Compare Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ComparisonDrawer;
