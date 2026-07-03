export function BusinessCTA() {
  return (
    <section className="py-32 px-4 bg-gradient-to-br from-[var(--primary-maroon)] to-red-900 text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-100/[0.05] bg-[bottom_1px_center]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/20 rounded-full blur-[100px] mix-blend-screen animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--primary-gold)]/20 rounded-full blur-[100px] mix-blend-screen" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-sm font-black text-red-200 uppercase tracking-[0.2em] mb-6">Available for New Projects</h2>
        <h3 className="text-5xl md:text-7xl font-black mb-10 leading-[1.1] tracking-tighter drop-shadow-sm">
          Ready to Build<br/>Something Extraordinary?
        </h3>
        <p className="text-xl md:text-2xl text-red-100/90 mb-14 max-w-2xl mx-auto font-medium leading-relaxed">
          From web apps to AI-native SaaS — tell us your vision and we'll engineer the future together.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6">
          <button className="px-10 py-5 bg-white text-[var(--primary-maroon)] font-black rounded-2xl hover:bg-gray-100 hover:scale-105 transition-all shadow-xl text-lg uppercase tracking-wider">
            Start a Project
          </button>
          <button className="px-10 py-5 bg-transparent border-2 border-white/30 text-white font-bold rounded-2xl hover:bg-white/10 hover:border-white/50 transition-all text-lg uppercase tracking-wider backdrop-blur-sm">
            See Our Work
          </button>
        </div>
      </div>
    </section>
  );
}
