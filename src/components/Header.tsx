import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search, Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";

interface HeaderProps {
  onSearch?: (query: string) => void;
  onMenuToggle?: () => void;
  logoUrl?: string;
}

const Header = ({
  onSearch = () => {},
  onMenuToggle = () => {},
  logoUrl = "https://api.dicebear.com/7.x/avataaars/svg?seed=logo",
}: HeaderProps) => {
  return (
    <header className="w-full h-20 bg-white border-b border-gray-200 px-4 lg:px-8 fixed top-0 z-50">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between gap-4">
        {/* Logo and Brand */}
        <div className="flex items-center gap-2">
          <img src={logoUrl} alt="AI Tools Logo" className="h-10 w-10" />
          <span className="text-xl font-bold hidden sm:block">
            AI Tools Hub
          </span>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl hidden md:block">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="search"
              placeholder="Search AI tools..."
              className="w-full pl-10"
              onChange={(e) => onSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-4">
          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 w-[400px]">
                    <NavigationMenuLink className="block p-2 hover:bg-gray-100 rounded-md">
                      Chatbots
                    </NavigationMenuLink>
                    <NavigationMenuLink className="block p-2 hover:bg-gray-100 rounded-md">
                      Image Generation
                    </NavigationMenuLink>
                    <NavigationMenuLink className="block p-2 hover:bg-gray-100 rounded-md">
                      Text Analysis
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Compare</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-4 w-[200px]">
                    <NavigationMenuLink className="block p-2 hover:bg-gray-100 rounded-md">
                      View Comparisons
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={onMenuToggle}
          >
            <Menu className="h-6 w-6" />
          </Button>

          <div className="flex gap-2">
            <Button variant="outline" className="hidden sm:inline-flex">
              Sign In
            </Button>
            <Button className="hidden sm:inline-flex bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium">
              Submit Your AI Tool
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
