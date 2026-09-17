// Scroll-reveal for elements marked with [data-reveal].
// The nav toggle lives inside Nav.astro and the hero glitch inside
// Hero.astro, each bundled separately by Astro.

function revealOnScroll() {
  const els = document.querySelectorAll("[data-reveal]");

  if (!("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("revealed"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 },
  );

  els.forEach((el) => observer.observe(el));
}

revealOnScroll();
