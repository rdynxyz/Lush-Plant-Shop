// src/directives/observeVisibility.js
export default {
    mounted(el) {
      el.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700');
  
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.remove('opacity-0', 'translate-y-10');
            el.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(el); // Unobserve biar animasinya sekali doang
          }
        },
        { threshold: 0.1 }
      );
  
      observer.observe(el);
    }
  }
  