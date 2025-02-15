export interface User {
  email: string;
  name?: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  discount?: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}