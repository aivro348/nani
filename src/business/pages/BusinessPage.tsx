import { useSEO } from '../../main/utils/useSEO';
import { BusinessServicesSlideshow } from '../components/BusinessServicesSlideshow';
import { BusinessProjects } from '../components/BusinessProjects';
import { BusinessReviews } from '../components/BusinessReviews';
import { BusinessCTA } from '../components/BusinessCTA';
import { BusinessContact } from '../components/BusinessContact';

export function BusinessPage() {
  const businessSitelinks = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://scarotechnologies.vercel.app/business",
    "name": "Scaro Business Solutions",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://scarotechnologies.vercel.app/business?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "SiteNavigationElement",
          "position": 1,
          "name": "Enterprise Services",
          "description": "Explore our Enterprise AI, Automation, and Web Development services.",
          "url": "https://scarotechnologies.vercel.app/business-services"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 2,
          "name": "Pricing & Packages",
          "description": "View our transparent business solution packages.",
          "url": "https://scarotechnologies.vercel.app/business-pricing"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 3,
          "name": "Business Portfolio",
          "description": "See the successful projects we have delivered for our clients.",
          "url": "https://scarotechnologies.vercel.app/all-business-projects"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 4,
          "name": "Meet the Team",
          "description": "Get to know the experts behind Scaro Business Solutions.",
          "url": "https://scarotechnologies.vercel.app/business-team"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 5,
          "name": "Contact Business Sales",
          "description": "Get in touch with our enterprise sales and support team.",
          "url": "https://scarotechnologies.vercel.app/business-contact"
        }
      ]
    }
  };

  useSEO(
    'Scaro Technologies | Enterprise AI & Software Solutions',
    'Official corporate services by Scaro Technologies: Enterprise AI Solutions, Web & Mobile App Development, and Data Analytics.',
    businessSitelinks
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
