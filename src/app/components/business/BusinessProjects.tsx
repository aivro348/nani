import { ExternalLink, Sparkles } from 'lucide-react';

export function BusinessProjects() {
  return (
    <section id="projects" className="py-32 px-4 bg-surface border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="w-16 h-1 bg-[var(--primary-maroon)] dark:bg-[var(--primary-gold)] mb-8 rounded-full" />
            <h2 className="text-sm font-black text-[var(--primary-maroon)] dark:text-[var(--primary-gold)] uppercase tracking-[0.2em] mb-4">Our Projects</h2>
            <h3 className="text-4xl md:text-5xl font-black text-heading mb-6 tracking-tight">Featured Work</h3>
            <p className="text-xl text-text-secondary leading-relaxed">
              A selection of enterprise platforms we've shipped — from AI-powered SaaS to real-time analytics dashboards.
            </p>
          </div>
          <button className="flex items-center gap-2 text-[var(--primary-maroon)] dark:text-[var(--primary-gold)] font-bold hover:underline whitespace-nowrap text-lg uppercase tracking-wider">
            View All Projects <ExternalLink className="w-5 h-5" />
          </button>
        </div>

        {/* Placeholder for future projects */}
        <div className="bg-page-bg border-2 border-dashed border-border rounded-[2rem] p-16 flex flex-col items-center justify-center text-center min-h-[400px]">
          <div className="w-20 h-20 bg-surface rounded-2xl flex items-center justify-center mb-6 text-text-muted shadow-sm">
            <Sparkles className="w-10 h-10" />
          </div>
          <h4 className="text-2xl font-bold text-heading mb-4">New Projects Coming Soon</h4>
          <p className="text-text-secondary max-w-md mx-auto text-lg">
            We are currently updating our portfolio with our latest enterprise deliverables. Check back shortly to see what we've been building.
          </p>
        </div>
      </div>
    </section>
  );
}
