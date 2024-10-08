const toggleThemeButton = document.getElementById('toggle-theme');
toggleThemeButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        toggleThemeButton.textContent = 'Chế độ sáng';
    } else {
        toggleThemeButton.textContent = 'Chế độ tối';
    }
});