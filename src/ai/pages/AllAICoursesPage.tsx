import { useSEO } from '../../app/utils/useSEO';
import { AICoursesSection } from '../components/AICoursesSection';
import { EducationContact } from '../../education/components/EducationContact';

export function AllAICoursesPage() {
  useSEO(
    'All AI Programs | Scaro AI Division',
    'Explore all artificial intelligence courses and certification programs offered by Scaro Technologies.'
  );

  return (
    <div className="min-h-screen bg-page-bg text-page-fg pt-16 pb-0">
      <section className="bg-surface border-b border-border py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black text-heading mb-4">
            All AI <span className="text-[var(--primary-maroon)]">Programs</span>
          </h1>
          <p className="text-lg text-text-secondary">
            Explore our complete catalog of industry-recognized AI certification programs.
          </p>
        </div>
      </section>

      <AICoursesSection previewOnly={false} />

      <section id="contact" className="scroll-mt-24">
        <EducationContact />
      </section>
    </div>
  );
}
