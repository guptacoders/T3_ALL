// Get the button element
const toggleButton = document.getElementById('dark-mode-toggle');

// Check the current theme and set it accordingly
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
  document.body.classList.add('dark-mode');
  toggleButton.textContent = 'Switch to Light Mode';
}

// Function to toggle dark mode
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  
  // Change button text based on the mode
  if (document.body.classList.contains('dark-mode')) {
    toggleButton.textContent = 'Switch to Light Mode';
    localStorage.setItem('theme', 'dark');  // Save theme to localStorage
  } else {
    toggleButton.textContent = 'Switch to Dark Mode';
    localStorage.setItem('theme', 'light'); // Save theme to localStorage
  }
});
