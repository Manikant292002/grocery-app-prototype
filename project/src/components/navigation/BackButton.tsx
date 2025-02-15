import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { slideIn } from '../../utils/animations';

interface BackButtonProps {
  onClick: () => void;
  label?: string;
}

export function BackButton({ onClick, label = 'Back' }: BackButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center text-gray-600 hover:text-gray-900 mb-6 group ${slideIn}`}
    >
      <ArrowLeft className="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-200" />
      <span className="font-medium">{label}</span>
    </button>
  );
}