import React from 'react';
import { ShoppingCart, User } from 'lucide-react';
import { slideIn } from '../../utils/animations';

interface HeaderProps {
  email: string;
  cartCount: number;
  onCartClick: () => void;
}

export function Header({ email, cartCount, onCartClick }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <h1 className={`text-3xl font-bold text-gray-800 ${slideIn}`}>
            Grocery
          </h1>
          <div className="flex items-center space-x-6">
            <div className="flex items-center text-gray-600">
              <User className="h-5 w-5 mr-2" />
              <span>{email}</span>
            </div>
            <button
              onClick={onCartClick}
              className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-popIn">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}