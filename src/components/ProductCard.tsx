import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Star, ExternalLink, Plus } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface ProductCardProps {
  id?: string;
  name?: string;
  description?: string;
  category?: string;
  price?: number;
  rating?: number;
  imageUrl?: string;
  onCompare?: (id: string) => void;
  onVisit?: (id: string) => void;
}

const ProductCard = ({
  id = "1",
  name = "AI Tool Name",
  description = "A powerful AI tool that helps you accomplish amazing things with ease and efficiency.",
  category = "Chatbot",
  price = 29.99,
  rating = 4.5,
  imageUrl = "https://api.dicebear.com/7.x/avataaars/svg?seed=aitools",
  onCompare = () => {},
  onVisit = () => {},
}: ProductCardProps) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
      />
    ));
  };

  return (
    <Card className="w-[360px] h-[420px] bg-white hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="h-16 w-16 rounded-lg overflow-hidden">
            <img
              src={imageUrl}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          <Badge variant="secondary" className="text-sm">
            {category}
          </Badge>
        </div>
        <CardTitle className="text-xl">{name}</CardTitle>
        <div className="flex items-center space-x-1">
          {renderStars(rating)}
          <span className="text-sm text-gray-500 ml-2">{rating}/5</span>
        </div>
      </CardHeader>

      <CardContent>
        <CardDescription className="text-sm text-gray-600 line-clamp-3">
          {description}
        </CardDescription>
        <div className="mt-4">
          <p className="text-2xl font-bold">
            ${price}
            <span className="text-sm font-normal text-gray-500">/month</span>
          </p>
        </div>
      </CardContent>

      <CardFooter className="flex justify-between">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                onClick={() => onCompare(id)}
                className="flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Compare
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Add to comparison</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <Button onClick={() => onVisit(id)} className="flex items-center gap-2">
          Visit Site
          <ExternalLink className="w-4 h-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
