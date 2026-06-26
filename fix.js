const fs = require('fs');

const svgSearch = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>';
const svgHeart = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>';
const svgCart = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>';

const files = ['index.html', 'collection.html', 'product.html', 'about.html', 'cart.html'];

files.forEach(f => {
  let c = fs.readFileSync(f, 'utf8');
  // Fix the literal ${ output from write_to_file escaping
  c = c.replace(/\\\${/g, '${');
  // Replace the emojis with crisp SVGs
  c = c.replace(/🔍/g, svgSearch);
  c = c.replace(/♡/g, svgHeart);
  c = c.replace(/🛒/g, svgCart);
  fs.writeFileSync(f, c);
});
