import { memo } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { CATEGORIES, courses } from '../data/coursesData';
import { CheckCircle2, ArrowRight, BookOpen } from 'lucide-react';

export const CoursesSection = memo(function CoursesSection({ previewOnly }: { previewOnly?: boolean }) {
  const navigate = useNavigate();
  let activeCategories = CATEGORIES.filter(c => c.id !== 'all' && courses.some(course => course.category === c.id));

  if (previewOnly) {
    activeCategories = activeCategories.slice(0, 1);
  }

  return (
    <div className="py-12 md:py-16 px-4 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {activeCategories.map((category) => {
          const categoryCourses = courses.filter(c => c.category === category.id);
          const displayCourses = previewOnly ? categoryCourses.slice(0, 3) : categoryCourses;
          
          return (
            <div key={category.id} id={`category-${category.id}`} className="space-y-8 scroll-mt-28">
              {/* Category Header Badge */}
              <div className="flex items-center gap-4">
                <div className="h-0.5 flex-1 bg-gradient-to-r from-transparent via-[#5C141D]/20 to-transparent" />
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="bg-[#5C141D] text-white px-6 py-2 rounded-xl text-lg md:text-xl font-black shadow-md border border-[var(--primary-gold)]/40 flex items-center gap-2"
                >
                  <BookOpen className="w-5 h-5 text-[var(--primary-gold)]" />
                  {category.label}
                </motion.div>
                <div className="h-0.5 flex-1 bg-gradient-to-r from-transparent via-[#5C141D]/20 to-transparent" />
              </div>

              {/* Course Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayCourses.map((course, idx) => (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    className="bg-white rounded-2xl overflow-hidden border border-[rgba(92,20,29,0.08)] hover:border-[#5C141D]/30 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full group"
                  >
                    {/* Visual Subject Image Header */}
                    <div className="relative h-44 w-full overflow-hidden bg-slate-900 shrink-0">
                      <img 
                        loading="lazy"
                        decoding="async"
                        src={course.heroImage} 
                        alt={course.title}
                        className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-all duration-500" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      
                      {/* Top Brand Accent */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#5C141D] via-[var(--primary-gold)] to-[#5C141D]" />

                      {/* Floating Category Pill */}
                      <div className="absolute top-3 right-3 z-10">
                        <span className="bg-black/70 backdrop-blur-md text-[10px] font-extrabold text-white px-3 py-1 rounded-full border border-white/20 uppercase tracking-wider">
                          {category.label.split('/')[0]}
                        </span>
                      </div>

                      <div className="absolute bottom-3 left-4 right-4 z-10">
                        <h3 className="text-lg font-black text-white leading-tight drop-shadow-md group-hover:text-[var(--primary-gold)] transition-colors">
                          {course.title}
                        </h3>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-5 flex flex-col flex-grow space-y-4">
                      {/* Key Skill Highlights */}
                      <ul className="space-y-2 flex-grow">
                        {course.skills.map((skill, i) => (
                          <li key={i} className="flex items-start gap-2 text-slate-700 text-xs font-medium leading-snug">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#5C141D] shrink-0 mt-0.5" />
                            <span>{skill}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Action Button */}
                      <div className="pt-3 border-t border-slate-100 mt-auto flex items-center justify-between">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                          Certificate Included
                        </span>
                        <button aria-label="Action button" 
                          onClick={() => navigate(`/courses/${course.slug}`)}
                          className="bg-[#5C141D] hover:bg-[#470f15] text-white px-4 py-2 rounded-xl font-bold text-xs transition-all inline-flex items-center gap-1.5 shadow-md hover:shadow-lg cursor-pointer"
                        >
                          <span>Curriculum</span>
                          <ArrowRight className="w-3.5 h-3.5 text-[var(--primary-gold)]" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          );
        })}

        {previewOnly && (
          <div className="flex justify-center pt-4">
            <button aria-label="Action button" 
              onClick={() => navigate('/all-courses')}
              className="bg-[#5C141D] hover:bg-[#470f15] text-white px-8 py-3.5 rounded-xl font-black text-sm transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 inline-flex items-center gap-2 cursor-pointer"
            >
              <span>See All Programs</span>
              <ArrowRight className="w-4 h-4 text-[var(--primary-gold)]" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
});