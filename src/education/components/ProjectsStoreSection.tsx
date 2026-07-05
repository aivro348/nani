import { memo, useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { 
  Code, Brain, Cpu, Zap, Wrench, Building2,
  IndianRupee, Search, Filter, ShoppingCart,
  Star, Clock, Users, ChevronDown, X, Layers, Gift, FileText, Calendar
} from 'lucide-react';
import { PROJECT_STORE, Project } from '../data/projectsData';
import { Link } from 'react-router';

/* ─────────────────────── branch config ─────────────────────── */
const BRANCH_META: Record<string, { gradient: string; icon: React.ElementType; label: string }> = {
  'CSE':        { gradient: 'from-blue-600 to-indigo-600',   icon: Code,      label: 'Computer Science & IT' },
  'AI/DS':      { gradient: 'from-teal-500 to-cyan-600',     icon: Brain,     label: 'AI & Data Science' },
  'ECE':        { gradient: 'from-violet-600 to-purple-600', icon: Cpu,       label: 'Electronics & Communication' },
  'EEE':        { gradient: 'from-amber-600 to-orange-600',  icon: Zap,       label: 'Electrical Engineering' },
  'Mechanical': { gradient: 'from-emerald-600 to-teal-600',  icon: Wrench,    label: 'Mechanical Engineering' },
  'Civil':      { gradient: 'from-rose-600 to-pink-600',     icon: Building2, label: 'Civil Engineering' },
};



const BRANCHES = ['All', 'CSE', 'AI/DS', 'ECE', 'EEE', 'Mechanical', 'Civil'];
const TYPES = ['All Types', 'Mini', 'Main'];

export const ProjectsStoreSection = memo(function ProjectsStoreSection({ previewOnly }: { previewOnly?: boolean }) {
  const [branch, setBranch] = useState('All');
  const [type, setType] = useState('All Types');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    return PROJECT_STORE.filter(p => {
      const q = search.toLowerCase();
      const matchBranch = branch === 'All' || p.branch === branch;
      const matchType = type === 'All Types' || p.type === type;
      const matchQ = !q || p.title.toLowerCase().includes(q) || p.tech.some(t => t.toLowerCase().includes(q));
      return matchBranch && matchType && matchQ;
    });
  }, [branch, type, search]);

  let miniProjects = filtered.filter(p => p.type === 'Mini');
  let mainProjects = filtered.filter(p => p.type === 'Main');

  if (previewOnly) {
    miniProjects = miniProjects.slice(0, 4);
    mainProjects = mainProjects.slice(0, 4);
  }

  return (
    <div id="projects-store" className="py-24 px-4 bg-slate-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--primary-maroon)]/10 text-[var(--primary-maroon)] rounded-full text-sm font-bold tracking-wide uppercase mb-6 border border-[var(--primary-maroon)]/20"
          >
            <Layers className="w-4 h-4" />
            Project Store
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6"
          >
            Ready-Made <span className="text-[var(--primary-maroon)]">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            Get professionally built Mini & Main projects across all engineering branches. Each project includes complete source code, documentation, and deployment instructions.
          </motion.p>
        </div>

        {/* Stats Strip */}
        {!previewOnly && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">

          {[
            { value: `${PROJECT_STORE.length}+`, label: 'Projects', sub: 'Across 6 branches' },
            { value: `${PROJECT_STORE.filter(p => p.type === 'Mini').length}`, label: 'Mini Projects', sub: 'Quick & affordable' },
            { value: `${PROJECT_STORE.filter(p => p.type === 'Main').length}`, label: 'Main Projects', sub: 'Full-scale solutions' },
            { value: '₹800', label: 'Starting From', sub: 'Budget-friendly pricing' },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white rounded-2xl p-6 text-center border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
            >
              <div className="text-3xl font-black text-[var(--primary-maroon)] mb-1">{s.value}</div>
              <div className="text-sm font-bold text-slate-800 mb-1">{s.label}</div>
              <div className="text-xs text-slate-500">{s.sub}</div>
            </motion.div>
          ))}
        </div>
        )}

        {/* Filters */}
        {!previewOnly && (
          <div className="space-y-4 mb-12">
          {/* Search */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search by project name or technology..."
              className="w-full pl-11 pr-10 py-3 bg-white border border-slate-200 rounded-xl text-slate-700 placeholder-slate-400 focus:outline-none focus:border-[var(--primary-maroon)] text-sm transition-all shadow-sm"
            />
            {search && (
              <button onClick={() => setSearch('')} className="absolute right-4 top-1/2 -translate-y-1/2">
                <X className="w-4 h-4 text-slate-400 hover:text-slate-700 transition-colors" />
              </button>
            )}
          </div>

          {/* Branch Tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            {BRANCHES.map(b => {
              const meta = BRANCH_META[b];
              const Icon = meta?.icon;
              const count = b === 'All' ? PROJECT_STORE.length : PROJECT_STORE.filter(p => p.branch === b).length;
              return (
                <button
                  key={b}
                  onClick={() => setBranch(b)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                    branch === b
                      ? 'bg-[var(--primary-maroon)] text-white shadow-lg'
                      : 'bg-white text-slate-600 border border-slate-200 hover:border-[var(--primary-maroon)]/50'
                  }`}
                >
                  {Icon && <Icon className="w-3.5 h-3.5" />}
                  {b === 'All' ? 'All Branches' : b}
                  <span className={`text-xs px-1.5 py-0.5 rounded-full ${branch === b ? 'bg-white/20' : 'bg-slate-100'}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Type Tabs */}
          <div className="flex justify-center gap-2">
            <Filter className="w-4 h-4 text-slate-400 mt-2" />
            {TYPES.map(t => (
              <button
                key={t}
                onClick={() => setType(t)}
                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                  type === t
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-400'
                }`}
              >
                {t === 'All Types' ? 'All Types' : `${t} Projects`}
              </button>
            ))}
          </div>
        </div>
        )}

        {/* Results Count */}
        {!previewOnly && (
          <div className="text-sm text-slate-500 mb-8 text-center">
            Showing <span className="font-bold text-slate-800">{filtered.length}</span> projects
            {branch !== 'All' && <> in <span className="font-bold text-[var(--primary-maroon)]">{branch}</span></>}
            {type !== 'All Types' && <> — <span className="font-bold">{type} Projects</span></>}
          </div>
        )}

        {/* Mini Projects */}
        {miniProjects.length > 0 && (
          <div className="mb-16">
            <div className="flex justify-center mb-10">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-white rounded-xl text-xl font-bold shadow-lg">
                <Star className="w-5 h-5" />
                Mini Projects
                <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full ml-1">{miniProjects.length}</span>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {miniProjects.map((project, idx) => (
                <ProjectCard key={project.id} project={project} idx={idx} />
              ))}
            </div>
          </div>
        )}

        {/* Main Projects */}
        {mainProjects.length > 0 && (
          <div>
            <div className="flex justify-center mb-10">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--primary-maroon)] text-white rounded-xl text-xl font-bold shadow-lg">
                <Layers className="w-5 h-5" />
                Main Projects
                <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full ml-1">{mainProjects.length}</span>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {mainProjects.map((project, idx) => (
                <ProjectCard key={project.id} project={project} idx={idx} />
              ))}
            </div>
          </div>
        )}

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-2xl font-bold text-slate-400 mb-2">No projects found</p>
            <p className="text-slate-500">Try adjusting your filters or search query.</p>
          </div>
        )}

        {previewOnly && (
          <div className="flex justify-center mt-16">
            <a 
              href="/all-projects"
              className="bg-slate-900 hover:bg-slate-800 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 active:scale-95 inline-flex items-center gap-2"
            >
              <Layers className="w-5 h-5" />
              See All Projects
            </a>
          </div>
        )}

      </div>
    </div>
  );
});

/* ─────────────────────── Project Card ─────────────────────── */
function ProjectCard({ project, idx }: { project: Project; idx: number }) {
  const meta = BRANCH_META[project.branch] ?? BRANCH_META['CSE'];
  const Icon = meta.icon;
  const isMini = project.type === 'Mini';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (idx % 8) * 0.05 }}
      className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group flex flex-col"
    >
      {/* Project Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
        
        {/* Top Accent line inside the image */}
        <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${meta.gradient}`} />
        
        {/* Badges on image */}
        <div className="absolute top-4 left-4 flex gap-2">
          <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${meta.gradient} text-white flex items-center justify-center shadow-lg backdrop-blur-sm`}>
            <Icon className="w-4 h-4" />
          </div>
          {project.isFree && (
            <span className="px-3 py-1.5 rounded-lg bg-emerald-500 text-white text-xs font-black uppercase tracking-wider flex items-center gap-1 shadow-lg backdrop-blur-sm">
              <Gift className="w-3.5 h-3.5" /> Free
            </span>
          )}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        {/* Branch & Type pills */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{project.branch}</span>
          <span className={`text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full ${
            isMini 
              ? 'bg-emerald-50 text-emerald-600 border border-emerald-200' 
              : 'bg-[var(--primary-maroon)]/10 text-[var(--primary-maroon)] border border-[var(--primary-maroon)]/20'
          }`}>
            {project.type}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug group-hover:text-[var(--primary-maroon)] transition-colors line-clamp-2">
          {project.title}
        </h3>

        {/* Abstract */}
        <p className="text-sm text-slate-600 mb-4 line-clamp-2 leading-relaxed flex-1">
          {project.abstract}
        </p>

        {/* Delivery Time & Tech Stack */}
        <div className="space-y-4 mb-6">
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 bg-slate-50 w-fit px-2.5 py-1.5 rounded-lg border border-slate-100">
            <Clock className="w-3.5 h-3.5" />
            Delivery in {project.deliveryDays} Days
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.tech.slice(0, 3).map((t, i) => (
              <span key={i} className="text-xs px-2.5 py-1 bg-slate-50 text-slate-600 rounded-lg border border-slate-100 font-medium">
                {t}
              </span>
            ))}
            {project.tech.length > 3 && (
              <span className="text-xs px-2.5 py-1 bg-slate-50 text-slate-400 rounded-lg border border-slate-100 font-medium">
                +{project.tech.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
          {project.isFree ? (
            <Link
              to={`/projects/${project.id}`}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-emerald-500 text-white text-sm font-bold rounded-xl hover:bg-emerald-600 hover:shadow-lg transition-all active:scale-95"
            >
              <FileText className="w-4 h-4" />
              View Full Details
            </Link>
          ) : (
            <>
              <div className="flex items-center gap-0.5">
                <IndianRupee className="w-4 h-4 text-slate-400" />
                <span className="text-xl font-black text-slate-900">{project.price.toLocaleString('en-IN')}</span>
              </div>
              <a
                href={`https://wa.me/919949167458?text=Hi! I'm interested in the project: "${project.title}" (${project.type} Project, ${project.branch}) - ₹${project.price.toLocaleString('en-IN')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-xl hover:bg-[var(--primary-maroon)] hover:shadow-lg transition-all active:scale-95"
              >
                <ShoppingCart className="w-4 h-4" />
                Get Now
              </a>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
}
