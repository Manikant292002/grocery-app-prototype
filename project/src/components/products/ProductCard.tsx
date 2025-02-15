import React from 'react';
import { Plus, Minus, ShoppingCart, Tag } from 'lucide-react';
import { Product } from '../../types';
import { formatPrice } from '../../utils/currency';
import { popIn } from '../../utils/animations';

interface ProductCardProps {
  product: Product;
  onAddToCart: () => void;
  quantity?: number;
  onUpdateQuantity?: (newQuantity: number) => void;
}

export function ProductCard({ 
  product, 
  onAddToCart, 
  quantity, 
  onUpdateQuantity 
}: ProductCardProps) {
  const discountedPrice = product.discount 
    ? product.price * (1 - product.discount / 100)
    : product.price;

  return (
    <div className={`bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${popIn}`}>
      <div className="relative h-48 overflow-hidden group">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {product.discount && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
            <Tag className="w-4 h-4" />
            {product.discount}% OFF
          </div>
        )}
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button
            onClick={onAddToCart}
            className="bg-white text-green-600 px-4 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-green-50"
          >
            <ShoppingCart className="w-4 h-4" />
            Quick Add
          </button>
        </div>
      </div>
      <div className="p-4">
        <div className="text-sm text-green-600 font-medium mb-1 uppercase tracking-wide">
          {product.category}
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
        <div className="flex items-baseline gap-2">
          <p className="text-green-600 font-bold text-xl">
            {formatPrice(discountedPrice)}
          </p>
          {product.discount && (
            <p className="text-gray-400 line-through text-sm">
              {formatPrice(product.price)}
            </p>
          )}
        </div>
        {quantity !== undefined && (
          <div className="flex items-center justify-between mt-3 bg-gray-50 rounded-lg p-2">
            <button
              onClick={() => onUpdateQuantity?.(quantity - 1)}
              className="p-2 rounded-full hover:bg-white transition-colors duration-200 text-gray-600 hover:text-gray-900"
              disabled={quantity <= 0}
            >
              <Minus className="h-5 w-5" />
            </button>
            <span className="font-semibold text-lg">{quantity}</span>
            <button
              onClick={() => onUpdateQuantity?.(quantity + 1)}
              className="p-2 rounded-full hover:bg-white transition-colors duration-200 text-gray-600 hover:text-gray-900"
            >
              <Plus className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}