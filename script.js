/* SplitMate landing — tiny vanilla JS
   Nav scroll state · mobile sheet · scroll-in reveals · smooth anchors */

(function () {
  const nav = document.getElementById('nav');
  const burger = document.getElementById('burger');
  const sheet = document.getElementById('sheet');

  /* ---- Nav scroll state ---- */
  const onScroll = () => {
    if (window.scrollY > 20) nav.classList.add('is-scrolled');
    else nav.classList.remove('is-scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- Mobile sheet ---- */
  const setSheet = (open) => {
    sheet.hidden = !open;
    burger.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  };
  burger.addEventListener('click', () => {
    const open = burger.getAttribute('aria-expanded') !== 'true';
    setSheet(open);
  });
  sheet.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') setSheet(false);
  });
  // Close on resize past breakpoint
  window.addEventListener('resize', () => {
    if (window.innerWidth > 960 && !sheet.hidden) setSheet(false);
  });
  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !sheet.hidden) setSheet(false);
  });

  /* ---- Smooth anchor scrolling (offset for fixed nav) ---- */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 60;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* ---- Scroll-in reveal observer ---- */
  if ('IntersectionObserver' in window &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // Stagger items that come in together
          const delay = Math.min(i * 60, 240);
          entry.target.style.setProperty('--delay', delay + 'ms');
          entry.target.classList.add('is-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-in'));
  }
})();
