document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer for scroll animations
  const revealElements = document.querySelectorAll('.reveal');
  
  const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      
      entry.target.classList.add('active');
      // If we only want it to animate once:
      observer.unobserve(entry.target);
    });
  }, revealOptions);

  revealElements.forEach(el => {
    revealObserver.observe(el);
  });

  // Number Counter Animation
  const countElements = document.querySelectorAll('.count-up');
  
  const countObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      
      const target = entry.target;
      const targetValue = parseInt(target.getAttribute('data-count'), 10);
      const suffix = target.getAttribute('data-suffix') || '';
      
      let startValue = 0;
      const duration = 2000; // 2 seconds
      const stepTime = Math.abs(Math.floor(duration / targetValue)) || 10;
      let currentVal = 0;
      
      const timer = setInterval(() => {
        currentVal += Math.ceil(targetValue / (duration / stepTime));
        if (currentVal >= targetValue) {
          target.innerText = targetValue + suffix;
          clearInterval(timer);
        } else {
          target.innerText = currentVal + suffix;
        }
      }, stepTime);
      
      observer.unobserve(target);
    });
  }, { threshold: 0.5 });

  countElements.forEach(el => countObserver.observe(el));

  // Mouse Parallax Effect
  document.addEventListener('mousemove', (e) => {
    const parallaxElements = document.querySelectorAll('.parallax');
    
    const mouseX = e.clientX / window.innerWidth - 0.5;
    const mouseY = e.clientY / window.innerHeight - 0.5;
    
    parallaxElements.forEach(el => {
      const speed = parseFloat(el.getAttribute('data-speed')) || 20;
      const x = mouseX * speed;
      const y = mouseY * speed;
      
      // Preserve other transforms if possible, though a simple translate is fine here
      el.style.transform = `translate(${x}px, ${y}px)`;
    });
  });

  // Magnetic Button Effect
  const magneticButtons = document.querySelectorAll('.magnetic');
  
  magneticButtons.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const h = rect.width / 2;
      
      const x = e.clientX - rect.left - h;
      const y = e.clientY - rect.top - h;
      
      btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });
    
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0px, 0px)';
    });
  });
});
