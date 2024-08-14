import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const ExperienceCard = ({ image, title, host, status }) => {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      </CardContent>
      <CardFooter className="flex flex-col items-start p-4">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">Hosted by {host}</p>
        <p className="text-sm font-medium">{status}</p>
      </CardFooter>
    </Card>
  );
};

export default ExperienceCard;