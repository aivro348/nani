import fs from 'fs';
import path from 'path';

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;
  
  content = content.replace(/Scaro Technologies/g, 'Scaro Technologie');
  content = content.replace(/Skilldzire/gi, 'Scaro Technologie');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${filePath}`);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (!['node_modules', '.git', 'dist'].includes(file)) {
        walkDir(fullPath);
      }
    } else {
      if (/\.(tsx|ts|js|jsx|json|md|html)$/.test(file)) {
        replaceInFile(fullPath);
      }
    }
  }
}

walkDir('./frontend');
walkDir('./backend');
