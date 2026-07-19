import { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ChatBot } from './components/ChatBot';

const BranchesPage = lazy(() => import('./pages/BranchesPage').then(m => ({ default: m.BranchesPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const TrainerPage = lazy(() => import('./pages/TrainerPage').then(m => ({ default: m.TrainerPage })));
const BlogsPage = lazy(() => import('./pages/BlogsPage').then(m => ({ default: m.BlogsPage })));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage').then(m => ({ default: m.PrivacyPolicyPage })));
const TermsOfServicePage = lazy(() => import('./pages/TermsOfServicePage').then(m => ({ default: m.TermsOfServicePage })));

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-page-bg">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-text-muted">Loading...</p>
    </div>
  </div>
);

function ScrollToTop() {
  const location = useLocation();
  
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' } as ScrollToOptions);
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  }, [location.pathname, location.search, location.hash]);
  
  return null;
}

export default function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
        document.documentElement.scrollTo({ top: 0, left: 0, behavior: 'auto' });
        document.body.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      }, 10);
    }
  }, [location.pathname, location.hash]);

  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen bg-page-bg text-page-fg theme-transition overflow-x-hidden w-full flex flex-col">
        {!location.pathname.startsWith('/sign-') && <Navbar />}

        <main className="flex-grow">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<HomePage setActiveSection={() => { }} />} />
              <Route path="/branches" element={<BranchesPage />} />
              <Route path="/team" element={<TrainerPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/blogs" element={<BlogsPage />} />
              <Route path="/privacy" element={<PrivacyPolicyPage />} />
              <Route path="/terms" element={<TermsOfServicePage />} />
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
    </>
  );
}
