const fs = require('fs');
const path = require('path');

const projects = ['frontend-scaro-academy', 'frontend-ai-academy', 'frontend-business'];

projects.forEach(project => {
  const navbarPath = path.join(project, 'src', 'main', 'components', 'Navbar.tsx');
  if (!fs.existsSync(navbarPath)) return;
  
  let content = fs.readFileSync(navbarPath, 'utf8');

  // We need to replace </button> with </a> ONLY where we replaced the opening tag.
  // Because our opening tags all have `href=`, we can match the block of code starting with `<a ` and ending with `</button>` that does not contain another `<a `.
  // Let's use a simpler approach:
  // In `navItems.map`, the structure is very predictable.
  // We can just replace </button> with </a> for the specific closing tags.
  // E.g., `</button>\n\n                    {/* Dropdown Menu */}`
  content = content.replace(/<\/button>\n\n\s*\{\/\* Dropdown Menu \*\/\}/g, '</a>\n\n                    {/* Dropdown Menu */}');
  
  // E.g., `</button>\n                          \)\)}`
  content = content.replace(/<\/button>\n(\s*)\)\)}/g, '</a>\n$1))}');
  
  // For mobile menu:
  // `</button>\n                    {hasSubItems && isExpanded && \(`
  content = content.replace(/<\/button>\n\s*\{hasSubItems && isExpanded && \(/g, '</a>\n                    {hasSubItems && isExpanded && (');
  
  fs.writeFileSync(navbarPath, content);
  console.log('Fixed', project);
});
