const fs = require('fs');

const files = ['index.html', 'collection.html', 'product.html', 'about.html', 'cart.html', 'products.json'];

files.forEach(f => {
  if (!fs.existsSync(f)) return;
  let content = fs.readFileSync(f, 'utf8');
  
  // The bad regex replaced every space with "APEX RUNNERS | "
  // Reversing that: replace "APEX RUNNERS | " back with a space
  content = content.replace(/APEX RUNNERS \| /g, ' ');
  
  fs.writeFileSync(f, content);
  console.log('✓ Fixed:', f);
});

console.log('\nAll files restored!');
