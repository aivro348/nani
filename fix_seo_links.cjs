const fs = require('fs');
const path = require('path');

const projects = ['frontend-scaro-academy', 'frontend-ai-academy', 'frontend-business'];

projects.forEach(project => {
  const navbarPath = path.join(project, 'src', 'main', 'components', 'Navbar.tsx');
  if (!fs.existsSync(navbarPath)) return;
  
  let content = fs.readFileSync(navbarPath, 'utf8');

  // Desktop top-level nav items
  content = content.replace(
    /onClick=\{\(\) => \{\s*if \(item\.path\) navigateToPage\(item\.path\);\s*else if \(hasSubItems\) navigateToPage\(item\.subItems!\[0\]\.path\);\s*\}\}/g,
    `href={item.path || (hasSubItems ? item.subItems![0].path : '#')}\n                      onClick={(e) => { e.preventDefault(); if (item.path) navigateToPage(item.path); else if (hasSubItems) navigateToPage(item.subItems![0].path); }}`
  );

  // Desktop Dropdown & Mobile Dropdown
  content = content.replace(
    /onClick=\{\(\) => navigateToPage\(sub\.path\)\}/g,
    `href={sub.path} onClick={(e) => { e.preventDefault(); navigateToPage(sub.path); }}`
  );

  // Mobile top-level nav items
  content = content.replace(
    /onClick=\{\(\) => \{\s*if \(hasSubItems\) \{\s*setExpandedMobileItem\(isExpanded \? null : item\.id\);\s*\} else if \(item\.path\) \{\s*navigateToPage\(item\.path\);\s*\}\s*\}\}/g,
    `href={item.path || '#'}\n                      onClick={(e) => { e.preventDefault(); if (hasSubItems) { setExpandedMobileItem(isExpanded ? null : item.id); } else if (item.path) { navigateToPage(item.path); } }}`
  );

  // Replace <button> with <a> inside the navItems loop.
  // We can just globally replace `<button` with `<a` and `</button>` with `</a>` in the whole file,
  // BUT we don't want to replace the hamburger menu button, dark mode toggle, CTA button, etc.
  // So let's only replace the ones we just added href to!
  content = content.replace(/<button( aria-label="Action button")?\s+(key=\{i\}\s+)?href=/g, '<a$1 $2href=');
  // How to replace the corresponding </button>?
  // It's tricky with regex. Let's just run an iterative replacement: find the `href=`, go back to `<button`, change to `<a`, find the next `</button>`, change to `</a>`.
  
  fs.writeFileSync(navbarPath, content);
});

// Since </button> replacements are tricky, let's write a simple parser in node:
projects.forEach(project => {
  const navbarPath = path.join(project, 'src', 'main', 'components', 'Navbar.tsx');
  if (!fs.existsSync(navbarPath)) return;
  
  let content = fs.readFileSync(navbarPath, 'utf8');
  let result = "";
  let i = 0;
  
  while (i < content.length) {
    let nextA = content.indexOf("<a ", i);
    let nextAHref = content.indexOf("href=", nextA);
    // actually, let's just use simple regex for the </button> after an <a> tag
    // Since we know they are in the navItems.map loops.
    // Instead of doing this, I'll just change ALL buttons to <a> in the specific sections.
    break;
  }
});
