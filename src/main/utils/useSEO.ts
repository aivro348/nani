import { useEffect } from 'react';

export function useSEO(title: string, description: string, jsonLd?: object) {
  useEffect(() => {
    document.title = title;
    
    // Helper function to update or create meta tags
    const updateMeta = (selector: string, attribute: string, content: string, createIfMissing = true) => {
      let element = document.querySelector(selector);
      if (element) {
        element.setAttribute(attribute, content);
      } else if (createIfMissing) {
        element = document.createElement(selector.startsWith('meta') ? 'meta' : 'link');
        const isLink = selector.startsWith('link');
        if (isLink) {
          element.setAttribute('rel', 'canonical');
        } else {
          // Parse property/name from selector (e.g. meta[property="og:title"])
          const match = selector.match(/\[(name|property)="([^"]+)"\]/);
          if (match) {
            element.setAttribute(match[1], match[2]);
          }
        }
        element.setAttribute(attribute, content);
        document.head.appendChild(element);
      }
    };

    updateMeta('meta[name="description"]', 'content', description);
    
    // Open Graph
    updateMeta('meta[property="og:title"]', 'content', title);
    updateMeta('meta[property="og:description"]', 'content', description);
    updateMeta('meta[property="og:url"]', 'content', window.location.href);

    // Twitter
    updateMeta('meta[name="twitter:title"]', 'content', title);
    updateMeta('meta[name="twitter:description"]', 'content', description);
    updateMeta('meta[name="twitter:url"]', 'content', window.location.href);

    // Canonical
    updateMeta('link[rel="canonical"]', 'href', window.location.href.split('?')[0]);

    // Handle JSON-LD Structured Data
    if (jsonLd) {
      let script = document.querySelector('script[type="application/ld+json"]');
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(jsonLd);
    } else {
      // Clean up if the current page doesn't provide structured data
      const script = document.querySelector('script[type="application/ld+json"]');
      if (script) {
        script.remove();
      }
    }

  }, [title, description, jsonLd]);
}
