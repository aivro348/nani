const fs = require('fs');

const businessNavPath = 'frontend-business/src/main/components/Navbar.tsx';
const academyNavPath = 'frontend-scaro-academy/src/main/components/Navbar.tsx';

const businessNav = fs.readFileSync(businessNavPath, 'utf8');
let academyNav = fs.readFileSync(academyNavPath, 'utf8');

// Find the return statement block in businessNav
const returnIndex = businessNav.indexOf('  return (');
const businessReturn = businessNav.slice(returnIndex);

// Replace variables to match Scaro Academy context
let adaptedReturn = businessReturn.replace(/isBusinessSection/g, 'false').replace(/isEducationSection/g, 'true').replace(/isAISection/g, 'false');
// Note: actually we can just use the variables that we will inject, or hardcode true/false.
// The business code has:
//   const isBusinessSection = true;
//   const isEducationSection = false;
//   const isAISection = false;
// But if we just replace the whole block from "const isEducationSection" down to the end...

const splitPoint = academyNav.indexOf('  const isEducationSection = ');
let academyTop = academyNav.slice(0, splitPoint);

let newAcademyNav = academyTop + `  const isEducationSection = true;\n  const isBusinessSection = false;\n  const isAISection = false;\n\n` + businessReturn;

fs.writeFileSync(academyNavPath, newAcademyNav);
console.log('Navbar updated successfully!');
