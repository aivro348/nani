import { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { SocialWidgets } from './components/SocialWidgets';

// Lazy load pages for better performance
const BranchesPage = lazy(() => import('./pages/BranchesPage').then(m => ({ default: m.BranchesPage })));
const RoadmapPage = lazy(() => import('./pages/RoadmapPage').then(m => ({ default: m.RoadmapPage })));
const CoursesPage = lazy(() => import('../education/pages/CoursesPage').then(m => ({ default: m.CoursesPage })));
const ProjectsPage = lazy(() => import('../projects/pages/ProjectsPage').then(m => ({ default: m.ProjectsPage })));
const PapersPage = lazy(() => import('./pages/PapersPage').then(m => ({ default: m.PapersPage })));
const AIToolsPage = lazy(() => import('../ai/pages/AIToolsPage').then(m => ({ default: m.AIToolsPage })));
const BusinessPage = lazy(() => import('../business/pages/BusinessPage').then(m => ({ default: m.BusinessPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const CourseDetailsPage = lazy(() => import('../education/pages/CourseDetailsPage').then(m => ({ default: m.CourseDetailsPage })));

const TrainerPage = lazy(() => import('./pages/TrainerPage').then(m => ({ default: m.TrainerPage })));
const BlogsPage = lazy(() => import('./pages/BlogsPage').then(m => ({ default: m.BlogsPage })));
const LoginPage = lazy(() => import('../login/pages/LoginPage').then(m => ({ default: m.LoginPage })));
const CommunityHubPage = lazy(() => import('./pages/CommunityHubPage').then(m => ({ default: m.CommunityHubPage })));
const CertificateVerificationPage = lazy(() => import('../certificate/pages/CertificateVerificationPage').then(m => ({ default: m.CertificateVerificationPage })));
const RoadmapDetailsPage = lazy(() => import('./pages/RoadmapDetailsPage').then(m => ({ default: m.RoadmapDetailsPage })));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-page-bg">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-text-muted">Loading...</p>
    </div>
  </div>
);

export default function App() {
  const location = useLocation();

  useEffect(() => {
    // Cache clearing logic for version updates and hacker prevention
    const APP_VERSION = '1.0.5';
    const storedVersion = localStorage.getItem('app_version');

    if (storedVersion !== APP_VERSION) {
      console.log('New version detected, clearing cache explicitly...');
      localStorage.clear();
      sessionStorage.clear();
      localStorage.setItem('app_version', APP_VERSION);
      if ('serviceWorker' in navigator) {
        caches.keys().then((names) => {
          for (const name of names) caches.delete(name);
        });
      }
      window.location.replace(window.location.href);
    }

    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-page-bg text-page-fg theme-transition overflow-x-hidden w-full flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage setActiveSection={() => { }} />} />
            <Route path="/business" element={<BusinessPage />} />
            <Route path="/ai" element={<AIToolsPage />} />
            <Route path="/branches" element={<BranchesPage />} />
            <Route path="/roadmap" element={<RoadmapPage />} />
            <Route path="/roadmap/:roadmapId" element={<RoadmapDetailsPage />} />
            <Route path="/community" element={<CommunityHubPage />} />
            <Route path="/trainer" element={<TrainerPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/verify-certificate" element={<CertificateVerificationPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/courses/:courseId" element={<CourseDetailsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/papers" element={<PapersPage />} />
            <Route path="*" element={<HomePage setActiveSection={() => { }} />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />

      {/* Social Widgets - WhatsApp, Instagram, Email */}
      <SocialWidgets />

    </div>
  );
}