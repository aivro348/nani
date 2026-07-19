import { motion } from 'motion/react';
import googleLogo from '@/shared/assets/companies/google.webp';
import microsoftLogo from '@/shared/assets/companies/microsoft.webp';
import amazonLogo from '@/shared/assets/companies/amazon.webp';
import tcsLogo from '@/shared/assets/companies/tcs.webp';
import wiproLogo from '@/shared/assets/companies/wipro.webp';
import deloitteLogo from '@/shared/assets/companies/deloitte.webp';
import ibmLogo from '@/shared/assets/companies/ibm.webp';
import cognizantLogo from '@/shared/assets/companies/cognizant.webp';
import techmahindraLogo from '@/shared/assets/companies/techmahindra.webp';
import hclLogo from '@/shared/assets/companies/hcl.webp';
import cursorLogo from '@/shared/assets/companies/cursorai.webp';

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
    <div className="py-12 bg-[#0A0506] relative overflow-hidden theme-transition">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-cyan-500/5 to-blue-600/5" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      </div>

      {/* Full-width scrolling marquee */}
      <div className="relative w-full">
        {/* Edges Gradient for Smooth Disappearance */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-[#0A0506] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 z-10 bg-gradient-to-l from-[#0A0506] to-transparent pointer-events-none" />

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
