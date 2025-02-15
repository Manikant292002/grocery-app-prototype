import React from 'react';
import { fadeIn } from '../../utils/animations';

export function Hero() {
  return (
    <div className="relative h-[400px] mb-8 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=2000"
          alt="Fresh vegetables and fruits"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
      </div>
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 ${fadeIn}`}>
          Fresh & Healthy
          <br />
          <span className="text-green-400">Grocery Delivery</span>
        </h1>
        <p className="text-xl text-gray-200 max-w-xl">
          Get fresh vegetables, fruits, and daily essentials delivered to your doorstep
        </p>
      </div>
    </div>
  );
}