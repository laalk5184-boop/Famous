export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  shortDescription: string;
  description: string;
  features: string[];
  image: string;
  gallery: string[];
  rating: number;
  status?: 'active' | 'draft';
  isFeatured?: boolean;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
}

export interface Category {
  id: string;
  name: string;
  image: string;
}
