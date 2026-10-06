const toggle = document.querySelector('.nav-toggle');
const navigation = document.querySelector('#navigation');
toggle?.addEventListener('click', () => {
  const expanded = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(expanded));
  toggle.setAttribute('aria-label', expanded ? 'Close navigation' : 'Open navigation');
  navigation.classList.toggle('open', expanded);
});
navigation?.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    navigation.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation');
  }
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && navigation?.classList.contains('open')) {
    navigation.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation');
    toggle.focus();
  }
});
const backToTop = document.querySelector('#back-to-top');
const navLinks = [...document.querySelectorAll('#navigation a')].filter(link => link.getAttribute('href').startsWith('#'));
const sections = navLinks.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);
function updateNavigation() {
  backToTop?.classList.toggle('visible', window.scrollY > 400);
  let current = sections[0];
  for (const section of sections) if (section.getBoundingClientRect().top <= 150) current = section;
  navLinks.forEach(link => link.parentElement.classList.toggle('active', link.hash === '#' + current?.id));
}
window.addEventListener('scroll', updateNavigation, { passive: true });
updateNavigation();
