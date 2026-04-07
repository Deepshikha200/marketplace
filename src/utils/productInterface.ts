export interface Product {
  id: string | number;
  name: string;
  price: number;
  description: string;
  category: string;
  rating: number;
  image: string;
  createdAt?: string;
}
