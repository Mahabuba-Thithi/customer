document.querySelector('.menu').addEventListener('click', function(e) {
    if (e.target.closest('.menu > li > a')) {
      e.preventDefault();
      const submenu = e.target.parentElement.querySelector('.submenu');
      if (submenu) {
        submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
      }
    }
  });
