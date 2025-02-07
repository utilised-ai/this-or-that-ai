import React from "react";
import { Search } from "lucide-react";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Slider } from "./ui/slider";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

interface FilterBarProps {
  onSearch?: (value: string) => void;
  onCategoryChange?: (value: string) => void;
  onPriceRangeChange?: (value: number[]) => void;
  selectedFilters?: string[];
  onFilterRemove?: (filter: string) => void;
}

const FilterBar = ({
  onSearch = () => {},
  onCategoryChange = () => {},
  onPriceRangeChange = () => {},
  selectedFilters = ["Chatbot", "Under $50"],
  onFilterRemove = () => {},
}: FilterBarProps) => {
  return (
    <div className="w-full p-4 border-b bg-white">
      <div className="max-w-7xl mx-auto space-y-4">
        <div className="flex flex-wrap gap-4 items-center justify-between">
          <div className="flex-1 min-w-[200px] max-w-md relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search AI tools..."
              className="pl-10"
              onChange={(e) => onSearch(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-4 items-center">
            <Select onValueChange={onCategoryChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="chatbot">Chatbot</SelectItem>
                <SelectItem value="image-generation">
                  Image Generation
                </SelectItem>
                <SelectItem value="text-to-speech">Text to Speech</SelectItem>
                <SelectItem value="code-assistant">Code Assistant</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex flex-col space-y-2 min-w-[200px]">
              <span className="text-sm text-gray-500">Price Range</span>
              <Slider
                defaultValue={[0, 100]}
                max={100}
                step={1}
                className="w-[200px]"
                onValueChange={onPriceRangeChange}
              />
            </div>
          </div>
        </div>

        {selectedFilters.length > 0 && (
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-sm text-gray-500">Active filters:</span>
            {selectedFilters.map((filter) => (
              <Badge
                key={filter}
                variant="secondary"
                className="px-3 py-1 cursor-pointer hover:bg-gray-200"
                onClick={() => onFilterRemove(filter)}
              >
                {filter}
                <span className="ml-2">×</span>
              </Badge>
            ))}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => selectedFilters.forEach(onFilterRemove)}
            >
              Clear all
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterBar;
