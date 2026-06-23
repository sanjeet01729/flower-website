import React from 'react';
import { Heart } from 'lucide-react';

export const AboutUs: React.FC = () => {
  const imageUrl = "https://images.pexels.com/photos/6034155/pexels-photo-6034155.jpeg?auto=compress&cs=tinysrgb&h=650&w=940";

  return (
    <section id="about-us" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
              src={imageUrl}
              alt="About Us - Flower Enthusiasts"
              className="rounded-3xl shadow-xl shadow-pink-100 w-full h-auto object-cover transform hover:scale-102 transition-transform duration-300"
              onError={(e) => e.currentTarget.src = 'https://images.pexels.com/photos/947914/pexels-photo-947914.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'}
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-pink-600">
              Our Passion for Petals
            </h2>
            <p className="text-base leading-relaxed text-gray-700 mb-4">
              At Bloom & Joy, we believe that flowers are more than just plants; they are expressions of emotion, symbols of celebration, and sources of daily delight. Our journey began with a simple love for nature's artistry and a desire to share that joy with the world.
            </p>
            <p className="text-base leading-relaxed text-gray-700 mb-6">
              We meticulously curate a collection of the freshest, most vibrant blooms, ensuring each arrangement brings a smile to your face. From classic roses to exotic orchids, every flower is chosen for its beauty, fragrance, and ability to brighten any moment.
            </p>
            <div className="flex items-center justify-center md:justify-start space-x-2 text-pink-500">
              <Heart className="h-6 w-6 animate-pulse" />
              <span className="font-semibold text-lg">Spreading Happiness, One Bloom at a Time!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
