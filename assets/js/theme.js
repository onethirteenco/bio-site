// Theme toggle functionality
function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-color-mode');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    // Update the theme
    html.setAttribute('data-color-mode', newTheme);
    
    // Save the preference
    localStorage.setItem('theme', newTheme);
    
    // Update the button icon
    updateThemeButton(newTheme);
}

// Update the theme button icon based on current theme
function updateThemeButton(theme) {
    const button = document.querySelector('.theme-toggle');
    if (!button) return;
    
    const svg = button.querySelector('svg');
    if (theme === 'dark') {
        svg.innerHTML = '<path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"/>';
    } else {
        svg.innerHTML = '<path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"/>';
    }
}

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', () => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Set initial theme
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-color-mode', initialTheme);
    updateThemeButton(initialTheme);
}); 