import { memo } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { CATEGORIES, courses } from '../data/coursesData';

export const CoursesSection = memo(function CoursesSection({ previewOnly }: { previewOnly?: boolean }) {
  const navigate = useNavigate();
  let activeCategories = CATEGORIES.filter(c => c.id !== 'all' && courses.some(course => course.category === c.id));

  if (previewOnly) {
    activeCategories = activeCategories.slice(0, 1);
  }

  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {activeCategories.map((category) => {
          const categoryCourses = courses.filter(c => c.category === category.id);
          const displayCourses = previewOnly ? categoryCourses.slice(0, 3) : categoryCourses;
          
          return (
            <div key={category.id} className="space-y-12">
              <div className="flex justify-center">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="bg-[#ff3b00] text-white px-10 py-3 rounded-xl text-2xl md:text-3xl font-bold shadow-lg text-center"
                >
                  {category.label} Programs
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayCourses.map((course, idx) => (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white rounded-[1.5rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col h-full hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
                  >
                    <h3 className="text-[1.35rem] font-black text-[#ff3b00] mb-6 tracking-tight leading-tight">
                      {course.title}
                    </h3>
                    
                    <ul className="space-y-4 mb-10 flex-1">
                      {course.skills.map((skill, i) => (
                        <li key={i} className="flex items-start gap-3 text-[#4a4a4a] text-[15px] font-medium leading-snug">
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 shrink-0" />
                          {skill}
                        </li>
                      ))}
                    </ul>

                    <button 
                      onClick={() => navigate(`/courses/${course.slug}`)}
                      className="bg-[var(--primary-maroon)] hover:bg-[#ff3b00] text-white px-7 py-3 rounded-xl font-bold text-sm transition-all w-fit shadow-md hover:shadow-xl hover:-translate-y-0.5 active:scale-95"
                    >
                      Curriculum
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          );
        })}

        {previewOnly && (
          <div className="flex justify-center pt-8">
            <button 
              onClick={() => navigate('/all-courses')}
              className="bg-[var(--primary-maroon)] hover:bg-[#ff3b00] text-white px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 active:scale-95"
            >
              See All Programs
            </button>
          </div>
        )}
      </div>
    </div>
  );
});