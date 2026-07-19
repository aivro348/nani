import { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ChatBot } from './components/ChatBot';

const BusinessPage = lazy(() => import('../business/pages/BusinessPage').then(m => ({ default: m.BusinessPage })));
const BusinessServicesPage = lazy(() => import('../business/pages/BusinessServicesPage').then(m => ({ default: m.BusinessServicesPage })));
const BusinessPricingPage = lazy(() => import('../business/pages/BusinessPricingPage').then(m => ({ default: m.BusinessPricingPage })));
const BusinessBlogsPage = lazy(() => import('../business/pages/BusinessBlogsPage').then(m => ({ default: m.BusinessBlogsPage })));
const BusinessFaqPage = lazy(() => import('../business/pages/BusinessFaqPage').then(m => ({ default: m.BusinessFaqPage })));
const BusinessAboutPage = lazy(() => import('../business/pages/BusinessAboutPage').then(m => ({ default: m.BusinessAboutPage })));
const BusinessTeamPage = lazy(() => import('../business/pages/BusinessTeamPage').then(m => ({ default: m.BusinessTeamPage })));
const AllBusinessProjectsPage = lazy(() => import('../business/pages/AllBusinessProjectsPage').then(m => ({ default: m.AllBusinessProjectsPage })));



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
    <>
            <ScrollToTop />
      <div className="min-h-screen bg-page-bg text-page-fg theme-transition overflow-x-hidden w-full flex flex-col">
        {!location.pathname.startsWith('/sign-') && <Navbar />}

        <main className="flex-grow">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<BusinessPage />} />
              <Route path="/business" element={<BusinessPage />} />
              <Route path="/business-services" element={<BusinessServicesPage />} />
              <Route path="/business-pricing" element={<BusinessPricingPage />} />
              <Route path="/business-blogs" element={<BusinessBlogsPage />} />
               <Route path="/business-faq" element={<BusinessFaqPage />} />
              <Route path="/business-team" element={<BusinessTeamPage />} />
              <Route path="/business-about" element={<BusinessAboutPage />} />
              <Route path="/all-business-projects" element={<AllBusinessProjectsPage />} />
                                          
                            
              
                                          
              <Route path="*" element={<BusinessPage />} />
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