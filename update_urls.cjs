const fs = require('fs');
const path = require('path');

const files = [
  'frontend-scaro-academy/public/sitemap.xml',
  'frontend-scaro-academy/public/robots.txt',
  'frontend-ai-academy/public/sitemap.xml',
  'frontend-ai-academy/public/robots.txt',
  'frontend-business/public/sitemap.xml',
  'frontend-business/public/robots.txt'
];

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    // Replace academy.scarotechnologies.com with academy.scarotechnologies.vercel.app
    // Since vercel.app subdomains usually look like `project-name.vercel.app`,
    // If the user said "scarotechnologies.com replace to scarotechnologies.vercel.app",
    // We should replace `.scarotechnologies.com` with `.scarotechnologies.vercel.app`
    content = content.replace(/scarotechnologies\.com/g, 'scarotechnologies.vercel.app');
    fs.writeFileSync(filePath, content);
    console.log('Updated', file);
  }
});
