 // Scroll Animation
    const hiddenElements = document.querySelectorAll('.hidden');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    });

    hiddenElements.forEach((el) => observer.observe(el));

    // Navbar Background on Scroll
    window.addEventListener('scroll', () => {
      const header = document.querySelector('header');

      if(window.scrollY > 50) {
        header.style.background = '#020617';
      } else {
        header.style.background = 'rgba(15, 23, 42, 0.9)';
      }
    });

    // Typing Animation
    const text = ["Web Developer", "UI/UX Designer", "Freelancer"];
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';

    (function type() {
      if(count === text.length) {
        count = 0;
      }

      currentText = text[count];
      letter = currentText.slice(0, ++index);

      document.querySelector('.hero-text span').textContent = letter;

      if(letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 1200);
      } else {
        setTimeout(type, 120);
      }
    })();