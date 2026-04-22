(function () {
  var toggle = document.getElementById('dark-mode-toggle');
  var body = document.body;
  var mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  function applyTheme(mode) {
    var isDark = mode === 'dark' || (mode === 'system' && mediaQuery.matches);
    body.classList.toggle('dark-mode', isDark);

    if (mode === 'light') {
      toggle.innerHTML = '<i class="fas fa-sun"></i>';
      toggle.setAttribute('title', 'Light mode');
    } else if (mode === 'dark') {
      toggle.innerHTML = '<i class="fas fa-moon"></i>';
      toggle.setAttribute('title', 'Dark mode');
    } else {
      toggle.innerHTML = '<i class="fas fa-circle-half-stroke"></i>';
      toggle.setAttribute('title', 'System theme');
    }
  }

  function getMode() {
    return localStorage.getItem('themeMode') || 'system';
  }

  applyTheme(getMode());

  mediaQuery.addEventListener('change', function () {
    if (getMode() === 'system') {
      applyTheme('system');
    }
  });

  toggle.addEventListener('click', function () {
    var next = { system: 'light', light: 'dark', dark: 'system' };
    var mode = next[getMode()];
    localStorage.setItem('themeMode', mode);
    applyTheme(mode);
  });
})();
