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
    <div id="projects-store" className="pb-24 pt-8 md:pt-12 px-4 bg-slate-50 scroll-mt-24">
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

          {/* Degree and Type Tabs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex justify-center gap-2">
              <Filter className="w-4 h-4 text-slate-400 mt-2" />
              {DEGREES.map(d => (
                <button
                  key={d}
                  onClick={() => setDegree(d)}
                  className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                    degree === d
                      ? 'bg-slate-900 text-white shadow-md'
                      : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-400'
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>

            <div className="hidden sm:block w-px h-8 bg-slate-200" />

            <div className="flex justify-center gap-2">
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
        </div>
        )}

        {/* Results Count */}
        {!previewOnly && (
          <div className="text-sm text-slate-500 mb-8 text-center">
            Showing <span className="font-bold text-slate-800">{filtered.length}</span> projects
            {branch !== 'All' && <> in <span className="font-bold text-[var(--primary-maroon)]">{branch}</span></>}
            {degree !== 'All Degrees' && <> for <span className="font-bold">{degree}</span></>}
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (idx % 4) * 0.1 }}
      className="bg-[#041f20] rounded-[2rem] overflow-hidden group border border-[#0a383a] shadow-2xl flex flex-col h-full relative"
    >
      {/* Image Section */}
      <div className="relative h-64 w-full shrink-0">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
        />
        {/* Gradient fade into dark background */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#041f20] via-transparent to-transparent pointer-events-none" />
        
        {/* Top Accent line inside the image */}
        <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${meta.gradient}`} />
      </div>

      {/* Floating Pill (Overlapping image and content) */}
      <div className="absolute top-[14rem] right-0 z-20 flex flex-col items-end gap-2">
        <div className="bg-white text-slate-900 text-sm font-bold px-6 py-3 rounded-l-full shadow-xl">
          {project.branch} • {project.type} Project
        </div>
        {project.isFree && (
          <div className="bg-emerald-500 text-white text-sm font-bold px-6 py-2 rounded-l-full shadow-lg flex items-center gap-2">
            <Gift className="w-4 h-4" /> Free Project
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="relative flex flex-col flex-grow px-8 pb-8 pt-6 z-10">
        <h3 className="text-3xl font-black text-white mb-6 leading-tight pr-4">
          {project.title}
        </h3>

        {/* Meta Info */}
        <div className="space-y-4 mb-6">
          <div className="text-emerald-400 font-medium">
            500+ Students Downloaded
          </div>
          
          <div className="flex items-center gap-3 text-slate-200 font-medium">
            <Clock className="w-5 h-5 text-slate-400 shrink-0" />
            <span>Delivery in {project.deliveryDays} Days</span>
          </div>

          <div className="flex items-center gap-3 text-slate-200 font-medium">
            <Code className="w-5 h-5 text-slate-400 shrink-0" />
            <div className="flex flex-wrap gap-x-2">
              {project.tech.map((t, i) => (
                <span key={i}>{t}{i < project.tech.length - 1 ? ',' : ''}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-400 text-base leading-relaxed mb-8">
          {project.abstract}
        </p>

        {/* CTA Section */}
        <div className="mt-auto flex justify-between items-center pt-4 border-t border-white/5">
          {/* Price */}
          {!project.isFree && (
            <div className="flex items-center gap-1 text-white">
              <IndianRupee className="w-5 h-5 text-slate-400" />
              <span className="text-2xl font-black">{project.price.toLocaleString('en-IN')}</span>
            </div>
          )}

          {project.isFree ? (
            <Link
              to={`/projects/${project.id}`}
              className="ml-auto inline-flex items-center gap-4 bg-[#072d2e] border border-[#0d4d4f] text-white rounded-full pl-6 pr-1.5 py-1.5 hover:bg-[#0a383a] hover:border-emerald-500/50 transition-all group/btn shadow-lg"
            >
              <span className="font-bold text-sm tracking-wide">View Details</span>
              <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center group-hover/btn:scale-110 transition-transform">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </div>
            </Link>
          ) : (
            <a
              href={`https://wa.me/919949167458?text=Hi! I'm interested in the project: "${project.title}" (${project.type} Project, ${project.branch}) - ₹${project.price.toLocaleString('en-IN')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto inline-flex items-center gap-4 bg-[#072d2e] border border-[#0d4d4f] text-white rounded-full pl-6 pr-1.5 py-1.5 hover:bg-[#0a383a] hover:border-emerald-500/50 transition-all group/btn shadow-lg"
            >
              <span className="font-bold text-sm tracking-wide">Get Now</span>
              <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center group-hover/btn:scale-110 transition-transform">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </div>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

