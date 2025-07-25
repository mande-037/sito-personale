function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  sidebar.classList.toggle('open');
  overlay.classList.toggle('show');
}

function toggleSubmenu(event) {
  event.preventDefault();
  const submenu = event.target.nextElementSibling;
  if (submenu.style.display === 'block') {
    submenu.style.display = 'none';
  }
  else {
    submenu.style.display = 'block';
  }
}