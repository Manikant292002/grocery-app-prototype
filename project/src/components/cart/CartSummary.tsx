import React from 'react';
import { CartItem } from '../../types';
import { ProductCard } from '../products/ProductCard';
import { formatPrice } from '../../utils/currency';

interface CartSummaryProps {
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
}

export function CartSummary({ items, onUpdateQuantity }: CartSummaryProps) {
  const total = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Cart Summary</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <ProductCard
            key={item.product.id}
            product={item.product}
            quantity={item.quantity}
            onUpdateQuantity={(quantity) =>
              onUpdateQuantity(item.product.id, quantity)
            }
            onAddToCart={() => {}}
          />
        ))}
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center text-xl font-bold">
          <span>Total:</span>
          <span>{formatPrice(total)}</span>
        </div>
      </div>
    </div>
  );
}