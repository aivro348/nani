import { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LmsProvider, useLms } from '../student-portal/lms/context/LmsContext';
import { HomePage } from './pages/HomePage';
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
const AIToolsPage = lazy(() => import('../ai/pages/AIToolsPage').then(m => ({ default: m.AIToolsPage })));
const AIAboutPage = lazy(() => import('../ai/pages/AIAboutPage').then(m => ({ default: m.AIAboutPage })));
const AICoursesPage = lazy(() => import('../ai/pages/AICoursesPage').then(m => ({ default: m.AICoursesPage })));
const AIMasterclassPage = lazy(() => import('../ai/pages/AIMasterclassPage').then(m => ({ default: m.AIMasterclassPage })));
const AIResourcesPage = lazy(() => import('../ai/pages/AIResourcesPage').then(m => ({ default: m.AIResourcesPage })));
const AICommunityPage = lazy(() => import('../ai/pages/AICommunityPage').then(m => ({ default: m.AICommunityPage })));
const AIBlogPage = lazy(() => import('../ai/pages/AIBlogPage').then(m => ({ default: m.AIBlogPage })));
const AllAICoursesPage = lazy(() => import('../ai/pages/AllAICoursesPage').then(m => ({ default: m.AllAICoursesPage })));
const AllAIRoadmapsPage = lazy(() => import('../ai/pages/AllAIRoadmapsPage').then(m => ({ default: m.AllAIRoadmapsPage })));
const AllAIToolsPage = lazy(() => import('../ai/pages/AllAIToolsPage').then(m => ({ default: m.AllAIToolsPage })));
const BusinessPage = lazy(() => import('../business/pages/BusinessPage').then(m => ({ default: m.BusinessPage })));
const BusinessServicesPage = lazy(() => import('../business/pages/BusinessServicesPage').then(m => ({ default: m.BusinessServicesPage })));
const BusinessPricingPage = lazy(() => import('../business/pages/BusinessPricingPage').then(m => ({ default: m.BusinessPricingPage })));
const BusinessBlogsPage = lazy(() => import('../business/pages/BusinessBlogsPage').then(m => ({ default: m.BusinessBlogsPage })));
const BusinessFaqPage = lazy(() => import('../business/pages/BusinessFaqPage').then(m => ({ default: m.BusinessFaqPage })));
const BusinessAboutPage = lazy(() => import('../business/pages/BusinessAboutPage').then(m => ({ default: m.BusinessAboutPage })));
const BusinessTeamPage = lazy(() => import('../business/pages/BusinessTeamPage').then(m => ({ default: m.BusinessTeamPage })));
const AllBusinessProjectsPage = lazy(() => import('../business/pages/AllBusinessProjectsPage').then(m => ({ default: m.AllBusinessProjectsPage })));
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
const AICourseDetailsPage = lazy(() => import('../ai/pages/AICourseDetailsPage').then(m => ({ default: m.AICourseDetailsPage })));
const AIRoadmapDetailsPage = lazy(() => import('../ai/pages/AIRoadmapDetailsPage').then(m => ({ default: m.AIRoadmapDetailsPage })));
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
const SignInPage = lazy(() => import('../auth/pages/SignInPage').then(m => ({ default: m.SignInPage })));
const SignUpPage = lazy(() => import('../auth/pages/SignUpPage').then(m => ({ default: m.SignUpPage })));

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
              <Route path="/" element={<HomePage setActiveSection={() => { }} />} />
              <Route path="/business" element={<BusinessPage />} />
              <Route path="/business-services" element={<BusinessServicesPage />} />
              <Route path="/business-pricing" element={<BusinessPricingPage />} />
              <Route path="/business-blogs" element={<BusinessBlogsPage />} />
               <Route path="/business-faq" element={<BusinessFaqPage />} />
              <Route path="/business-team" element={<BusinessTeamPage />} />
              <Route path="/business-about" element={<BusinessAboutPage />} />
              <Route path="/all-business-projects" element={<AllBusinessProjectsPage />} />
              <Route path="/ai" element={<AIToolsPage />} />
              <Route path="/ai-about" element={<AIAboutPage />} />
              <Route path="/ai-courses" element={<AICoursesPage />} />
              <Route path="/ai-masterclass" element={<AIMasterclassPage />} />
              <Route path="/ai-resources" element={<AIResourcesPage />} />
              <Route path="/ai-community" element={<AICommunityPage />} />
              <Route path="/ai-blog" element={<AIBlogPage />} />
              <Route path="/all-ai-courses" element={<AllAICoursesPage />} />
              <Route path="/all-ai-roadmaps" element={<AllAIRoadmapsPage />} />
              <Route path="/all-ai-tools" element={<AllAIToolsPage />} />
              <Route path="/ai/courses/:courseId" element={<AICourseDetailsPage />} />
              <Route path="/ai/roadmap/:roadmapId" element={<AIRoadmapDetailsPage />} />
              <Route path="/branches" element={<BranchesPage />} />
              <Route path="/roadmap" element={<RoadmapPage />} />
              <Route path="/roadmap/:roadmapId" element={<RoadmapDetailsPage />} />
              <Route path="/community" element={<CommunityHubPage />} />
              <Route path="/trainer" element={<TrainerPage />} />
              <Route path="/team" element={<TrainerPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/blogs" element={<BlogsPage />} />
              <Route path="/login" element={<LoginPage />} />
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
              
              {/* Main Website Routes */}
              <Route path="/" element={<><Navbar /><HomePage /><Footer /></>} />
              
              {/* Auth Routes */}
              <Route path="/sign-in/*" element={<SignInPage />} />
              <Route path="/sign-up/*" element={<SignUpPage />} />

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

              <Route path="*" element={<HomePage setActiveSection={() => { }} />} />
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