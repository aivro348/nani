import { useEffect } from 'react';
import { useSEO } from '../../main/utils/useSEO';
import { BusinessAbout } from '../components/BusinessAbout';
import { BusinessCTA } from '../components/BusinessCTA';

export function BusinessAboutPage() {
  useSEO(
    'About Us | Scaro Technologie',
    'Learn about Scaro Technologie, our 23+ years of experience, mission, vision, and our team of AI and Web experts.'
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-page-bg text-page-fg selection:bg-[var(--primary-maroon)] selection:text-white pt-20">
      <BusinessAbout />
      <BusinessCTA />
    </div>
  );
}
