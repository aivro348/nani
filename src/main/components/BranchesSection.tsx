import { memo } from 'react';
import { motion } from 'motion/react';
import { BookOpen, Briefcase, Wrench, Award, Laptop, Zap, Cpu, Cog, Building, BarChart, CheckCircle2 } from 'lucide-react';

const partners = [
  'APSCHE'
];

const features = [
  {
    title: 'Industry-Aligned Skills',
    desc: 'Access to job-ready training in EVs, Solar, Drones, and Core Engineering',
    icon: Wrench
  },
  {
    title: 'Recognized Programs',
    desc: 'AICTE & SWAYAM Plus approved courses ensuring quality education',
    icon: Award
  },
  {
    title: 'NEP 2020 Integration',
    desc: 'Credit-based programs aligned with latest education policies',
    icon: CheckCircle2
  },
  {
    title: 'Career Success',
    desc: 'Enhanced placement rates through internships and industry projects',
    icon: Briefcase
  },
  {
    title: 'Faculty Growth',
    desc: 'Advanced teaching tools and technical upskilling opportunities',
    icon: BookOpen
  },
  {
    title: 'Infrastructure',
    desc: 'Setup modern skill labs and centers of excellence',
    icon: Building
  },
  {
    title: 'Global Network',
    desc: 'Access to IIT partnerships and international opportunities',
    icon: BarChart
  },
  {
    title: 'Structured Internships',
    desc: 'Virtual/hybrid programs with certifications and project mentoring',
    icon: Laptop
  }
];

const branches = [
  {
    title: 'Computer Science',
    subtitle: 'Computer & IT Skills Programs',
    icon: Laptop,
    programs: ['Full Stack Development', 'Python Programming', 'Artificial Intelligence', 'Machine Learning', 'Cyber Security', 'Data Science', 'Cloud Computing']
  },
  {
    title: 'Electronics',
    subtitle: 'Electronics & Digital Systems Programs',
    icon: Cpu,
    programs: ['Embedded Systems', 'PCB Design', 'VLSI Design', 'IoT Applications']
  },
  {
    title: 'Electrical',
    subtitle: 'Electrical & Renewable Energy Programs',
    icon: Zap,
    programs: ['Electric Vehicle Design', 'AutoCAD (EEE)', 'Industrial Automation', 'Substation Design', 'Solar PV Plant Design']
  },
  {
    title: 'Mechanical',
    subtitle: 'Mechanical & Design Technology Programs',
    icon: Cog,
    programs: ['Electric Vehicle', 'Product Design (Mech)', 'Drone Technology', '3D Printing & Design', 'AutoCAD (Mechanical)', 'Solid Works']
  },
  {
    title: 'Civil',
    subtitle: 'Civil & Infrastructure Skill Courses',
    icon: Building,
    programs: ['Building Planning (AutoCAD)', 'Structural Design (STAAD Pro)', 'REVIT Architecture', 'Green Building & Sustainable Construction', 'Quantity Surveying & Cost Estimation']
  },
  {
    title: 'Management',
    subtitle: 'Degree & Pharmacy Skill Development Programs',
    icon: BarChart,
    programs: ['Digital Marketing', 'HR Management', 'Business Analytics', 'Clinical Research', 'Medical Terminology', 'Artificial Intelligence', 'Data Science']
  }
];

export const BranchesSection = memo(function BranchesSection() {
  return (
    <div className="bg-[#fafcfc] min-h-screen pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* Partners Section */}
        <section className="text-center space-y-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
              Partnering with top institutions to deliver <span className="text-[var(--primary-maroon)]">future-ready</span> education.
            </h1>
            <p className="text-lg text-slate-600 font-medium">
              We collaborate with premier universities and educational bodies to bring skill-based, industry-aligned learning to students.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8 pt-6">
            {partners.map((partner, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white px-8 py-4 rounded-xl shadow-sm border border-slate-200 text-slate-800 font-bold text-lg hover:shadow-md hover:-translate-y-1 transition-all"
              >
                {partner}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Why Connect Section */}
        <section>
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">Why Connect with Scaro Academy?</h2>
            <div className="h-1 flex-1 bg-slate-200 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-[var(--primary-maroon)]/10 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-[var(--primary-maroon)]" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Offered Programs Section */}
        <section>
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">Offered Programs & Courses</h2>
            <div className="h-1 flex-1 bg-slate-200 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {branches.map((branch, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-[1.5rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col h-full hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none transform group-hover:scale-110">
                  <branch.icon className="w-32 h-32 text-[var(--primary-maroon)]" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center shrink-0">
                      <branch.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-slate-900">{branch.title}</h3>
                      <p className="text-sm font-bold text-[var(--primary-maroon)]">{branch.subtitle}</p>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {branch.programs.map((program, pidx) => (
                      <li key={pidx} className="flex items-start gap-3 text-slate-700 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 shrink-0" />
                        {program}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
});
