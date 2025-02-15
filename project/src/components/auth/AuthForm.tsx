import React, { useState } from 'react';
import { Lock, Mail, User } from 'lucide-react';

interface AuthFormProps {
  onSubmit: (email: string, password: string, isLogin: boolean) => void;
}

export function AuthForm({ onSubmit }: AuthFormProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email, password, isLogin);
  };

  return (
    <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">
        {isLogin ? 'Welcome Back' : 'Create Account'}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            required
          />
        </div>
        <div className="relative">
          <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition duration-200"
        >
          {isLogin ? 'Sign In' : 'Sign Up'}
        </button>
      </form>
      <div className="mt-4 text-center">
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="text-green-600 hover:text-green-700"
        >
          {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Sign In'}
        </button>
      </div>
      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or continue with</span>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3">
          <button className="flex justify-center items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <img
              alt="Google"
              src="https://www.google.com/favicon.ico"
              className="h-5 w-5 mr-2"
            />
            Google
          </button>
          <button className="flex justify-center items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <img
              alt="Facebook"
              src="https://www.facebook.com/favicon.ico"
              className="h-5 w-5 mr-2"
            />
            Facebook
          </button>
        </div>
      </div>
    </div>
  );
}