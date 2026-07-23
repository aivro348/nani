import { useEffect } from 'react';
import { CoursesSection } from '../components/CoursesSection';
import { EducationContact } from '../components/EducationContact';
import { useSEO } from '../../main/utils/useSEO';

export function AllCoursesPage() {
  useSEO(
    'All Programs | Scaro Academy',
    'Explore all of our comprehensive, industry-relevant engineering programs.'
  );

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <div className="bg-[var(--primary-maroon)] text-white pt-24 sm:pt-28 pb-10 sm:pb-12 px-4 shadow-md">
        <div className="max-w-7xl mx-auto text-center space-y-3">
          <h1 className="text-3xl md:text-5xl font-black tracking-tight">
            Explore All <span className="text-[var(--primary-gold)]">Training Programs</span>
          </h1>
          <p className="text-sm md:text-base text-slate-200 max-w-2xl mx-auto font-light leading-relaxed">
            Choose from industry-vetted engineering programs featuring live developer mentorship and capstone projects.
          </p>
        </div>
      </div>

      <CoursesSection previewOnly={false} />
    </div>
  );
}
