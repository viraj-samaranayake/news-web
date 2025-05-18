console.log('Site loaded successfully');

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const mainNav = document.getElementById('main-nav').querySelector('ul');

  menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('show');
  });
});
