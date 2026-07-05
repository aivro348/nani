import { useSEO } from '../../app/utils/useSEO';
import { AIRoadmapsSection } from '../components/AIRoadmapsSection';
import { EducationContact } from '../../education/components/EducationContact';

export function AllAIRoadmapsPage() {
  useSEO(
    'All AI Roadmaps | Scaro AI Division',
    'Explore comprehensive artificial intelligence career roadmaps and learning paths offered by Scaro Technologies.'
  );

  return (
    <div className="min-h-screen bg-page-bg text-page-fg pt-16 pb-0">
      <section className="bg-surface border-b border-border py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black text-heading mb-4">
            All AI <span className="text-[var(--primary-maroon)]">Roadmaps</span>
          </h1>
          <p className="text-lg text-text-secondary">
            Follow our expertly crafted week-by-week learning paths to transform from beginner to industry-ready AI professional.
          </p>
        </div>
      </section>

      <AIRoadmapsSection previewOnly={false} />

      <section id="contact" className="scroll-mt-24">
        <EducationContact />
      </section>
    </div>
  );
}
