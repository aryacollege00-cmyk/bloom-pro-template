import { fireEvent, render, screen, cleanup } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { IndustrialCompanyWebsite } from '@/components/industrial/company-website';
import { company, products } from '@/lib/demo-company';
import { filterProducts, whatsappLink } from '@/lib/industrial-types';
afterEach(cleanup);
describe('Industrial catalog', () => {
  it('filters by the supplied product category', () => {
    expect(filterProducts(products, 'Valves').map(product => product.id)).toEqual([3]);
    expect(filterProducts(products, null)).toHaveLength(6);
  });
  it('passes the selected product to onOpenInquiry', () => {
    const openInquiry = vi.fn();
    render(<IndustrialCompanyWebsite company={company} products={products} posts={[]} reels={[]} onOpenInquiry={openInquiry} />);
    fireEvent.click(screen.getByRole('button', { name: 'Valves' }));
    fireEvent.click(screen.getByRole('button', { name: 'Request Quote' }));
    expect(openInquiry).toHaveBeenCalledWith(products[2]);
  });
  it('uses the supplied WhatsApp phone and encodes the inquiry', () => {
    expect(whatsappLink('+91 98765 43210', 'Quote for valve')).toBe('https://wa.me/919876543210?text=Quote%20for%20valve');
  });
});
