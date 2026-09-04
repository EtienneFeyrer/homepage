/*======================================
//--//-->   DARK MODE TOGGLE
======================================*/

document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.getElementById('dark-mode-toggle');
  const darkModeIcon = document.getElementById('dark-mode-icon');
  const body = document.body;
  const marqueeImageVariants = {
    'pytorch_logo_icon.png': { light: 'pytorch_logo_icon_light.png', dark: 'pytorch_logo_icon_dark.png' },
    'docker.png': { light: 'docker_light.png', dark: 'docker_dark.png' },
    'linux_logo_icon.png': { light: 'linux_logo_icon_light.png', dark: 'linux_logo_icon_dark.png' },
    'python_vertical_logo_icon.png': { light: 'python_vertical_logo_icon_light.png', dark: 'python_vertical_logo_icon_dark.png' },
    'sql_icon.png': { light: 'sql_icon_light.png', dark: 'sql_icon_dark.png' },
    'Git_logo.png': { light: 'Git_logo_light.png', dark: 'Git_logo_dark.png' },
    'Java_icon.png': { light: 'Java_icon_light.png', dark: 'Java_icon_dark.png' },
    'Numpy.png': { light: 'Numpy_light.png', dark: 'Numpy_black.png' },
    'Pandas_logo.png': { light: 'Pandas_logo_light.png', dark: 'Pandas_logo_black.png' },
    'Scikitlearn_logo.png': { light: 'Scikitlearn_logo_light.png', dark: 'Scikitlearn_logo_dark.png' },
    'FAISS_logo.png': { light: 'FAISS_logo_light.png', dark: 'FAISS_logo_dark.png' },
    'Rdkit_logo.png': { light: 'Rdkit_logo_light.png', dark: 'Rdkit_logo_dark.png' },
    'Powershell_logo.png': { light: 'Powershell_logo_light.png', dark: 'Powershell_logo_dark.png' },
    'VirtualBox_logo.png': { light: 'VirtualBox_logo_light.png', dark: 'VirtualBox_logo_dark.png' }
  };

  function updateMarqueeImages() {
    const variant = body.classList.contains('dark-mode') ? 'light' : 'dark';

    document.querySelectorAll('.logo-marquee img').forEach(function(image) {
      const filename = image.src.split('/').pop();
      const variants = marqueeImageVariants[filename] || Object.values(marqueeImageVariants).find(function(candidate) {
        return candidate.light === filename || candidate.dark === filename;
      });

      if (variants) {
        const targetFilename = variants[variant];
        image.src = 'img/' + targetFilename;
      }
    });
  }

  // Check for saved dark mode preference
  const savedDarkMode = localStorage.getItem('darkMode');
  if (savedDarkMode === 'enabled') {
    body.classList.add('dark-mode');
    darkModeIcon.src = 'img/lightmode.png';
  }

  updateMarqueeImages();

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

    updateMarqueeImages();
  });
});
