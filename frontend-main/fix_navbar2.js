const fs = require('fs');
let content = fs.readFileSync('src/main/components/Navbar.tsx', 'utf8');

// Remove useLms import
content = content.replace(/import \{ useLms \} from '\.\.\/\.\.\/student-portal\/lms\/context\/LmsContext';\n?/, '');

// Remove const { user } = useLms();
content = content.replace(/const \{ user \} = useLms\(\);\n?/, '');

fs.writeFileSync('src/main/components/Navbar.tsx', content);
console.log('Fixed Navbar 2');
