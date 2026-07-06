import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { 
  Laptop,
  Cpu, 
  Zap, 
  Cog, 
  Building, 
  BarChart 
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
      </div>
    </section>
  );
}
