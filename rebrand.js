const fs = require('fs');

const files = ['index.html', 'collection.html', 'product.html', 'about.html', 'cart.html', 'products.json'];

const replacements = [
  // Brand name
  [/NIKE AIR JORDAN/g, 'APEX RUNNERS'],
  [/>NIKE</g, '>APEX<'],
  [/"NIKE"/g, '"APEX"'],
  [/Nike, Inc\. All Rights Reserved/g, 'Apex Runners. All Rights Reserved'],
  [/© 2024 Nike/g, '© 2024 Apex Runners'],
  [/Nike AIR JORDAN/g, 'Apex Runners'],
  // Product names - Air Jordan → Apex
  [/Air Jordan/g, 'Apex Runner'],
  [/AIR JORDAN/g, 'APEX RUNNER'],
  // Slogans
  [/Just Do It\./g, 'Run Your World.'],
  [/Elevating performance and culture since 1984\./g, 'Elevating performance and culture since 2010.'],
  // Footer / meta
  [/NIKE AIR JORDAN | /g, 'APEX RUNNERS | '],
  [/NIKE AIR JORDAN/g, 'APEX RUNNERS'],
];

files.forEach(f => {
  if (!fs.existsSync(f)) return;
  let content = fs.readFileSync(f, 'utf8');
  replacements.forEach(([from, to]) => {
    content = content.replace(from, to);
  });
  fs.writeFileSync(f, content);
  console.log('✓ Rebranded:', f);
});

console.log('\nAll done! Brand is now "APEX RUNNERS".');
