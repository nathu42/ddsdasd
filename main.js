/* Lazy autoplay for showcase videos: attach src when near viewport, play when visible. */
(function () {
  const vids = document.querySelectorAll('video[data-src]');
  if (!('IntersectionObserver' in window)) {
    vids.forEach(v => { v.src = v.dataset.src; v.play().catch(() => {}); });
    return;
  }
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      const v = e.target;
      if (e.isIntersecting) {
        if (!v.src) v.src = v.dataset.src;
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    });
  }, { rootMargin: '200px 0px' });
  vids.forEach(v => io.observe(v));
})();

/* Scroll reveal */
(function () {
  const els = document.querySelectorAll('.rv');
  if (!('IntersectionObserver' in window)) { els.forEach(el => el.classList.add('in')); return; }
  const io = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.06 });
  els.forEach(el => io.observe(el));
})();
