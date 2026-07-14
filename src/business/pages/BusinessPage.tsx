import { useSEO } from '../../main/utils/useSEO';
import { BusinessServicesSlideshow } from '../components/BusinessServicesSlideshow';
import { BusinessProjects } from '../components/BusinessProjects';
import { BusinessReviews } from '../components/BusinessReviews';
import { BusinessCTA } from '../components/BusinessCTA';
import { BusinessContact } from '../components/BusinessContact';

export function BusinessPage() {
  useSEO(
    'Scaro Technologies | Enterprise AI & Software Solutions',
    'Official corporate services by Scaro Technologies: Enterprise AI Solutions, Web & Mobile App Development, and Data Analytics.'
  );

  return (
    <div className="min-h-screen bg-page-bg text-page-fg selection:bg-[var(--primary-maroon)] selection:text-white">
      <BusinessServicesSlideshow />
      <BusinessProjects />
      <BusinessReviews />
      <BusinessContact />
      <BusinessCTA />
    </div>
  );
}
