'use strict';
// Watches for card images added by React and applies:
//   - fetchpriority="high" on the first 8 (above-the-fold row)
//   - loading="lazy" + fetchpriority="low" on everything else
// Count resets on large batches (filter/search re-renders) so the
// new first row always gets high priority.

(function () {
  let count = 0;

  function handle(img) {
    if (img.hasAttribute('data-prio')) return;
    img.setAttribute('data-prio', '1');
    count++;
    if (count <= 8) {
      img.setAttribute('fetchpriority', 'high');
    } else {
      img.setAttribute('loading', 'lazy');
      img.setAttribute('fetchpriority', 'low');
    }
  }

  const observer = new MutationObserver(mutations => {
    const batch = [];
    for (const m of mutations) {
      for (const node of m.addedNodes) {
        if (node.nodeType !== 1) continue;
        if (node.matches && node.matches('.card-thumb-img')) batch.push(node);
        if (node.querySelectorAll) node.querySelectorAll('.card-thumb-img').forEach(n => batch.push(n));
      }
    }
    // Large batch = fresh render (filter/search changed) — reset priority counter
    if (batch.length > 4) count = 0;
    batch.forEach(handle);
  });

  function start() {
    observer.observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
