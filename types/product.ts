export interface Product {
  id: string;
  url: string;
  name: string;
  category: string;
  rating: number;
  reviews?: number;
  botanicalName: string;
  availableForms: string;
  packing: string;
  weight: string;
  season: string;
  isBestSeller?: boolean;
  isOrganic?: boolean;
  price?: number;
  comparePrice?: number;
  createdAt?: string;
}