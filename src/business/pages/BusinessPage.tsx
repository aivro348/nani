import { useSEO } from '../../app/utils/useSEO';
import { BusinessHero } from '../components/BusinessHero';
import { BusinessServices } from '../components/BusinessServices';
import { BusinessProjects } from '../components/BusinessProjects';
import { BusinessTeam } from '../components/BusinessTeam';
import { BusinessCTA } from '../components/BusinessCTA';
import { BusinessContact } from '../components/BusinessContact';

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
