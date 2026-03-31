(function () {
  function init() {
    const container = document.getElementById('myBanner');
    if (!container) return;

    const currentScript = document.currentScript;

    const title =
      currentScript?.getAttribute('data-title') || 'Welcome!';
    const description =
      currentScript?.getAttribute('data-description') ||
      'Thanks for visiting our site.';
    const color =
      currentScript?.getAttribute('data-color') || '#007BFF';

    container.innerHTML = `
      <div style="padding:15px; background:${color}; color:white; border-radius:8px; text-align:center; font-family:sans-serif;">
        <div style="font-size:1.2rem; font-weight:bold;">${title}</div>
        <div style="margin-top:5px;">${description}</div>
        <button id="learnMoreBtn" 
          style="margin-top:10px; background:white; color:${color}; padding:5px 10px; border:none; border-radius:4px;">
          Learn More
        </button>
      </div>
    `;

    const btn = document.getElementById('learnMoreBtn');

    if (btn) {
      btn.addEventListener('click', function () {
        // Fire global event (works in any framework)
        window.dispatchEvent(
          new CustomEvent('appointment:learnmore', {
            detail: {
              title,
              description
            }
          })
        );
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
