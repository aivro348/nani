import { useSEO } from '../utils/useSEO';
import { BusinessHero } from '../components/business/BusinessHero';
import { BusinessServices } from '../components/business/BusinessServices';
import { BusinessProjects } from '../components/business/BusinessProjects';
import { BusinessTeam } from '../components/business/BusinessTeam';
import { BusinessCTA } from '../components/business/BusinessCTA';
import { BusinessContact } from '../components/business/BusinessContact';

export function BusinessPage() {
  useSEO(
    'Scaro Technologies | Enterprise AI & Software Solutions',
    'Official corporate services by Scaro Technologies: Enterprise AI Solutions, Web & Mobile App Development, and Data Analytics.'
  );

  return (
    <div className="min-h-screen bg-page-bg text-page-fg selection:bg-[var(--primary-maroon)] selection:text-white">
      <BusinessHero />
      <BusinessServices />
      <BusinessProjects />
      <BusinessTeam />
      <BusinessContact />
      <BusinessCTA />
    </div>
  );
}
