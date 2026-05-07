// D'Luxe Events — interactions

// Nav scroll state
const nav = document.querySelector('.nav');
const onScroll = () => {
  if (window.scrollY > 30) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Mobile menu
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
if (toggle && links) {
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-controls', 'nav-links');
  if (!links.id) links.id = 'nav-links';

  const setMenu = (open) => {
    toggle.classList.toggle('open', open);
    links.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.body.style.overflow = open ? 'hidden' : '';
  };
  toggle.addEventListener('click', () => setMenu(!links.classList.contains('open')));
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && links.classList.contains('open')) setMenu(false);
  });
}

// Reveal on scroll (.r elements)
const io = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  }),
  { threshold: 0.12, rootMargin: '0px 0px -80px 0px' }
);
document.querySelectorAll('.r').forEach(el => io.observe(el));

// Form submission (placeholder — wire to backend later)
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const success = form.querySelector('.form-success');
    success.classList.add('show');
    form.querySelectorAll('input, textarea, select').forEach(f => f.value = '');
    success.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
}
