document.addEventListener('DOMContentLoaded', () => {
  // Particles Generation
  const particlesContainer = document.getElementById('particles-container');
  if (particlesContainer) {
    for (let i = 0; i < 8; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      const size = Math.random() * 6 + 4; // 4px to 10px
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      particle.style.left = `${Math.random() * 100}vw`;
      particle.style.top = `${Math.random() * 100}vh`;
      
      particle.style.animationDelay = `${Math.random() * 5}s`;
      particle.style.animationDuration = `${Math.random() * 10 + 15}s`; // 15s to 25s
      
      particlesContainer.appendChild(particle);
    }
  }

  // Navbar Scroll Behavior
  let lastScroll = 0;
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
      navbar.classList.remove('hidden');
      return;
    }
    
    if (currentScroll > lastScroll && !navbar.classList.contains('hidden')) {
      // Scroll down
      navbar.classList.add('hidden');
    } else if (currentScroll < lastScroll && navbar.classList.contains('hidden')) {
      // Scroll up
      navbar.classList.remove('hidden');
    }
    
    lastScroll = currentScroll;
  });

  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileDrawer = document.querySelector('.mobile-drawer');
  
  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileDrawer.classList.toggle('open');
      mobileMenuBtn.innerHTML = mobileDrawer.classList.contains('open') ? '✕' : '☰';
    });
  }

  // Active Link Highlighting
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    }
  });

  // Page Transitions
  const links = document.querySelectorAll('a:not([target="_blank"]):not([href^="#"])');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      // If it's the same page or javascript action, ignore
      if (!href || href === '#' || href.startsWith('javascript:')) return;
      
      e.preventDefault();
      document.body.classList.add('fade-out');
      
      setTimeout(() => {
        window.location.href = href;
      }, 300); // Wait 300ms for fade out animation
    });
  });
});

// Global Function to Fetch Products
async function fetchProducts() {
  try {
    const response = await fetch('products.json');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}
