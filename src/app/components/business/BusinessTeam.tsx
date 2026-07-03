import { Users } from 'lucide-react';

export function BusinessTeam() {
  return (
    <section id="team" className="py-32 px-4 max-w-7xl mx-auto bg-page-bg">
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <div className="w-16 h-1 bg-[var(--primary-maroon)] dark:bg-[var(--primary-gold)] mx-auto mb-8 rounded-full" />
        <h2 className="text-sm font-black text-[var(--primary-maroon)] dark:text-[var(--primary-gold)] uppercase tracking-[0.2em] mb-4">The Minds Behind It</h2>
        <h3 className="text-4xl md:text-5xl font-black text-heading mb-6 tracking-tight">Meet the Team</h3>
        <p className="text-xl text-text-secondary leading-relaxed">
          Engineers, AI researchers, and product thinkers obsessed with building systems that scale.
        </p>
      </div>
      
      {/* Placeholder for team members */}
      <div className="bg-surface border-2 border-dashed border-border rounded-[2rem] p-16 flex flex-col items-center justify-center text-center min-h-[300px]">
        <div className="w-20 h-20 bg-page-bg rounded-full flex items-center justify-center mb-6 text-text-muted shadow-sm">
          <Users className="w-10 h-10" />
        </div>
        <h4 className="text-2xl font-bold text-heading mb-4">Team Profiles Updating</h4>
        <p className="text-text-secondary max-w-md mx-auto text-lg">
          We are in the process of updating our team directory. Check back soon to meet the experts behind Scaro Technologies.
        </p>
      </div>
    </section>
  );
}
