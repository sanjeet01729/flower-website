import React from 'react';
import { Flower, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-violet-600 to-pink-600 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col items-center justify-center space-y-4">
          <Flower className="h-10 w-10 text-white animate-spin-slow" />
          <p className="text-lg font-semibold">Bloom & Joy</p>
          <p className="text-sm leading-relaxed max-w-md">
            Dedicated to bringing the beauty and happiness of flowers into your life. Explore our vibrant collection and find your perfect bloom.
          </p>
          <div className="flex items-center space-x-2 text-sm">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-400 animate-pulse" />
            <span>by Flower Enthusiasts</span>
          </div>
          <p className="text-xs mt-4">
            &copy; {new Date().getFullYear()} Bloom & Joy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
