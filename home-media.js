if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const previews = new IntersectionObserver((entries, observer) => {
    for (const { isIntersecting, target } of entries) {
      if (isIntersecting) {
        observer.unobserve(target);
        target.play().catch(() => {
          // Native controls remain available if the browser blocks autoplay.
        });
      }
    }
  });

  for (const video of document.querySelectorAll('video[data-loop-preview]')) {
    previews.observe(video);
  }
}
