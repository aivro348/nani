import { motion, AnimatePresence } from 'motion/react';
import { Code, Cpu, Zap, Cog, ChevronRight, Sparkles } from 'lucide-react';
import { useState } from 'react';

export function ProjectIdeasSection() {
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null);

  const departments = [
    {
      id: 'cse',
      name: 'Computer Science',
      shortName: 'CSE',
      icon: Code,
      color: 'from-[#5C141D] to-[#80202B]',
      description: 'Full-stack, AI/ML, Cloud & Mobile Development',
    },
    {
      id: 'ece',
      name: 'Electronics & Communication',
      shortName: 'ECE',
      icon: Cpu,
      color: 'from-[#D4AF37] to-[#B89628]',
      description: 'IoT, Embedded Systems, VLSI & Signal Processing',
    },
    {
      id: 'eee',
      name: 'Electrical & Electronics',
      shortName: 'EEE',
      icon: Zap,
      color: 'from-[#5C141D] to-[#80202B]',
      description: 'Power Systems, Automation & Renewable Energy',
    },
    {
      id: 'mec',
      name: 'Mechanical Engineering',
      shortName: 'MEC',
      icon: Cog,
      color: 'from-[#D4AF37] to-[#B89628]',
      description: 'CAD/CAM, Robotics, Thermal & Manufacturing',
    },
  ];

  const projectIdeas = {
    cse: [
      { title: 'AI-Powered Chatbot with NLP', difficulty: 'Advanced', duration: '4 weeks' },
      { title: 'E-Commerce Platform with Payment Gateway', difficulty: 'Intermediate', duration: '6 weeks' },
      { title: 'Real-Time Face Recognition System', difficulty: 'Advanced', duration: '5 weeks' },
      { title: 'Social Media Analytics Dashboard', difficulty: 'Intermediate', duration: '4 weeks' },
      { title: 'Cloud-Based File Storage System', difficulty: 'Advanced', duration: '6 weeks' },
      { title: 'Machine Learning Price Predictor', difficulty: 'Advanced', duration: '5 weeks' },
      { title: 'Mobile App with React Native', difficulty: 'Intermediate', duration: '5 weeks' },
      { title: 'Blockchain-Based Voting System', difficulty: 'Advanced', duration: '7 weeks' },
      { title: 'AI Image Caption Generator', difficulty: 'Advanced', duration: '6 weeks' },
      { title: 'Restaurant Management System', difficulty: 'Beginner', duration: '3 weeks' },
    ],
    ece: [
      { title: 'IoT-Based Smart Home Automation', difficulty: 'Intermediate', duration: '5 weeks' },
      { title: 'RFID-Based Attendance System', difficulty: 'Beginner', duration: '3 weeks' },
      { title: 'Wireless Power Transfer System', difficulty: 'Advanced', duration: '6 weeks' },
      { title: 'Arduino-Based Weather Station', difficulty: 'Beginner', duration: '2 weeks' },
      { title: 'Gesture-Controlled Robot', difficulty: 'Intermediate', duration: '4 weeks' },
      { title: 'VLSI Design of ALU using Verilog', difficulty: 'Advanced', duration: '5 weeks' },
      { title: 'Voice-Controlled Home Automation', difficulty: 'Intermediate', duration: '4 weeks' },
      { title: 'Bluetooth-Based Smart Lock System', difficulty: 'Intermediate', duration: '3 weeks' },
      { title: 'Solar Tracking System with LDR', difficulty: 'Intermediate', duration: '4 weeks' },
      { title: 'Fire Alarm System using IoT', difficulty: 'Beginner', duration: '2 weeks' },
    ],
    eee: [
      { title: 'Solar Power Generation System', difficulty: 'Intermediate', duration: '5 weeks' },
      { title: 'Automatic Power Factor Correction', difficulty: 'Advanced', duration: '6 weeks' },
      { title: 'MATLAB-Based Load Flow Analysis', difficulty: 'Advanced', duration: '5 weeks' },
      { title: 'Wind Turbine Power Generation', difficulty: 'Intermediate', duration: '4 weeks' },
      { title: 'Electric Vehicle Charging Station', difficulty: 'Advanced', duration: '7 weeks' },
      { title: 'Smart Grid with IoT Integration', difficulty: 'Advanced', duration: '8 weeks' },
      { title: 'Transformer Health Monitoring', difficulty: 'Advanced', duration: '6 weeks' },
      { title: 'SCADA System for Power Distribution', difficulty: 'Advanced', duration: '7 weeks' },
      { title: 'Three-Phase Induction Motor Control', difficulty: 'Intermediate', duration: '4 weeks' },
      { title: 'Battery Management System (BMS)', difficulty: 'Advanced', duration: '6 weeks' },
    ],
    mec: [
      { title: 'CNC Machine Design in SolidWorks', difficulty: 'Advanced', duration: '6 weeks' },
      { title: 'Robotic Arm with Pick and Place', difficulty: 'Advanced', duration: '7 weeks' },
      { title: 'Solar Water Heater System', difficulty: 'Intermediate', duration: '4 weeks' },
      { title: 'Hydraulic Press Machine Design', difficulty: 'Intermediate', duration: '5 weeks' },
      { title: 'Automatic Car Parking System', difficulty: 'Advanced', duration: '6 weeks' },
      { title: 'Hovercraft Model Design', difficulty: 'Intermediate', duration: '4 weeks' },
      { title: 'Wind Turbine Blade Design in ANSYS', difficulty: 'Advanced', duration: '6 weeks' },
      { title: 'Pneumatic Scissor Lift Mechanism', difficulty: 'Intermediate', duration: '4 weeks' },
      { title: 'Heat Exchanger Design & Analysis', difficulty: 'Advanced', duration: '5 weeks' },
      { title: 'Automatic Gear Transmission System', difficulty: 'Advanced', duration: '6 weeks' },
      { title: 'AI-Based Predictive Maintenance System', difficulty: 'Advanced', duration: '8 weeks' },
      { title: 'Electric Vehicle Chassis Design & Simulation', difficulty: 'Advanced', duration: '7 weeks' },
      { title: 'Smart Industrial Conveyor Belt with IoT', difficulty: 'Intermediate', duration: '5 weeks' },
      { title: 'Automatic Solar Panel Cleaning Robot', difficulty: 'Intermediate', duration: '4 weeks' },
      { title: 'CFD Analysis of Formula Student Race Car', difficulty: 'Advanced', duration: '6 weeks' },
    ],
  };

  return (
    <div className="py-20 bg-white border-b border-[rgba(92,20,29,0.06)] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#5C141D]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--primary-gold)]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-[#5C141D]/10 border border-[#5C141D]/20 text-[#5C141D] rounded-full text-sm mb-4 flex items-center gap-2 mx-auto w-max font-bold tracking-wider uppercase">
            <Sparkles className="w-4 h-4" />
            Project Library
          </div>
          <h2 className="text-4xl sm:text-5xl text-[#1E060A] mb-4 font-black tracking-tight">
            100+ Industry-Ready Project Ideas
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
            Choose from our curated collection of real-world projects across all engineering branches.
            Build your portfolio with hands-on experience.
          </p>
        </motion.div>

        {/* Department cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 items-start">
          {departments.map((dept, index) => {
            const isSelected = selectedDepartment === dept.id;
            
            return (
              <motion.div
                key={dept.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative text-left w-full"
              >
                {/* The card itself */}
                <button aria-label="Action button"
                  onClick={() => setSelectedDepartment(dept.id)}
                  className="w-full text-left bg-[#FAF8F5] border border-[rgba(92,20,29,0.06)] rounded-2xl p-6 transition-all hover:border-[#5C141D]/30 hover:shadow-xl hover:shadow-[#5C141D]/10"
                >
                  <div className="flex flex-col">
                    <div>
                      {/* Icon */}
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${dept.color} mb-4 shadow-lg`}
                      >
                        <dept.icon className="w-7 h-7 text-white" />
                      </motion.div>
                      {/* Content */}
                      <h3 className="text-xl text-[#1E060A] mb-2 font-bold">{dept.name}</h3>
                      <p className="text-xs text-slate-500 mb-3">{dept.shortName}</p>
                      <p className="text-sm text-slate-600 mb-4 font-light leading-relaxed">{dept.description}</p>
                    </div>
                    {/* Project count & expand icon */}
                    <div className="flex items-center justify-between w-full">
                      <span className="text-sm text-[#5C141D] font-bold">
                        {projectIdeas[dept.id as keyof typeof projectIdeas].length} Projects
                      </span>
                      <div className="flex items-center gap-2 text-xs text-[#D4AF37] font-bold group-hover:gap-3 transition-all">
                        View All <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* ════════ FULL SCREEN MODAL (The "New Page on Top") ════════ */}
        <AnimatePresence>
          {selectedDepartment && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl overflow-y-auto"
            >
              <div className="min-h-screen p-4 sm:p-10">
                {/* Modal Header */}
                <div className="max-w-7xl mx-auto flex items-center justify-between mb-12">
                  {(() => {
                    const dept = departments.find(d => d.id === selectedDepartment)!;
                    return (
                      <>
                        <div className="flex items-center gap-6">
                          <div className={`p-4 rounded-2xl bg-gradient-to-br ${dept.color} shadow-2xl shadow-[#5C141D]/20`}>
                            <dept.icon className="w-10 h-10 text-white" />
                          </div>
                          <div>
                            <h2 className="text-3xl sm:text-5xl font-black text-white mb-2">
                              {dept.name} <span className="text-white/40">Projects</span>
                            </h2>
                            <p className="text-lg text-slate-300 font-light">{dept.description}</p>
                          </div>
                        </div>
                        <button aria-label="Action button" 
                          onClick={() => setSelectedDepartment(null)}
                          className="p-4 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 text-white transition-all hover:rotate-90"
                        >
                          <X className="w-8 h-8" />
                        </button>
                      </>
                    );
                  })()}
                </div>

                {/* Projects Grid in Modal */}
                <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projectIdeas[selectedDepartment as keyof typeof projectIdeas].map((project, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      whileHover={{ y: -8 }}
                      className="bg-[#1a1a1a]/80 backdrop-blur-md border border-white/10 rounded-3xl p-8 group hover:border-[#D4AF37]/50 transition-all shadow-2xl"
                    >
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-[#D4AF37] font-bold text-xl group-hover:bg-[#D4AF37] group-hover:text-black transition-all">
                          {idx + 1}
                        </div>
                        <div className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border ${
                          project.difficulty === 'Advanced' ? 'bg-red-500/10 text-red-400 border-red-500/30' : 
                          project.difficulty === 'Intermediate' ? 'bg-amber-500/10 text-amber-400 border-amber-500/30' : 
                          'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                        }`}>
                          {project.difficulty}
                        </div>
                      </div>
                      
                      <h4 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-[#D4AF37] transition-colors">
                        {project.title}
                      </h4>
                      
                      <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                        <div className="flex items-center gap-2 text-slate-400 text-sm font-medium">
                          <Clock className="w-4 h-4" /> {project.duration}
                        </div>
                        <button aria-label="Action button" className="flex items-center gap-2 text-[#D4AF37] text-sm font-bold group-hover:gap-3 transition-all">
                          Get Specs <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom CTA */}
        {!selectedDepartment && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-slate-500 mb-4 font-light">
              Select any department above to explore our premium project specs
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

const X = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const Clock = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
