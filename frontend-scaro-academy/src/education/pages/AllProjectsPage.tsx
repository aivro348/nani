import { useEffect } from 'react';
import { ProjectsStoreSection } from '../components/ProjectsStoreSection';
import { EducationContact } from '../components/EducationContact';
import { useSEO } from '../../main/utils/useSEO';

export function AllProjectsPage() {
  useSEO(
    'Projects Store | Scaro Academy',
    'Get professionally built Mini & Main projects across all engineering branches.'
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-page-bg">
      <ProjectsStoreSection previewOnly={false} />
      
      <EducationContact />
    </div>
  );
}
