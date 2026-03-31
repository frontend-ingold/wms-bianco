(function () {
  function ready(fn) {
    if (document.readyState !== 'loading') {
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

  ready(function () {
    const container = document.getElementById('myBanner');
    if (!container) return;

    // Get the script tag that loaded this widget
    const scripts = document.getElementsByTagName('script');
    const currentScript = scripts[scripts.length - 1];

    // Read params
    const title = currentScript.getAttribute('data-title') || 'Welcome!';
    const description = currentScript.getAttribute('data-description') || 'Thanks for visiting our site.';
    const color = currentScript.getAttribute('data-color') || '#007BFF';

    // Inject HTML
    container.innerHTML = `
      <div style="padding:15px; background:${color}; color:white; border-radius:8px; text-align:center; font-family:sans-serif;">
        <div style="font-size:1.2rem; font-weight:bold;">${title}</div>
        <div style="margin-top:5px;">${description}</div>
        <button style="margin-top:10px; background:white; color:${color}; padding:5px 10px; border:none; border-radius:4px;">Learn More</button>
      </div>
    `;
  });
})();
