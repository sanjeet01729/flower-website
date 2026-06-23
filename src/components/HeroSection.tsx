import React from 'react';

export const HeroSection: React.FC = () => {
  const imageUrl = "https://images.pexels.com/photos/30742308/pexels-photo-30742308.jpeg?auto=compress&cs=tinysrgb&h=650&w=940";

  return (
    <section id="hero" className="relative bg-cover bg-center py-16 md:py-24 text-white overflow-hidden"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/70 to-pink-500/70 z-0"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 drop-shadow-lg">
          Discover the Joy of Blooms
        </h1>
        <p className="text-lg md:text-xl leading-relaxed mb-8 max-w-3xl mx-auto drop-shadow-md">
          Immerse yourself in a world of vibrant colors and delicate fragrances. Each flower tells a unique story of beauty and happiness.
        </p>
        <a
          href="#featured-flowers"
          className="inline-block bg-gradient-to-r from-emerald-400 to-cyan-400 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105 animate-bounce-slow"
        >
          Explore Our Collection
        </a>
      </div>
    </section>
  );
};
