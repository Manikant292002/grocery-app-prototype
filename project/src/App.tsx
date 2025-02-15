import  { useState } from 'react';
import { AuthForm } from './components/auth/AuthForm';
import { ProductCard } from './components/products/ProductCard';
import { CartSummary } from './components/cart/CartSummary';
import { PaymentForm } from './components/checkout/PaymentForm';
import { Header } from './components/layout/Header';
import { Hero } from './components/layout/Hero';
import { BackButton } from './components/navigation/BackButton';
import { Search } from 'lucide-react';
import { User, CartItem } from './types';
import { PRODUCTS } from './data/products';

const CATEGORIES = ['All', 'Fruits', 'Vegetables', 'Beverages', 'Dairy', 'Staples', 'Bakery'];

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [step, setStep] = useState<'auth' | 'browse' | 'cart' | 'payment'>('auth');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleAuth = (email: string, password: string, isLogin: boolean) => {
    setUser({ email });
    setStep('browse');
  };

  const handleAddToCart = (product: Product) => {
    setCart((current) => {
      const existing = current.find((item) => item.product.id === product.id);
      if (existing) {
        return current.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...current, { product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    setCart((current) =>
      quantity === 0
        ? current.filter((item) => item.product.id !== productId)
        : current.map((item) =>
            item.product.id === productId ? { ...item, quantity } : item
          )
    );
  };

  const handlePayment = (paymentDetails: any) => {
    alert('Order placed successfully!');
    setCart([]);
    setStep('browse');
  };

  const filteredProducts = PRODUCTS.filter(
    (product) =>
      (selectedCategory === 'All' ||
        product.category.toLowerCase() === selectedCategory.toLowerCase()) &&
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <AuthForm onSubmit={handleAuth} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header 
        email={user.email}
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        onCartClick={() => setStep('cart')}
      />

      <main>
        {step === 'browse' && (
          <>
            <Hero />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="mb-8">
                <div className="relative max-w-xl mx-auto">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div className="flex justify-center space-x-4 mt-4 overflow-x-auto pb-2">
                  {CATEGORIES.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg whitespace-nowrap ${
                        selectedCategory === category
                          ? 'bg-green-600 text-white'
                          : 'bg-white text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={() => handleAddToCart(product)}
                  />
                ))}
              </div>
            </div>
          </>
        )}

        {(step === 'cart' || step === 'payment') && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <BackButton 
              onClick={() => setStep(step === 'cart' ? 'browse' : 'cart')}
              label={`Back to ${step === 'cart' ? 'Shopping' : 'Cart'}`}
            />
            {step === 'cart' && (
              <div className="space-y-6">
                <CartSummary items={cart} onUpdateQuantity={handleUpdateQuantity} />
                {cart.length > 0 && (
                  <div className="flex justify-end">
                    <button
                      onClick={() => setStep('payment')}
                      className="px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-200"
                    >
                      Proceed to Payment
                    </button>
                  </div>
                )}
              </div>
            )}
            {step === 'payment' && (
              <>
                <CartSummary items={cart} onUpdateQuantity={handleUpdateQuantity} />
                <div className="mt-8">
                  <PaymentForm onSubmit={handlePayment} />
                </div>
              </>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;