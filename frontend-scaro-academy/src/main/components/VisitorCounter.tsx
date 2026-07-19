import { useEffect, useState, memo } from 'react';
import { Users } from 'lucide-react';
import { motion } from 'motion/react';

export const VisitorCounter = memo(function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);
  const [displayCount, setDisplayCount] = useState<number>(0);

  useEffect(() => {
    // Fetch and increment the visitor count using a free open-source API
    fetch('https://api.counterapi.dev/v1/scarotechnologies/homepage/up')
      .then(res => res.json())
      .then(data => {
        if (data && typeof data.count === 'number') {
          setCount(data.count);
        }
      })
      .catch(err => console.error('Failed to fetch visitor count:', err));
  }, []);

  useEffect(() => {
    if (count !== null) {
      const start = 0;
      const end = count;
      const duration = 1800; // 1.8 seconds animation
      const startTime = performance.now();

      const animateCount = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function: easeOutQuad
        const ease = progress * (2 - progress);
        
        const currentCount = Math.floor(ease * (end - start) + start);
        setDisplayCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(animateCount);
        } else {
          setDisplayCount(end);
        }
      };

      requestAnimationFrame(animateCount);
    }
  }, [count]);

  if (count === null) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex items-center gap-2 bg-slate-900/50 border border-slate-700 rounded-full px-4 py-1.5 backdrop-blur-sm shadow-sm"
    >
      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[var(--primary-maroon)] text-white">
        <Users className="w-3 h-3" />
      </div>
      <div className="flex flex-col">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Total Visitors</span>
        <span className="text-sm font-black text-slate-200 leading-none mt-0.5">
          {displayCount.toLocaleString()}
        </span>
      </div>
    </motion.div>
  );
});
