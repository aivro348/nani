const fs = require('fs');
let content = fs.readFileSync('vite.config.ts', 'utf8');

// The original port might not be set or set to 5173. Let's add server block.
if (!content.includes('server:')) {
  content = content.replace('plugins: [react()],', 'plugins: [react()],\n  server: {\n    port: 5176,\n  },');
}

fs.writeFileSync('vite.config.ts', content);
console.log('Changed port to 5176');
