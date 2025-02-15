import React, { useState } from 'react';
import { CreditCard, Lock } from 'lucide-react';

interface PaymentFormProps {
  onSubmit: (paymentDetails: any) => void;
}

export function PaymentForm({ onSubmit }: PaymentFormProps) {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ cardNumber, expiry, cvv });
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <div className="flex items-center justify-center mb-6">
        <Lock className="h-6 w-6 text-green-600 mr-2" />
        <h2 className="text-2xl font-bold">Secure Payment</h2>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <CreditCard className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Card Number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="MM/YY"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            required
          />
          <input
            type="text"
            placeholder="CVV"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition duration-200"
        >
          Pay Now
        </button>
      </form>
      <div className="mt-6 text-center text-sm text-gray-500">
        <p>Your payment is secure and encrypted</p>
      </div>
    </div>
  );
}