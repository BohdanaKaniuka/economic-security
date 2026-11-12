document.addEventListener('DOMContentLoaded', () => {
  // Мобільне бургер-меню
  const burgerBtn = document.getElementById('burgerBtn');
  const navLinks = document.getElementById('navLinks');

  if (burgerBtn && navLinks) {
    burgerBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }

  // Плавна анімація CSS-прогрес-барів на сторінці Австралії
  const progressBars = document.querySelectorAll('.progress-fill');
  if (progressBars.length > 0) {
    setTimeout(() => {
      progressBars.forEach(bar => {
        const targetWidth = bar.getAttribute('data-width');
        if (targetWidth) {
          bar.style.width = targetWidth;
        }
      });
    }, 150);
  }
});