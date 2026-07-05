import { useEffect } from 'react';
import { CoursesSection } from '../components/CoursesSection';
import { EducationContact } from '../components/EducationContact';
import { useSEO } from '../../app/utils/useSEO';

export function AllCoursesPage() {
  useSEO(
    'All Programs | Scaro Academy',
    'Explore all of our comprehensive, industry-relevant engineering programs.'
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-page-bg pt-20">
      <div className="bg-[#ff3b00]/10 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            Explore All <span className="text-[#ff3b00]">Programs</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Choose from a wide variety of comprehensive training programs designed to make you industry-ready.
          </p>
        </div>
      </div>

      <CoursesSection previewOnly={false} />
      
      <EducationContact />
    </div>
  );
}
