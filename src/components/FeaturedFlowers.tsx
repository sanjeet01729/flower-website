import React from 'react';
import { FlowerCard } from './FlowerCard';

export const FeaturedFlowers: React.FC = () => {
  const flowers = [
    {
      image: "https://images.pexels.com/photos/37423752/pexels-photo-37423752.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      name: "Radiant Roses",
      description: "Classic beauty, symbolizing love and passion with their velvety petals.",
    },
    {
      image: "https://images.pexels.com/photos/38072083/pexels-photo-38072083.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      name: "Sunny Sunflowers",
      description: "Bright and cheerful, bringing warmth and happiness to any setting.",
    },
    {
      image: "https://images.pexels.com/photos/11691117/pexels-photo-11691117.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      name: "Elegant Lilies",
      description: "Graceful and majestic, known for their striking appearance and sweet scent.",
    },
    {
      image: "https://images.pexels.com/photos/33128856/pexels-photo-33128856.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      name: "Vibrant Tulips",
      description: "A burst of color, representing perfect love and new beginnings.",
    },
    {
      image: "https://images.pexels.com/photos/32740383/pexels-photo-32740383.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      name: "Delicate Daisies",
      description: "Simple yet charming, symbolizing innocence and purity.",
    },
    {
      image: "https://images.pexels.com/photos/30052739/pexels-photo-30052739.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      name: "Exotic Orchids",
      description: "Sophisticated and unique, a symbol of luxury, beauty, and strength.",
    },
  ];

  return (
    <section id="featured-flowers" className="py-16 md:py-24 bg-gradient-to-br from-violet-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12 bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-violet-600">
          Our Featured Blooms
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {flowers.map((flower, index) => (
            <FlowerCard key={index} {...flower} />
          ))}
        </div>
      </div>
    </section>
  );
};
