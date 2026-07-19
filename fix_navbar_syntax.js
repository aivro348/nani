const fs = require('fs');
const path = require('path');

const projects = ['frontend-main', 'frontend-scaro-academy', 'frontend-ai-academy', 'frontend-business'];

projects.forEach(project => {
  const navbarPath = path.join(project, 'src', 'main', 'components', 'Navbar.tsx');
  if (fs.existsSync(navbarPath)) {
    let navbar = fs.readFileSync(navbarPath, 'utf8');
    
    // Replace everything between GetStartedModal and export function Navbar() {
    // We know the leftover starts right after GetStartedModal
    const regex = /(const GetStartedModal.*?;\n)[\s\S]*?(export function Navbar\(\) \{)/;
    navbar = navbar.replace(regex, '$1\n$2');
    
    fs.writeFileSync(navbarPath, navbar);
    console.log(`Fixed Navbar in ${project}`);
  }
});
