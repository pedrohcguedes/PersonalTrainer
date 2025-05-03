// Isso aqui é para rolar bonitinho e centralizado :)
    document.querySelectorAll('nav a[href^="#"]').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          const offset = window.innerHeight / 2 - target.offsetHeight / 2;
          const top = target.getBoundingClientRect().top + window.scrollY - offset;
  
          window.scrollTo({
            top: top,
            behavior: 'smooth'
          });
        }
      });
    });
  