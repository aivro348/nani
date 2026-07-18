import { useEffect } from 'react';
import { useSEO } from '../../main/utils/useSEO';
import { BusinessTeam } from '../components/BusinessTeam';
import { BusinessCTA } from '../components/BusinessCTA';

export function BusinessTeamPage() {
  useSEO(
    'Our Executive Team | Scaro Technologie',
    'Meet the engineering experts, AI researchers, and digital product architects at Scaro Technologie driving enterprise transformations.'
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0506] text-white selection:bg-[var(--primary-maroon)] selection:text-white pt-20">
      <BusinessTeam />
      <BusinessCTA />
    </div>
  );
}
