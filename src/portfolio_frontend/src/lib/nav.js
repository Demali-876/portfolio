const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () => {
  const isVisible = primaryNav.getAttribute('data-visible') === 'true';
  primaryNav.setAttribute('data-visible', String(!isVisible));
  navToggle.setAttribute('aria-expanded', String(!isVisible));
});