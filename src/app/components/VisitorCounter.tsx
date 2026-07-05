import { useEffect, useState, memo } from 'react';
import { Users } from 'lucide-react';
import { motion } from 'motion/react';

export const VisitorCounter = memo(function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

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
          {count.toLocaleString()}
        </span>
      </div>
    </motion.div>
  );
});
