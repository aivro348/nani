import { memo, useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { 
  Code, Brain, Cpu, Zap, Wrench, Building2,
  IndianRupee, Search, Filter, ShoppingCart,
  Star, Clock, Users, ChevronDown, X, Layers, Gift, FileText, Calendar, ArrowRight
} from 'lucide-react';
import { PROJECT_STORE, Project } from '../data/projectsData';
import { Link } from 'react-router';

/* ─────────────────────── branch config ─────────────────────── */
const BRANCH_META: Record<string, { gradient: string; icon: React.ElementType; label: string }> = {
  'CSE':        { gradient: 'from-[#5C141D] to-[#8B1E2B]',   icon: Code,      label: 'Computer Science & IT' },
  'AI/DS':      { gradient: 'from-[#D4AF37] to-[#B89628]',   icon: Brain,     label: 'AI & Data Science' },
  'ECE':        { gradient: 'from-[#5C141D] to-[#3a0a10]',   icon: Cpu,       label: 'Electronics & Communication' },
  'EEE':        { gradient: 'from-[#B89628] to-[#997B1E]',  icon: Zap,       label: 'Electrical Engineering' },
  'Mechanical': { gradient: 'from-[#5C141D] to-[#B89628]',  icon: Wrench,    label: 'Mechanical Engineering' },
  'Civil':      { gradient: 'from-[#8B1E2B] to-[#5C141D]',   icon: Building2, label: 'Civil Engineering' },
};

const BRANCHES = ['All', 'CSE', 'AI/DS', 'ECE', 'EEE', 'Mechanical', 'Civil', 'MBA'];
const TYPES = ['All Types', 'Mini', 'Main'];
const DEGREES = ['All Degrees', 'B.Tech', 'M.Tech', 'MBA'];

export const ProjectsStoreSection = memo(function ProjectsStoreSection({ previewOnly }: { previewOnly?: boolean }) {
  const [branch, setBranch] = useState('All');
  const [type, setType] = useState('All Types');
  const [degree, setDegree] = useState('All Degrees');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    return PROJECT_STORE.filter(p => {
      const q = search.toLowerCase();
      const matchBranch = branch === 'All' || p.branch === branch;
      const matchType = type === 'All Types' || p.type === type;
      const matchDegree = degree === 'All Degrees' || p.degree === degree;
      const matchQ = !q || p.title.toLowerCase().includes(q) || p.tech.some(t => t.toLowerCase().includes(q));
      return matchBranch && matchType && matchDegree && matchQ;
    });
  }, [branch, type, degree, search]);

  let miniProjects = filtered.filter(p => p.type === 'Mini');
  let mainProjects = filtered.filter(p => p.type === 'Main');

  if (previewOnly) {
    miniProjects = miniProjects.slice(0, 4);
    mainProjects = mainProjects.slice(0, 4);
  }

  return (
    <div id="projects-store" className="pb-16 pt-24 sm:pt-28 px-4 bg-[#FAF8F5] scroll-mt-24">
      <div className="max-w-7xl mx-auto">

        {/* Ultra-Condensed Header */}
        <div className="text-center max-w-xl mx-auto mb-6 space-y-2">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#5C141D]/10 text-[#5C141D] rounded-full text-[11px] font-black tracking-widest uppercase border border-[#5C141D]/20"
          >
            <Layers className="w-3.5 h-3.5" />
            Project Store
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-black text-[#1E060A] tracking-tight"
          >
            Ready-Made <span className="text-[#5C141D]">Engineering Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed max-w-md mx-auto"
          >
            Built Mini & Main projects with full source code, documentation & deployment guides.
          </motion.p>
        </div>

        {/* Ultra-Compact Stats Bar */}
        {!previewOnly && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 mb-6 max-w-3xl mx-auto">
            {[
              { value: `${PROJECT_STORE.length}+`, label: 'Total Projects', sub: '6 branches' },
              { value: `${PROJECT_STORE.filter(p => p.type === 'Mini').length}`, label: 'Mini Projects', sub: 'Quick & affordable' },
              { value: `${PROJECT_STORE.filter(p => p.type === 'Main').length}`, label: 'Main Projects', sub: 'Full solutions' },
              { value: '₹800', label: 'Starting From', sub: 'Budget pricing' },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="bg-white rounded-xl p-2.5 text-center border border-[rgba(92,20,29,0.08)] shadow-sm hover:border-[#5C141D]/30 transition-all"
              >
                <div className="text-lg font-black text-[#5C141D] leading-none mb-1">{s.value}</div>
                <div className="text-[11px] font-bold text-[#1E060A]">{s.label}</div>
                <div className="text-[9px] text-slate-500 font-medium">{s.sub}</div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Compact Filters Section */}
        {!previewOnly && (
          <div className="space-y-3 mb-6">
            {/* Search Input */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search by project name or tech..."
                className="w-full pl-9 pr-8 py-2 bg-white border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#5C141D] text-xs transition-all shadow-sm"
              />
              {search && (
                <button aria-label="Action button" onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2">
                  <X className="w-3.5 h-3.5 text-slate-400 hover:text-slate-700 transition-colors" />
                </button>
              )}
            </div>

            {/* Branch Tabs */}
            <div className="flex flex-wrap justify-center gap-1.5">
              {BRANCHES.map(b => {
                const meta = BRANCH_META[b];
                const Icon = meta?.icon;
                const count = b === 'All' ? PROJECT_STORE.length : PROJECT_STORE.filter(p => p.branch === b).length;
                return (
                  <button aria-label="Action button"
                    key={b}
                    onClick={() => setBranch(b)}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                      branch === b
                        ? 'bg-[#5C141D] text-white shadow-sm'
                        : 'bg-white text-slate-700 border border-slate-200 hover:border-[#5C141D]/40'
                    }`}
                  >
                    {Icon && <Icon className="w-3 h-3" />}
                    {b === 'All' ? 'All Branches' : b}
                    <span className={`text-[9px] px-1 py-0.2 rounded-full ${branch === b ? 'bg-white/20' : 'bg-slate-100'}`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Degree and Type Filters */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 text-[11px]">
              <div className="flex items-center gap-1">
                <Filter className="w-3 h-3 text-slate-400" />
                {DEGREES.map(d => (
                  <button aria-label="Action button"
                    key={d}
                    onClick={() => setDegree(d)}
                    className={`px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                      degree === d
                        ? 'bg-[#1E060A] text-white shadow-sm'
                        : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-400'
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>

              <div className="hidden sm:block w-px h-4 bg-slate-200" />

              <div className="flex items-center gap-1">
                {TYPES.map(t => (
                  <button aria-label="Action button"
                    key={t}
                    onClick={() => setType(t)}
                    className={`px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                      type === t
                        ? 'bg-[#1E060A] text-white shadow-sm'
                        : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-400'
                    }`}
                  >
                    {t === 'All Types' ? 'All Types' : `${t} Projects`}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Filtered Count */}
        {!previewOnly && (
          <div className="text-[11px] text-slate-500 mb-5 text-center font-medium">
            Showing <span className="font-bold text-[#1E060A]">{filtered.length}</span> projects
            {branch !== 'All' && <> in <span className="font-bold text-[#5C141D]">{branch}</span></>}
            {degree !== 'All Degrees' && <> for <span className="font-bold">{degree}</span></>}
            {type !== 'All Types' && <> — <span className="font-bold">{type} Projects</span></>}
          </div>
        )}

        {/* Mini Projects Grid */}
        {miniProjects.length > 0 && (
          <div className="mb-10">
            <div className="flex justify-center mb-4">
              <div className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[var(--primary-gold)] text-black rounded-lg text-xs font-black shadow-sm">
                <Star className="w-3.5 h-3.5 fill-black" />
                Mini Projects ({miniProjects.length})
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {miniProjects.map((project, idx) => (
                <ProjectCard key={project.id} project={project} idx={idx} />
              ))}
            </div>
          </div>
        )}

        {/* Main Projects Grid */}
        {mainProjects.length > 0 && (
          <div>
            <div className="flex justify-center mb-4">
              <div className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#5C141D] text-white rounded-lg text-xs font-black shadow-sm">
                <Layers className="w-3.5 h-3.5" />
                Main Projects ({mainProjects.length})
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {mainProjects.map((project, idx) => (
                <ProjectCard key={project.id} project={project} idx={idx} />
              ))}
            </div>
          </div>
        )}

        {filtered.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg font-bold text-slate-400 mb-1">No projects match your search</p>
            <p className="text-xs text-slate-500">Try adjusting your filters or search query.</p>
          </div>
        )}

        {previewOnly && (
          <div className="flex justify-center mt-8">
            <a 
              href="/all-projects"
              className="bg-[#5C141D] hover:bg-[#470f15] text-white px-6 py-2.5 rounded-xl font-bold text-xs transition-all shadow-md hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              <Layers className="w-3.5 h-3.5" />
              See All Projects
            </a>
          </div>
        )}

      </div>
    </div>
  );
});

/* ─────────────────────── Ultra-Compact Project Card ─────────────────────── */
function ProjectCard({ project, idx }: { project: Project; idx: number }) {
  const meta = BRANCH_META[project.branch] ?? BRANCH_META['CSE'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (idx % 6) * 0.04 }}
      className="bg-white rounded-xl overflow-hidden group border border-[rgba(92,20,29,0.08)] hover:border-[#5C141D]/30 shadow-sm hover:shadow-md transition-all flex flex-col h-full relative"
    >
      {/* Image Container */}
      <div className="relative h-36 w-full shrink-0 overflow-hidden bg-slate-900">
        <img loading="lazy" decoding="async" src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
        
        {/* Top Accent line inside the image */}
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${meta.gradient}`} />

        {/* Floating Pill Badges */}
        <div className="absolute top-2.5 right-2.5 z-10 flex items-center gap-1.5">
          <span className="bg-black/70 backdrop-blur-md border border-white/20 text-white text-[9px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
            {project.branch} • {project.type}
          </span>
          {project.isFree && (
            <span className="bg-[#D4AF37] text-black text-[9px] font-black px-2 py-0.5 rounded-full shadow flex items-center gap-1 uppercase tracking-wider">
              <Gift className="w-2.5 h-2.5" /> Free
            </span>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-grow p-4 z-10 space-y-2.5">
        <h3 className="text-base font-extrabold text-[#1E060A] leading-snug group-hover:text-[#5C141D] transition-colors line-clamp-2">
          {project.title}
        </h3>

        {/* Meta Info */}
        <div className="flex items-center justify-between text-[11px] font-medium text-slate-500">
          <span className="text-[#5C141D] font-bold">500+ Downloads</span>
          <span>Delivery: {project.deliveryDays} Days</span>
        </div>

        <div className="flex flex-wrap gap-1">
          {project.tech.map((t, i) => (
            <span key={i} className="text-[9px] font-bold text-slate-600 bg-[#FAF8F5] border border-slate-200/80 px-1.5 py-0.2 rounded">
              {t}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-slate-500 text-[11px] leading-relaxed line-clamp-2 font-light">
          {project.abstract}
        </p>

        {/* CTA Section */}
        <div className="mt-auto flex justify-between items-center pt-3 border-t border-slate-100">
          {!project.isFree ? (
            <div className="flex items-center gap-0.5 text-[#1E060A]">
              <IndianRupee className="w-3.5 h-3.5 text-[#5C141D]" />
              <span className="text-lg font-black">{project.price.toLocaleString('en-IN')}</span>
            </div>
          ) : (
            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">Free Project</span>
          )}

          {project.isFree ? (
            <Link
              to={`/projects/${project.id}`}
              className="ml-auto inline-flex items-center gap-1.5 bg-[#5C141D] hover:bg-[#470f15] text-white rounded-lg px-3 py-1.5 text-[11px] font-bold transition-all shadow-sm cursor-pointer"
            >
              <span>View Details</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          ) : (
            <a
              href={`https://wa.me/919949167458?text=Hi! I'm interested in the project: "${project.title}" (${project.type} Project, ${project.branch}) - ₹${project.price.toLocaleString('en-IN')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto inline-flex items-center gap-1.5 bg-gradient-to-r from-[var(--primary-gold)] to-[#B89628] text-black hover:opacity-90 rounded-lg px-3 py-1.5 text-[11px] font-black transition-all shadow-sm cursor-pointer uppercase tracking-wider"
            >
              <span>Get Project</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}


