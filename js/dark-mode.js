/*======================================
//--//-->   DARK MODE TOGGLE
======================================*/

document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.getElementById('dark-mode-toggle');
  const darkModeIcon = document.getElementById('dark-mode-icon');
  const body = document.body;

  // Check for saved dark mode preference
  const savedDarkMode = localStorage.getItem('darkMode');
  if (savedDarkMode === 'enabled') {
    body.classList.add('dark-mode');
    darkModeIcon.src = 'img/lightmode.png';
  }

  // Toggle dark mode on button click
  toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Save preference to localStorage
    if (body.classList.contains('dark-mode')) {
      darkModeIcon.src = 'img/lightmode.png';
      localStorage.setItem('darkMode', 'enabled');
    } else {
      darkModeIcon.src = 'img/darkmode.png';
      localStorage.setItem('darkMode', 'disabled');
    }
  });
});
