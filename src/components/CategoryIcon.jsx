import React from 'react';
import { cn } from "@/lib/utils";

const CategoryIcon = ({ icon: Icon, label, isActive }) => {
  return (
    <div className={cn(
      "flex flex-col items-center space-y-2 cursor-pointer",
      isActive ? "text-black border-b-2 border-black" : "text-gray-500"
    )}>
      <Icon className="h-6 w-6" />
      <span className="text-xs">{label}</span>
    </div>
  );
};

export default CategoryIcon;