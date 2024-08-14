import React from 'react';
import Header from '../components/Header';
import CategoryIcon from '../components/CategoryIcon';
import ExperienceCard from '../components/ExperienceCard';
import { Bed, Palmtree, Mountain, Castle, Tent } from 'lucide-react';

const categories = [
  { icon: Bed, label: 'Stays' },
  { icon: Palmtree, label: 'Beachfront' },
  { icon: Mountain, label: 'Amazing views' },
  { icon: Castle, label: 'Castles' },
  { icon: Tent, label: 'Camping' },
];

const experiences = [
  {
    image: 'https://source.unsplash.com/random/800x600?concert',
    title: 'Live Music Experience',
    host: 'John Doe',
    status: 'Coming August 21',
  },
  {
    image: 'https://source.unsplash.com/random/800x600?cooking',
    title: 'Cooking Class with a Chef',
    host: 'Jane Smith',
    status: 'Coming October',
  },
  {
    image: 'https://source.unsplash.com/random/800x600?art',
    title: 'Art Gallery Tour',
    host: 'Alice Johnson',
    status: 'Sold out',
  },
  {
    image: 'https://source.unsplash.com/random/800x600?yoga',
    title: 'Sunset Yoga Session',
    host: 'Bob Williams',
    status: 'Available now',
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8 overflow-x-auto">
          {categories.map((category, index) => (
            <CategoryIcon
              key={index}
              icon={category.icon}
              label={category.label}
              isActive={index === 0}
            />
          ))}
        </div>
        <h2 className="text-2xl font-bold mb-4">Featured Experiences</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;