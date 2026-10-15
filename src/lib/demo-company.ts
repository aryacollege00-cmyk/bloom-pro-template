import cover from '@/assets/factory-cover.jpg';
import logo from '@/assets/apex-logo.svg';
import precision from '@/assets/precision-components.jpg';
import flanges from '@/assets/steel-flanges.jpg';
import valves from '@/assets/industrial-valves.jpg';
import bearings from '@/assets/ball-bearings.jpg';
import gears from '@/assets/helical-gears.jpg';
import fasteners from '@/assets/fasteners.jpg';
import type { Company, Product, Post, Reel } from './industrial-types';
export const company: Company = {
  name: 'Apex Engineering', logo_url: logo, cover_url: cover,
  description: 'Precision-engineered components. Uncompromising quality. Your trusted manufacturing partner for industrial solutions, built to perform.',
  tagline: 'ENGINEERED FOR EXCELLENCE', location: 'Plot 24, MIDC Industrial Area, Pune, Maharashtra 411026',
  email: 'sales@apexengineering.example', mobile: '+91 00000 00000', whatsapp: '910000000000',
  gst: '27ABCDE1234F1Z5', year_established: 2005, delivery_area: 'Pan-India',
  certifications: [
    { name: 'ISO 9001:2015', description: 'Certified quality management systems for consistent manufacturing excellence.' },
    { name: 'MSME Registered', description: 'A registered enterprise contributing to India’s industrial growth.' },
    { name: 'GST Registered', description: 'Transparent, compliant business practices you can count on.' },
  ],
};
export const products: Product[] = [
  { id: 1, name: 'CNC Precision Components', category: 'Precision Components', price: '₹250', moq: '100 pieces', image_url: precision, description: 'High-tolerance CNC-machined components for demanding industrial applications.' },
  { id: 2, name: 'Stainless Steel Flanges', category: 'Pipe Fittings', price: '₹450', moq: '50 pieces', image_url: flanges, description: 'Corrosion-resistant stainless steel flanges, manufactured for secure connections.' },
  { id: 3, name: 'Industrial Ball Valves', category: 'Valves', price: '₹1,200', moq: '20 pieces', image_url: valves, description: 'Reliable flow control with precision-engineered stainless steel ball valves.' },
  { id: 4, name: 'Deep Groove Ball Bearings', category: 'Bearings & Gears', price: '₹180', moq: '100 pieces', image_url: bearings, description: 'Smooth-running, high-performance bearings designed for a longer service life.' },
  { id: 5, name: 'Precision Helical Gears', category: 'Bearings & Gears', price: '₹850', moq: '25 pieces', image_url: gears, description: 'Precision-cut helical gears for efficient, low-noise power transmission.' },
  { id: 6, name: 'High-Tensile Fasteners', category: 'Fasteners', price: '₹35', moq: '500 pieces', image_url: fasteners, description: 'Industrial-grade bolts and nuts engineered for strength and durability.' },
];
export const posts: Post[] = [
  { id: 1, content: 'Inside our facility: precision at every step of the manufacturing process.', media_urls: [cover] },
  { id: 2, content: 'Built to your specifications. A closer look at our latest CNC-machined components.', media_urls: [precision] },
  { id: 3, content: 'Quality is in the details. Every component, every batch, every time.', media_urls: [gears] },
];
export const reels: Reel[] = [];
