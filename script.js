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


// Hiển thị hộp đăng nhập
document.getElementById('openModal').onclick = function() {
    document.getElementById('loginModal').style.display = 'block';
}

// Đóng hộp đăng nhập
document.getElementById('closeModal').onclick = function() {
    document.getElementById('loginModal').style.display = 'none';
}

// Xử lý việc gửi biểu mẫu
document.getElementById('loginForm').onsubmit = function(event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của biểu mẫu

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Kiểm tra tên người dùng và mật khẩu (giả định)
    if (username === 'user' && password === 'pass') {
        alert('Đăng nhập thành công!');
        // Có thể chuyển hướng người dùng đến một trang khác hoặc làm điều gì đó khác
        document.getElementById('loginModal').style.display = 'none';
    } else {
        alert('Tên người dùng hoặc mật khẩu không chính xác.');
    }
}

// Đóng hộp khi người dùng nhấn bên ngoài
window.onclick = function(event) {
    const modal = document.getElementById('loginModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}
