const toggleThemeButton = document.getElementById('toggle-theme');

// Kiểm tra trạng thái chế độ tối trong localStorage
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    toggleThemeButton.textContent = 'Chế độ sáng';
}

// Toggle chế độ tối
toggleThemeButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        toggleThemeButton.textContent = 'Chế độ sáng';
        localStorage.setItem('theme', 'dark'); // Lưu trạng thái vào localStorage
    } else {
        toggleThemeButton.textContent = 'Chế độ tối';
        localStorage.setItem('theme', 'light'); // Lưu trạng thái vào localStorage
    }
});



$(document).ready(function(){
    $('#eye').click(function(){
        $(this).toggleClass('open');
        $(this).children('i').toggleClass('fa-eye-slash fa-eye');
        if($(this).hasClass('open')){
            $(this).prev().attr('type', 'text');
        }else{
            $(this).prev().attr('type', 'password');
        }
    });
});