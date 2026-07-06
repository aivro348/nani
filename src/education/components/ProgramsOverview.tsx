import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { 
  Laptop,
  Cpu, 
  Zap, 
  Cog, 
  Building, 
  BarChart,
  CalendarDays,
  Clock,
  BookOpen
} from 'lucide-react';

const programs = [
  {
    title: 'Computer Science',
    subtitle: 'Computer & IT Skills Programs',
    id: 'cse',
    icon: Laptop,
    courses: [
      'Full Stack Development',
      'Python Programming',
      'Artificial Intelligence',
      'Machine Learning',
      'Cyber Security',
      'Data Science',
      'Cloud Computing'
    ]
  },
  {
    title: 'Electronics',
    subtitle: 'Electronics & Digital Systems Programs',
    id: 'ece',
    icon: Cpu,
    courses: [
      'Embedded Systems',
      'PCB Design',
      'VLSI Design',
      'IoT Applications'
    ]
  },
  {
    title: 'Electrical',
    subtitle: 'Electrical & Renewable Energy Programs',
    id: 'eee',
    icon: Zap,
    courses: [
      'Electric Vehicle Design',
      'AutoCAD (EEE)',
      'Industrial Automation',
      'Substation Design',
      'Solar PV Plant Design'
    ]
  },
  {
    title: 'Mechanical',
    subtitle: 'Mechanical & Design Technology Programs',
    id: 'civil',
    icon: Cog,
    courses: [
      'Electric Vehicle',
      'Product Design (Mech)',
      'Drone Technology',
      '3D Printing & Design',
      'AutoCAD (Mechanical)',
      'Solid Works'
    ]
  },
  {
    title: 'Civil',
    subtitle: 'Civil & Infrastructure Skill Courses',
    id: 'civil',
    icon: Building,
    courses: [
      'Building Planning (AutoCAD)',
      'Structural Design (STAAD Pro)',
      'REVIT Architecture',
      'Green Building & Sustainable Construction',
      'Quantity Surveying & Cost Estimation'
    ]
  },
  {
    title: 'Management',
    subtitle: 'Degree & Pharmacy Skill Development Programs',
    id: 'all',
    icon: BarChart,
    courses: [
      'Digital Marketing',
      'HR Management',
      'Business Analytics',
      'Clinical Research',
      'Medical Terminology',
      'Artificial Intelligence',
      'Data Science'
    ]
  }
];

export function ProgramsOverview() {
  const navigate = useNavigate();

  return (
    <section className="bg-[#fafcfc] w-full py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">Offered Programs & Courses</h2>
            <div className="h-1 flex-1 bg-slate-200 rounded-full" />
          </div>
          <p className="text-lg text-slate-600">
            Explore our comprehensive range of industry-aligned programs designed to accelerate your career and build practical skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => navigate(`/all-courses#category-${program.id}`)}
              className="bg-white rounded-[1.5rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col h-full hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group cursor-pointer"
            >
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none transform group-hover:scale-110">
                <program.icon className="w-32 h-32 text-[var(--primary-maroon)]" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center shrink-0">
                    <program.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-900">{program.title}</h3>
                    <p className="text-sm font-bold text-[var(--primary-maroon)]">{program.subtitle}</p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {program.courses.map((course, pidx) => (
                    <li key={pidx} className="flex items-start gap-3 text-slate-700 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 shrink-0" />
                      {course}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Workshops Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 w-full relative overflow-hidden rounded-[2rem] bg-slate-900 shadow-2xl p-8 md:p-12 group flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10"
        >
          {/* Background creative elements */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[var(--primary-gold)]/20 rounded-full blur-[80px] pointer-events-none group-hover:bg-[var(--primary-gold)]/30 transition-colors duration-700" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[var(--primary-maroon)]/30 rounded-full blur-[80px] pointer-events-none group-hover:bg-[var(--primary-maroon)]/40 transition-colors duration-700" />
          
          <div className="relative z-10 md:w-2/3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-bold text-[var(--primary-gold)] uppercase tracking-wider mb-6">
              <CalendarDays className="w-4 h-4" /> Customized Training
            </div>
            <h3 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
              Interactive Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-gold)] to-white">Workshops</span>
            </h3>
            <p className="text-slate-300 text-lg max-w-2xl leading-relaxed font-medium">
              We provide highly specialized, hands-on workshops tailored to your preference. Whether it's intensive technical deep-dives or foundational skills, we offer flexible durations of <strong className="text-white">1, 2, 3, 4, or 5 days</strong> based on your subject requirements.
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap md:flex-col gap-4 w-full md:w-1/3">
             <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm flex items-center gap-4 hover:bg-white/10 transition-colors">
               <Clock className="w-8 h-8 text-[var(--primary-gold)]" />
               <div>
                 <div className="text-white font-bold text-lg">Flexible Duration</div>
                 <div className="text-slate-400 text-sm">1 to 5 Days Bootcamps</div>
               </div>
             </div>
             <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm flex items-center gap-4 hover:bg-white/10 transition-colors">
               <BookOpen className="w-8 h-8 text-[var(--primary-gold)]" />
               <div>
                 <div className="text-white font-bold text-lg">Subject Specific</div>
                 <div className="text-slate-400 text-sm">Tailored to your needs</div>
               </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
