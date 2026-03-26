// DOM Loaded Setup
document.addEventListener('DOMContentLoaded', () => {

  // Sticky Navbar Effect
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Reveal Animations API using Intersection Observer
  const reveals = document.querySelectorAll('.reveal');
  const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  };

  const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, revealOptions);

  reveals.forEach(reveal => {
    revealOnScroll.observe(reveal);
  });

  // Mobile Menu Toggle (Basic functionality)
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if(menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      // Create simple mobile overlay
      navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.position = 'absolute';
      navLinks.style.top = '70px';
      navLinks.style.left = '0';
      navLinks.style.width = '100%';
      navLinks.style.background = 'rgba(11, 31, 58, 0.95)';
      navLinks.style.backdropFilter = 'blur(10px)';
      navLinks.style.padding = '24px';
      navLinks.style.alignItems = 'center';
      navLinks.style.borderTop = '1px solid rgba(255,255,255,0.05)';
    });
  }
});
