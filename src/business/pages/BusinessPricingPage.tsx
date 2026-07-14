import { useEffect } from 'react';
import { useSEO } from '../../main/utils/useSEO';
import { BusinessPricing } from '../components/BusinessPricing';
import { BusinessCTA } from '../components/BusinessCTA';

export function BusinessPricingPage() {
  useSEO(
    'Pricing | Scaro Technologies Business',
    'Transparent pricing with no hidden costs for Enterprise Web, E-Commerce, Mobile Apps, and AI Solutions.'
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0506] text-white selection:bg-[var(--primary-maroon)] selection:text-white pt-20">
      <BusinessPricing />
      <BusinessCTA />
    </div>
  );
}
