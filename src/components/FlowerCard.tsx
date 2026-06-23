import React from 'react';

interface FlowerCardProps {
  image: string;
  name: string;
  description: string;
}

export const FlowerCard: React.FC<FlowerCardProps> = ({ image, name, description }) => {
  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = 'https://images.pexels.com/photos/947914/pexels-photo-947914.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'; /* Fallback image */
  };

  return (
    <div className="bg-white rounded-3xl border-0 shadow-xl shadow-violet-100 p-6 flex flex-col items-center text-center hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-2xl mb-4 shadow-md"
        onError={handleError}
      />
      <h3 className="text-xl font-semibold text-gray-800 mb-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
        {name}
      </h3>
      <p className="text-gray-600 text-base leading-relaxed">
        {description}
      </p>
      <button className="mt-4 bg-gradient-to-r from-violet-500 to-pink-500 text-white px-4 py-2 rounded-full font-bold text-sm hover:opacity-90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
        View Details
      </button>
    </div>
  );
};
