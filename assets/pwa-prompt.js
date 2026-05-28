'use strict';
// Custom PWA install prompt.
// Shows a bottom banner after 2 visits on browsers that support beforeinstallprompt
// (Android Chrome, desktop Chrome/Edge). iOS Safari gets a manual "tap Share" hint.
// Dismissed state is stored in localStorage — won't show again once dismissed.

(function () {
  if (localStorage.getItem('pwa-dismissed')) return;
  if (window.matchMedia('(display-mode: standalone)').matches) return;

  const visits = parseInt(localStorage.getItem('pwa-visits') || '0') + 1;
  localStorage.setItem('pwa-visits', String(visits));
  if (visits < 3) return;

  let deferredPrompt = null;

  function createBanner(ios) {
    const banner = document.createElement('div');
    banner.id = 'pwa-banner';
    banner.innerHTML = ios
      ? `<span class="pwa-text"><strong>共有</strong> → <strong>ホーム画面に追加</strong> でアプリとして使えます</span>
         <button class="pwa-dismiss" aria-label="閉じる">✕</button>`
      : `<span class="pwa-text"><strong>SuicuneGS</strong> をホーム画面に追加しますか？</span>
         <button class="pwa-install">追加する</button>
         <button class="pwa-dismiss" aria-label="閉じる">✕</button>`;

    document.body.appendChild(banner);

    banner.querySelector('.pwa-dismiss').addEventListener('click', () => {
      banner.remove();
      localStorage.setItem('pwa-dismissed', '1');
    });

    if (!ios) {
      banner.querySelector('.pwa-install').addEventListener('click', async () => {
        if (!deferredPrompt) return;
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        banner.remove();
        localStorage.setItem('pwa-dismissed', '1');
      });
    }
  }

  const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  if (isIOS && isSafari) {
    // iOS can't use beforeinstallprompt — show manual instructions instead
    window.addEventListener('DOMContentLoaded', () => createBanner(true));
    return;
  }

  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    deferredPrompt = e;
    createBanner(false);
  });
})();
