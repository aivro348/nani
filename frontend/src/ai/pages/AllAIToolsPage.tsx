import { useSEO } from '../../main/utils/useSEO';
import { AIToolsListSection } from '../components/AIToolsListSection';
import { EducationContact } from '../../education/components/EducationContact';

export function AllAIToolsPage() {
  useSEO(
    'All AI Tools | Scaro AI Division',
    'Explore the ultimate directory of AI tools, models, and productivity suites curated by Scaro Technologie.'
  );

  return (
    <div className="min-h-screen bg-page-bg text-page-fg pt-16 pb-0">
      <section className="bg-surface border-b border-border py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-heading mb-4">
            AI Tools <span className="text-[var(--primary-maroon)]">Directory</span>
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Discover the most powerful AI models, developer tools, and productivity suites trusted by modern engineering teams.
          </p>
        </div>
      </section>

      <AIToolsListSection previewOnly={false} />

      <section id="contact" className="scroll-mt-24">
        <EducationContact />
      </section>
    </div>
  );
}
