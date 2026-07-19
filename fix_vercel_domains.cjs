const fs = require('fs');
const path = require('path');

const replacements = [
  {
    file: 'frontend-scaro-academy/public/sitemap.xml',
    find: 'academy.scarotechnologies.vercel.app',
    replace: 'academyscarotechnologies.vercel.app'
  },
  {
    file: 'frontend-scaro-academy/public/robots.txt',
    find: 'academy.scarotechnologies.vercel.app',
    replace: 'academyscarotechnologies.vercel.app'
  },
  {
    file: 'frontend-ai-academy/public/sitemap.xml',
    find: 'ai.scarotechnologies.vercel.app',
    replace: 'aiscarotechnologies.vercel.app'
  },
  {
    file: 'frontend-ai-academy/public/robots.txt',
    find: 'ai.scarotechnologies.vercel.app',
    replace: 'aiscarotechnologies.vercel.app'
  },
  {
    file: 'frontend-business/public/sitemap.xml',
    find: 'business.scarotechnologies.vercel.app',
    replace: 'businessscarotechnologies.vercel.app'
  },
  {
    file: 'frontend-business/public/robots.txt',
    find: 'business.scarotechnologies.vercel.app',
    replace: 'businessscarotechnologies.vercel.app'
  }
];

replacements.forEach(({ file, find, replace }) => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(new RegExp(find, 'g'), replace);
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${file}`);
  }
});
