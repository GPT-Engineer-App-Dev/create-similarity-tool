import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Globe, Menu, Search, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-red-500">airbnb</div>
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost">Stays</Button>
          <Button variant="ghost">Experiences</Button>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="hidden md:inline-flex">Airbnb your home</Button>
          <Button variant="ghost" size="icon">
            <Globe className="h-5 w-5" />
          </Button>
          <Button variant="outline" className="flex items-center space-x-2">
            <Menu className="h-5 w-5" />
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center max-w-3xl mx-auto border rounded-full shadow-sm">
          <Input type="text" placeholder="Where" className="border-0 focus:ring-0" />
          <div className="h-8 w-px bg-gray-200"></div>
          <Input type="text" placeholder="Check in" className="border-0 focus:ring-0" />
          <div className="h-8 w-px bg-gray-200"></div>
          <Input type="text" placeholder="Check out" className="border-0 focus:ring-0" />
          <div className="h-8 w-px bg-gray-200"></div>
          <Input type="text" placeholder="Who" className="border-0 focus:ring-0" />
          <Button size="icon" className="rounded-full bg-red-500 text-white">
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;