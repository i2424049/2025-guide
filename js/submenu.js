
  document.addEventListener('DOMContentLoaded', function () {
    const toggles = document.querySelectorAll('.accordion-toggle');

    toggles.forEach(function (toggle) {
      toggle.addEventListener('click', function () {
        const submenu = toggle.nextElementSibling;

        if (submenu && submenu.classList.contains('submenu')) {
          const isVisible = submenu.style.display === 'block';
          submenu.style.display = isVisible ? 'none' : 'block';
          toggle.classList.toggle('open', !isVisible);
        }
      });
    });

    // 現在のURLに一致するリンクを探す
    const currentUrl = window.location.href;

    document.querySelectorAll('.submenu a').forEach(link => {
      const href = link.href;

      if (currentUrl.includes(href)) {
        link.classList.add('active');

        // 親を開く
        const submenu = link.closest('.submenu');
        if (submenu) {
          submenu.style.display = 'block';
          const parentToggle = submenu.previousElementSibling;
          if (parentToggle && parentToggle.classList.contains('accordion-toggle')) {
            parentToggle.classList.add('open');
          }
        }
      }
    });

    const toggleButton = document.getElementById('menuToggle');
  const sidebar = document.getElementById('sidebarMenu');

  toggleButton.addEventListener('click', function () {
    sidebar.classList.toggle('open');
  });

    
  });
