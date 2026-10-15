export interface Company {
  name: string;
  logo_url: string;
  cover_url: string;
  description: string;
  location: string;
  email: string;
  mobile: string;
  whatsapp: string;
  gst: string;
  year_established: number;
  certifications: Array<string | { name: string; description?: string }>;
  tagline?: string;
  headline?: string;
  catalog_heading?: string;
  delivery_area?: string;
}
export interface Product {
  id: string | number;
  name: string;
  category: string;
  price: string | number;
  moq: string | number;
  image_url: string;
  description: string;
}
export interface Post { id: string | number; content: string; media_urls: string[] }
export interface Reel { id: string | number; video_url: string; thumbnail_url: string; content: string }
export interface IndustrialCompanyWebsiteProps {
  company: Company;
  products: Product[];
  posts: Post[];
  reels: Reel[];
  onOpenInquiry: (product: Product) => void;
}
export const getCategories = (products: Product[]) => [...new Set(products.map(product => product.category))];
export const filterProducts = (products: Product[], category: string | null) => category === null ? products : products.filter(product => product.category === category);
export const whatsappLink = (number: string, message?: string) => `https://wa.me/${number.replace(/\D/g, '')}${message ? `?text=${encodeURIComponent(message)}` : ''}`;
