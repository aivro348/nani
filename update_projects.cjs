const fs = require('fs');

const path = 'src/education/data/projectsData.ts';
let content = fs.readFileSync(path, 'utf8');

// Add degree to Project interface
content = content.replace(
  'export interface Project {\n  id: number;',
  'export interface Project {\n  id: number;\n  degree: string;'
);

// We will use regex to find each project and inject `degree: 'B.Tech',` or `'M.Tech'`
content = content.replace(/(\s*price: \d+,)/g, (match) => {
  const priceMatch = match.match(/price: (\d+)/);
  const price = priceMatch ? parseInt(priceMatch[1], 10) : 0;
  const degree = price >= 10000 ? 'M.Tech' : 'B.Tech';
  return `${match}\n    degree: '${degree}',`;
});

// Now let's add some MBA projects at the end of the array.
// Find the last occurrence of "];" using a regex
const mbaProjects = `
  // ── MBA ──
  { 
    id: 47, 
    title: 'HR Employee Attrition Analysis',        
    branch: 'MBA', 
    type: 'Main', 
    degree: 'MBA',
    tech: ['Excel', 'Tableau', 'PowerBI'],                 
    price: 6000,
    abstract: 'A comprehensive data analysis project exploring factors driving employee turnover and recommending retention strategies.',
    deliveryDays: 10,
    image: 'https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=800&auto=format&fit=crop',
    isFree: true,
    features: ['Tableau Dashboard', 'Statistical Analysis', 'Action Plan Report']
  },
  { 
    id: 48, 
    title: 'Supply Chain Optimization Model',        
    branch: 'MBA', 
    type: 'Main', 
    degree: 'MBA',
    tech: ['Python', 'Excel Solver', 'Logistics'],                 
    price: 8500,
    abstract: 'Optimizing distribution networks to minimize transportation costs while meeting customer demand across multiple regions.',
    deliveryDays: 12,
    image: 'https://images.unsplash.com/photo-1586528116311-ad8ed7c50800?q=80&w=800&auto=format&fit=crop',
    isFree: false 
  },
  { 
    id: 49, 
    title: 'Financial Portfolio Risk Assessment',    
    branch: 'MBA', 
    type: 'Main', 
    degree: 'MBA',
    tech: ['R', 'Financial Modeling', 'Monte Carlo'],                 
    price: 9000,
    abstract: 'A quantitative finance project simulating market volatility to assess the Value at Risk (VaR) for investment portfolios.',
    deliveryDays: 14,
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=800&auto=format&fit=crop',
    isFree: false 
  }
];`;

content = content.replace(/\n\];/g, '\n' + mbaProjects);

fs.writeFileSync(path, content, 'utf8');
console.log('Done!');
