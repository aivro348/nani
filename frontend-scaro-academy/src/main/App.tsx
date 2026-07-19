import { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LmsProvider, useLms } from '../student-portal/lms/context/LmsContext';

import { ChatBot } from './components/ChatBot';

const LmsDashboardPage = lazy(() => import('../student-portal/lms/pages/LmsDashboardPage').then(m => ({ default: m.LmsDashboardPage })));
const LmsCourseViewerPage = lazy(() => import('../student-portal/lms/pages/LmsCourseViewerPage').then(m => ({ default: m.LmsCourseViewerPage })));
const LmsProfilePage = lazy(() => import('../student-portal/lms/pages/LmsProfilePage').then(m => ({ default: m.LmsProfilePage })));


// Lazy load pages for better performance
const BranchesPage = lazy(() => import('./pages/BranchesPage').then(m => ({ default: m.BranchesPage })));
const RoadmapPage = lazy(() => import('./pages/RoadmapPage').then(m => ({ default: m.RoadmapPage })));
const CoursesPage = lazy(() => import('../education/pages/CoursesPage').then(m => ({ default: m.CoursesPage })));
const ProjectsPage = lazy(() => import('../projects/pages/ProjectsPage').then(m => ({ default: m.ProjectsPage })));
const ProjectDetailsPage = lazy(() => import('../education/pages/ProjectDetailsPage').then(m => ({ default: m.ProjectDetailsPage })));
const PapersPage = lazy(() => import('./pages/PapersPage').then(m => ({ default: m.PapersPage })));

const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const CourseDetailsPage = lazy(() => import('../education/pages/CourseDetailsPage').then(m => ({ default: m.CourseDetailsPage })));

const TrainerPage = lazy(() => import('./pages/TrainerPage').then(m => ({ default: m.TrainerPage })));
const BlogsPage = lazy(() => import('./pages/BlogsPage').then(m => ({ default: m.BlogsPage })));

// LMS & Certificate Pages
const LoginPage = lazy(() => import('../student-portal/login/pages/LoginPage').then(m => ({ default: m.LoginPage })));
const CommunityHubPage = lazy(() => import('./pages/CommunityHubPage').then(m => ({ default: m.CommunityHubPage })));
const CertificateVerificationPage = lazy(() => import('../student-portal/certificate/pages/CertificateVerificationPage').then(m => ({ default: m.CertificateVerificationPage })));

// Certificate Admin Pages
const CertAdminLoginPage = lazy(() => import('../certificate-admin/pages/CertAdminLoginPage'));
const CertAdminDashboardPage = lazy(() => import('../certificate-admin/pages/CertAdminDashboardPage'));
const RoadmapDetailsPage = lazy(() => import('./pages/RoadmapDetailsPage').then(m => ({ default: m.RoadmapDetailsPage })));

const AllCoursesPage = lazy(() => import('../education/pages/AllCoursesPage').then(m => ({ default: m.AllCoursesPage })));
const AllProjectsPage = lazy(() => import('../education/pages/AllProjectsPage').then(m => ({ default: m.AllProjectsPage })));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage').then(m => ({ default: m.PrivacyPolicyPage })));
const TermsOfServicePage = lazy(() => import('./pages/TermsOfServicePage').then(m => ({ default: m.TermsOfServicePage })));

// New Education Pages
const AboutUsPage = lazy(() => import('../education/pages/subsections/AboutUsPage').then(m => ({ default: m.AboutUsPage })));
const PartnersPage = lazy(() => import('../education/pages/subsections/PartnersPage').then(m => ({ default: m.PartnersPage })));
const NewsEventsPage = lazy(() => import('../education/pages/subsections/NewsEventsPage').then(m => ({ default: m.NewsEventsPage })));
const SuccessStoriesPage = lazy(() => import('../education/pages/subsections/SuccessStoriesPage').then(m => ({ default: m.SuccessStoriesPage })));
const PodcastPage = lazy(() => import('../education/pages/subsections/PodcastPage').then(m => ({ default: m.PodcastPage })));
const WorkshopsPage = lazy(() => import('../education/pages/subsections/WorkshopsPage').then(m => ({ default: m.WorkshopsPage })));
const EducationBlogsPage = lazy(() => import('../education/pages/subsections/EducationBlogsPage').then(m => ({ default: m.EducationBlogsPage })));

// Auth Pages

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-page-bg">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-text-muted">Loading...</p>
    </div>
  </div>
);

// Route protector for LMS workspace
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, isLoading } = useLms();
  
  if (isLoading) {
    return <PageLoader />;
  }
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  
  return <>{children}</>;
}


function ScrollToTop() {
  const location = useLocation();
  
  useEffect(() => {
    // Only apply if there's no hash (hashes are for jumping to specific sections)
    if (!location.hash) {
      // Force instant scroll to top
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' } as ScrollToOptions);
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      
      const root = document.getElementById('root');
      if (root) root.scrollTop = 0;
    }
  }, [location.pathname, location.search, location.hash]);
  
  return null;
}

export default function App() {
  const location = useLocation();

  useEffect(() => {
    // Cache clearing logic for version updates and hacker prevention
    const APP_VERSION = '1.0.5';
    const storedVersion = localStorage.getItem('app_version');

    if (storedVersion !== APP_VERSION) {
      // Guard against infinite reload: if we already attempted a reload this session, stop.
      if (sessionStorage.getItem('version_reload_attempted')) {
        // Storage is broken (e.g. private browsing); just set what we can and move on.
        try { localStorage.setItem('app_version', APP_VERSION); } catch { /* ignore */ }
        return;
      }

      console.log('New version detected, clearing cache explicitly...');
      try {
        localStorage.clear();
        localStorage.setItem('app_version', APP_VERSION);
      } catch { /* ignore storage errors */ }
      
      if ('serviceWorker' in navigator) {
        caches.keys().then((names) => {
          for (const name of names) caches.delete(name);
        });
      }
      
      // Mark that we've already attempted a reload this session
      try { sessionStorage.setItem('version_reload_attempted', '1'); } catch { /* ignore */ }
      window.location.replace(window.location.href);
    }

    // Handle scroll on route change or hash navigation
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Force instant scroll to top, overriding CSS smooth scrolling
      setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
        document.documentElement.scrollTo({ top: 0, left: 0, behavior: 'auto' });
        document.body.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      }, 10);
    }
  }, [location.pathname, location.hash]);

  return (
    <LmsProvider>
            <ScrollToTop />
      <div className="min-h-screen bg-page-bg text-page-fg theme-transition overflow-x-hidden w-full flex flex-col">
        {!location.pathname.startsWith('/sign-') && <Navbar />}

        <main className="flex-grow">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<CoursesPage />} />

              <Route path="/branches" element={<BranchesPage />} />
              <Route path="/roadmap" element={<RoadmapPage />} />
              <Route path="/roadmap/:roadmapId" element={<RoadmapDetailsPage />} />
              <Route path="/community" element={<CommunityHubPage />} />
              <Route path="/trainer" element={<TrainerPage />} />
              <Route path="/team" element={<TrainerPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/blogs" element={<BlogsPage />} />
              <Route path="/verify-certificate" element={<CertificateVerificationPage />} />
              <Route path="/cert-admin" element={<CertAdminLoginPage />} />
              <Route path="/cert-admin/dashboard" element={<CertAdminDashboardPage />} />
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/all-courses" element={<AllCoursesPage />} />
              <Route path="/courses/:courseId" element={<CourseDetailsPage />} />
              <Route path="/all-projects" element={<AllProjectsPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/:projectId" element={<ProjectDetailsPage />} />
              <Route path="/papers" element={<PapersPage />} />
              <Route path="/privacy" element={<PrivacyPolicyPage />} />
              <Route path="/terms" element={<TermsOfServicePage />} />
              
              {/* Main Website Routes removed */}
              
              
              {/* New Education Routes */}
              <Route path="/about" element={<AboutUsPage />} />
              <Route path="/partners" element={<PartnersPage />} />
              <Route path="/news-events" element={<NewsEventsPage />} />
              <Route path="/success-stories" element={<SuccessStoriesPage />} />
              <Route path="/podcast" element={<PodcastPage />} />
              <Route path="/workshops" element={<WorkshopsPage />} />
              <Route path="/education-blogs" element={<EducationBlogsPage />} />
              
              {/* LMS Routes */}
              <Route path="/lms" element={<ProtectedRoute><LmsDashboardPage /></ProtectedRoute>} />
              <Route path="/lms/course/:courseId" element={<ProtectedRoute><LmsCourseViewerPage /></ProtectedRoute>} />
              <Route path="/lms/profile" element={<ProtectedRoute><LmsProfilePage /></ProtectedRoute>} />

              <Route path="*" element={<CoursesPage />} />
            </Routes>
          </Suspense>
        </main>

        {!location.pathname.startsWith('/sign-') && (
          <>
            <Footer />
            <ChatBot />
          </>
        )}
      </div>
    </LmsProvider>
  );

}