import { motion } from 'motion/react';
import googleLogo from '@/assets/companies/google.png';
import microsoftLogo from '@/assets/companies/microsoft.png';
import amazonLogo from '@/assets/companies/amazon.png';
import tcsLogo from '@/assets/companies/tcs.png';
import wiproLogo from '@/assets/companies/wipro.png';
import deloitteLogo from '@/assets/companies/deloitte.png';
import ibmLogo from '@/assets/companies/ibm.png';
import cognizantLogo from '@/assets/companies/cognizant.png';
import techmahindraLogo from '@/assets/companies/techmahindra.png';
import hclLogo from '@/assets/companies/hcl.png';
import cursorLogo from '@/assets/companies/cursorai.png';

const companies = [
  { name: 'Google', logo: googleLogo },
  { name: 'Microsoft', logo: microsoftLogo },
  { name: 'Amazon', logo: amazonLogo },
  { name: 'TCS', logo: tcsLogo },
  { name: 'Wipro', logo: wiproLogo },
  { name: 'Deloitte', logo: deloitteLogo },
  { name: 'IBM', logo: ibmLogo },
  { name: 'Cognizant', logo: cognizantLogo },
  { name: 'Tech Mahindra', logo: techmahindraLogo },
  { name: 'HCL', logo: hclLogo },
  { name: 'Cursor', logo: cursorLogo },
];

export function CompaniesSection() {

  return (
    <div className="py-12 bg-surface/50 relative overflow-hidden theme-transition">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-cyan-500/5 to-blue-600/5" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <p className="text-text-muted text-base font-medium mb-6">Our students got placed at</p>
        </motion.div>
      </div>

      {/* Full-width scrolling marquee */}
      <div className="relative w-full overflow-hidden">
        {/* Gradient overlays for smooth fading at edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 z-10 bg-gradient-to-r from-page-bg via-page-bg/80 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 z-10 bg-gradient-to-l from-page-bg via-page-bg/80 to-transparent pointer-events-none" />

        <motion.div
          animate={{
            x: [0, -1500],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-4 sm:gap-8 items-center w-max"
        >
          {[...companies, ...companies, ...companies, ...companies].map((company, index) => (
            <div
              key={index}
              className="flex-shrink-0 group py-4 px-4 sm:px-6"
            >
              <div className="flex items-center justify-center transition-all theme-transition group-hover:scale-110 opacity-60 hover:opacity-100 grayscale hover:grayscale-0">
                <img 
                  src={company.logo} 
                  alt={company.name} 
                  loading="lazy"
                  decoding="async"
                  className="h-8 sm:h-12 w-auto object-contain transition-all"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
