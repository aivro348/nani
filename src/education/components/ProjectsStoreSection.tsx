import { memo, useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { 
  Code, Brain, Cpu, Zap, Wrench, Building2,
  IndianRupee, Search, Filter, ShoppingCart,
  Star, Clock, Users, ChevronDown, X, Layers
} from 'lucide-react';

/* ─────────────────────── branch config ─────────────────────── */
const BRANCH_META: Record<string, { gradient: string; icon: React.ElementType; label: string }> = {
  'CSE':        { gradient: 'from-blue-600 to-indigo-600',   icon: Code,      label: 'Computer Science & IT' },
  'AI/DS':      { gradient: 'from-teal-500 to-cyan-600',     icon: Brain,     label: 'AI & Data Science' },
  'ECE':        { gradient: 'from-violet-600 to-purple-600', icon: Cpu,       label: 'Electronics & Communication' },
  'EEE':        { gradient: 'from-amber-600 to-orange-600',  icon: Zap,       label: 'Electrical Engineering' },
  'Mechanical': { gradient: 'from-emerald-600 to-teal-600',  icon: Wrench,    label: 'Mechanical Engineering' },
  'Civil':      { gradient: 'from-rose-600 to-pink-600',     icon: Building2, label: 'Civil Engineering' },
};

/* ─────────────────────── project store data ─────────────────────── */
const PROJECT_STORE = [
  // ── CSE ──
  { id: 1,  title: 'Student Result Management System',     branch: 'CSE', type: 'Mini',  tech: ['PHP', 'MySQL', 'Bootstrap'],            price: 1500 },
  { id: 2,  title: 'Online Quiz Application',               branch: 'CSE', type: 'Mini',  tech: ['React', 'Firebase', 'CSS'],             price: 2000 },
  { id: 3,  title: 'Expense Tracker with Charts',           branch: 'CSE', type: 'Mini',  tech: ['JavaScript', 'Chart.js', 'HTML/CSS'],   price: 1500 },
  { id: 4,  title: 'Weather Forecasting App',               branch: 'CSE', type: 'Mini',  tech: ['React', 'OpenWeather API', 'CSS'],      price: 1000 },
  { id: 5,  title: 'Portfolio Website Builder',              branch: 'CSE', type: 'Mini',  tech: ['HTML', 'CSS', 'JavaScript'],            price: 1000 },
  { id: 6,  title: 'Library Management System',             branch: 'CSE', type: 'Mini',  tech: ['Java', 'MySQL', 'Swing'],               price: 2000 },
  { id: 7,  title: 'Full-Stack E-Commerce Platform',        branch: 'CSE', type: 'Main',  tech: ['React', 'Node.js', 'MongoDB', 'Stripe'], price: 8000 },
  { id: 8,  title: 'Hospital Management System',            branch: 'CSE', type: 'Main',  tech: ['Django', 'PostgreSQL', 'Bootstrap'],     price: 7000 },
  { id: 9,  title: 'Online Learning Management System',     branch: 'CSE', type: 'Main',  tech: ['Next.js', 'Prisma', 'Tailwind'],        price: 9000 },
  { id: 10, title: 'Real-Time Chat Application',            branch: 'CSE', type: 'Main',  tech: ['Socket.io', 'React', 'Express'],        price: 6000 },
  { id: 11, title: 'Job Portal with Resume Parser',         branch: 'CSE', type: 'Main',  tech: ['Python', 'Django', 'NLP', 'React'],     price: 8500 },
  { id: 12, title: 'Restaurant POS & Billing System',       branch: 'CSE', type: 'Main',  tech: ['Vue.js', 'Laravel', 'MySQL'],           price: 7500 },

  // ── AI/DS ──
  { id: 13, title: 'Handwritten Digit Recognition',         branch: 'AI/DS', type: 'Mini', tech: ['Python', 'TensorFlow', 'Keras'],       price: 2000 },
  { id: 14, title: 'Spam Email Classifier',                  branch: 'AI/DS', type: 'Mini', tech: ['Python', 'scikit-learn', 'NLTK'],     price: 1500 },
  { id: 15, title: 'Movie Recommendation System',            branch: 'AI/DS', type: 'Mini', tech: ['Python', 'Pandas', 'Cosine Similarity'], price: 2000 },
  { id: 16, title: 'House Price Prediction',                 branch: 'AI/DS', type: 'Mini', tech: ['Python', 'scikit-learn', 'Flask'],    price: 2000 },
  { id: 17, title: 'Customer Churn Prediction',              branch: 'AI/DS', type: 'Mini', tech: ['Python', 'XGBoost', 'Streamlit'],    price: 2500 },
  { id: 18, title: 'AI-Powered Medical Diagnosis',          branch: 'AI/DS', type: 'Main', tech: ['TensorFlow', 'OpenCV', 'Flask'],      price: 10000 },
  { id: 19, title: 'Face Recognition Attendance System',    branch: 'AI/DS', type: 'Main', tech: ['OpenCV', 'dlib', 'SQLite'],           price: 8000 },
  { id: 20, title: 'Stock Price Prediction with LSTM',      branch: 'AI/DS', type: 'Main', tech: ['TensorFlow', 'Keras', 'Plotly'],     price: 9000 },
  { id: 21, title: 'Sentiment Analysis Dashboard',          branch: 'AI/DS', type: 'Main', tech: ['NLTK', 'scikit-learn', 'Streamlit'], price: 7500 },
  { id: 22, title: 'Object Detection Security System',      branch: 'AI/DS', type: 'Main', tech: ['YOLO', 'OpenCV', 'PyTorch'],         price: 12000 },

  // ── ECE ──
  { id: 23, title: 'LED Blinking Patterns with Arduino',    branch: 'ECE', type: 'Mini',  tech: ['Arduino', 'C++', 'LEDs'],               price: 800 },
  { id: 24, title: 'Temperature & Humidity Monitor',         branch: 'ECE', type: 'Mini',  tech: ['Arduino', 'DHT11', 'LCD'],              price: 1200 },
  { id: 25, title: 'IR Remote Controlled Car',              branch: 'ECE', type: 'Mini',  tech: ['Arduino', 'IR Sensor', 'Motors'],       price: 1500 },
  { id: 26, title: 'Smart IoT Home Automation',             branch: 'ECE', type: 'Main',  tech: ['ESP32', 'MQTT', 'Firebase', 'Flutter'], price: 8000 },
  { id: 27, title: 'FPGA-based Signal Processing',          branch: 'ECE', type: 'Main',  tech: ['Verilog', 'VHDL', 'Xilinx Vivado'],    price: 10000 },
  { id: 28, title: 'Wireless Sensor Network (Agriculture)', branch: 'ECE', type: 'Main',  tech: ['Arduino', 'LoRa', 'ThingSpeak'],       price: 7000 },
  { id: 29, title: 'Smart Traffic Light Controller',        branch: 'ECE', type: 'Main',  tech: ['Arduino', 'IR Sensors', 'C++'],         price: 6000 },

  // ── EEE ──
  { id: 30, title: 'Battery Charging Indicator',             branch: 'EEE', type: 'Mini',  tech: ['Arduino', 'LEDs', 'Voltage Sensor'],    price: 1000 },
  { id: 31, title: 'Automatic Street Light Controller',      branch: 'EEE', type: 'Mini',  tech: ['LDR', 'Relay', 'Arduino'],              price: 1200 },
  { id: 32, title: 'Solar MPPT Charge Controller',          branch: 'EEE', type: 'Main',  tech: ['Arduino', 'Buck Converter', 'MPPT'],    price: 8000 },
  { id: 33, title: 'EV Charging Station Design',            branch: 'EEE', type: 'Main',  tech: ['MATLAB', 'Simulink', 'IoT'],            price: 10000 },
  { id: 34, title: 'Smart Grid Energy Management',          branch: 'EEE', type: 'Main',  tech: ['MATLAB', 'SCADA', 'Python'],            price: 12000 },
  { id: 35, title: 'Home Energy Monitoring System',         branch: 'EEE', type: 'Main',  tech: ['ESP32', 'Current Sensor', 'Blynk'],     price: 6000 },

  // ── Mechanical ──
  { id: 36, title: 'Hydraulic Jack 3D Model',               branch: 'Mechanical', type: 'Mini', tech: ['SolidWorks', 'AutoCAD'],            price: 1500 },
  { id: 37, title: 'Gear Train Analysis',                    branch: 'Mechanical', type: 'Mini', tech: ['MATLAB', 'SolidWorks'],             price: 1500 },
  { id: 38, title: 'Autonomous Mobile Robot',               branch: 'Mechanical', type: 'Main', tech: ['ROS', 'Python', 'LIDAR', 'RPi'],   price: 12000 },
  { id: 39, title: '3D Printed Robotic Arm (6-DOF)',        branch: 'Mechanical', type: 'Main', tech: ['Arduino', '3D Printing', 'Python'], price: 10000 },
  { id: 40, title: 'Quadcopter Drone Design',               branch: 'Mechanical', type: 'Main', tech: ['Flight Controller', 'PID', 'GPS'], price: 15000 },
  { id: 41, title: 'CNC Drawing Machine',                   branch: 'Mechanical', type: 'Main', tech: ['Arduino', 'GRBL', 'Stepper Motors'], price: 8000 },

  // ── Civil ──
  { id: 42, title: 'Simple Beam Analysis Calculator',        branch: 'Civil', type: 'Mini', tech: ['Python', 'Matplotlib'],                 price: 1500 },
  { id: 43, title: 'Building Floor Plan (AutoCAD)',          branch: 'Civil', type: 'Mini', tech: ['AutoCAD 2024'],                          price: 1000 },
  { id: 44, title: 'BIM-based Building Information System', branch: 'Civil', type: 'Main', tech: ['Revit', 'Navisworks', 'Dynamo'],        price: 12000 },
  { id: 45, title: 'Structural Analysis Software',          branch: 'Civil', type: 'Main', tech: ['Python', 'FEM', 'NumPy'],               price: 10000 },
  { id: 46, title: 'Earthquake Resistant Building Design',  branch: 'Civil', type: 'Main', tech: ['ETABS', 'SAP2000', 'STAAD Pro'],       price: 15000 },
];

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
function ProjectCard({ project, idx }: { project: typeof PROJECT_STORE[0]; idx: number }) {
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
      {/* Top Accent */}
      <div className={`h-1.5 bg-gradient-to-r ${meta.gradient}`} />

      <div className="p-6 flex flex-col flex-1">
        {/* Branch & Type pills */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${meta.gradient} text-white flex items-center justify-center`}>
              <Icon className="w-4 h-4" />
            </div>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{project.branch}</span>
          </div>
          <span className={`text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full ${
            isMini 
              ? 'bg-emerald-50 text-emerald-600 border border-emerald-200' 
              : 'bg-[var(--primary-maroon)]/10 text-[var(--primary-maroon)] border border-[var(--primary-maroon)]/20'
          }`}>
            {project.type}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-slate-900 mb-4 leading-snug group-hover:text-[var(--primary-maroon)] transition-colors flex-1">
          {project.title}
        </h3>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tech.map((t, i) => (
            <span key={i} className="text-xs px-2.5 py-1 bg-slate-50 text-slate-600 rounded-lg border border-slate-100 font-medium">
              {t}
            </span>
          ))}
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
          <div className="flex items-center gap-1">
            <IndianRupee className="w-5 h-5 text-[var(--primary-maroon)]" />
            <span className="text-2xl font-black text-slate-900">{project.price.toLocaleString('en-IN')}</span>
          </div>
          <a
            href={`https://wa.me/919949167458?text=Hi! I'm interested in the project: "${project.title}" (${project.type} Project, ${project.branch}) - ₹${project.price.toLocaleString('en-IN')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 bg-[var(--primary-maroon)] text-white text-sm font-bold rounded-xl hover:opacity-90 hover:shadow-lg transition-all active:scale-95"
          >
            <ShoppingCart className="w-4 h-4" />
            Enquire
          </a>
        </div>
      </div>
    </motion.div>
  );
}
