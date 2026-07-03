const fs = require('fs');
const path = require('path');

const folders = ['login', 'education', 'projects', 'ai', 'certificate'];
const baseDir = path.join(__dirname, 'src');

function fixImports(dir, depth) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            fixImports(fullPath, depth + 1);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            
            // If in a top-level domain folder (like src/education/pages/Page.tsx -> depth 2)
            // depth 2 means we are in `pages` or `components`
            if (depth === 2) {
                // Fix sibling imports that were moved. 
                // e.g. CoursesSection still imports './EnrollmentModal' -> leave it.
                // But it imports './ui/button' -> change to '../../app/components/ui/button'
                content = content.replace(/from '\.\/ui\//g, "from '../../app/components/ui/");
                
                // Fix parent imports that point to app
                // e.g. '../utils/useSEO' -> '../../app/utils/useSEO'
                // Wait, I already ran sed for some of these. Let's make it robust.
                content = content.replace(/from '\.\.\/utils\//g, "from '../../app/utils/");
                
                // If it imports from '../components/' and it's NOT resolving to its own components folder...
                // Wait, this is tricky. Let's just fix the known ones.
                // We know EnrollmentModal needs './ui/dialog' -> '../../app/components/ui/dialog'
            }
            fs.writeFileSync(fullPath, content);
        }
    }
}

for (const folder of folders) {
    const p = path.join(baseDir, folder);
    if (fs.existsSync(p)) {
        fixImports(p, 1);
    }
}
console.log("Done");
