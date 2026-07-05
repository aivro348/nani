import { useParams, Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, Clock, Code2, CheckCircle2, ShoppingCart, IndianRupee } from 'lucide-react';
import { PROJECT_STORE } from '../data/projectsData';

export function ProjectDetailsPage() {
  const { projectId } = useParams();
  const project = PROJECT_STORE.find(p => p.id === Number(projectId));

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-black text-slate-800 mb-4">Project Not Found</h1>
        <Link to="/courses" className="text-[var(--primary-maroon)] font-bold hover:underline">
          Return to Courses
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <Link 
          to="/courses" 
          className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-800 font-medium mb-8 group transition-colors"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Projects Store
        </Link>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-slate-100"
        >
          {/* Header Image */}
          <div className="relative h-64 sm:h-80 w-full bg-slate-900">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider">
                  {project.branch}
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-400/30 text-emerald-300 text-xs font-black uppercase tracking-wider">
                  {project.type} Project
                </span>
                {project.isFree && (
                  <span className="px-3 py-1 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600 text-white text-xs font-black uppercase tracking-wider shadow-lg">
                    Free
                  </span>
                )}
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
                {project.title}
              </h1>
            </div>
          </div>

          {/* Content Body */}
          <div className="p-8 sm:p-10">
            
            {/* Delivery & Tech Stack */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-2 text-slate-400 font-bold uppercase tracking-wider text-xs mb-3">
                  <Clock className="w-4 h-4" />
                  Estimated Delivery Time
                </div>
                <div className="text-xl font-black text-slate-800">
                  {project.deliveryDays} Days
                </div>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-2 text-slate-400 font-bold uppercase tracking-wider text-xs mb-3">
                  <Code2 className="w-4 h-4" />
                  Technology Stack
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 bg-white border border-slate-200 text-slate-700 font-medium text-sm rounded-lg shadow-sm">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Abstract Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Project Abstract</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {project.abstract}
              </p>
            </div>

            {/* Features (if any) */}
            {project.features && project.features.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl font-black text-slate-900 mb-4">Key Features Included</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                      <span className="text-slate-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* CTA */}
            <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-slate-500 font-medium mb-1">Interested in this project?</p>
                <div className="flex items-center gap-1">
                  {project.isFree ? (
                    <span className="text-3xl font-black text-emerald-500">Free</span>
                  ) : (
                    <>
                      <IndianRupee className="w-6 h-6 text-slate-400" />
                      <span className="text-3xl font-black text-slate-900">{project.price.toLocaleString('en-IN')}</span>
                    </>
                  )}
                </div>
              </div>
              
              <a
                href={`https://wa.me/919949167458?text=Hi! I want to get the details for the project: "${project.title}" (${project.type} Project, ${project.branch}) - ${project.isFree ? 'Free' : '₹' + project.price.toLocaleString('en-IN')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 hover:bg-[var(--primary-maroon)] text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 active:scale-95 text-lg"
              >
                <ShoppingCart className="w-5 h-5" />
                {project.isFree ? 'Claim Free Project' : 'Enquire Now'}
              </a>
            </div>
            
          </div>
        </motion.div>
      </div>
    </div>
  );
}
