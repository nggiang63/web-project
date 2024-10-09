$(document).ready(function() {
    // Danh sách tài khoản giả lập (có thể thay bằng API hoặc cơ sở dữ liệu)
    const accounts = [
        { username: 'admin', password: '123456' },
        { username: 'user1', password: 'password123' },
    ];

    // Xử lý khi người dùng submit form
    $('#form-login').on('submit', function(event) {
        event.preventDefault(); // Ngăn chặn reload trang

        // Lấy giá trị từ input
        const username = $('.form-input[type="text"]').val().trim();
        const password = $('.form-input[type="password"]').val();

        // Lấy thông tin tài khoản từ localStorage
        const userInfo = JSON.parse(localStorage.getItem('userInfo'));

        // Kiểm tra thông tin đăng nhập
        if (userInfo && userInfo.username === username && userInfo.password === password) {
            alert('Đăng nhập thành công!');
            localStorage.setItem('username', username);
            // Điều hướng đến trang dashboard hoặc làm gì đó
            window.location.href = 'dashboard.html';
            //localStorage.clear();
        } else {
            alert('Tên đăng nhập hoặc mật khẩu không chính xác!');
        }
    });

    // Bật/tắt hiển thị mật khẩu
    $('#eye').on('click', function() {
        const passwordField = $(this).siblings('.form-input');
        const icon = $(this).children('i');

        if (passwordField.attr('type') === 'password') {
            passwordField.attr('type', 'text');
            icon.removeClass('fa-eye').addClass('fa-eye-slash');
        } else {
            passwordField.attr('type', 'password');
            icon.removeClass('fa-eye-slash').addClass('fa-eye');
        }
    });
    $('#eye').on('click', function() {
        const passwordField = $(this).siblings('.form-input');
        const icon = $(this).children('i');

        if (passwordField.attr('type') === 'password') {
            passwordField.attr('type', 'text');
            icon.removeClass('fa-eye').addClass('fa-eye-slash');
        } else {
            passwordField.attr('type', 'password');
            icon.removeClass('fa-eye-slash').addClass('fa-eye');
        }
    });
});



