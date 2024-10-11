$(document).ready(function() {
    // Xử lý khi người dùng submit form
    $('#form-login').on('submit', function(event) {
        event.preventDefault(); // Ngăn chặn reload trang

        // Lấy giá trị từ input
        const username = $('.form-input[placeholder="Tên đăng nhập"]').val().trim();
        const password = $('.form-input[type="password"]').val();

        // Lấy danh sách tài khoản từ localStorage
        const accounts = JSON.parse(localStorage.getItem('accounts'));

        // Kiểm tra thông tin đăng nhập
        const account = accounts.find(acc => acc.username === username && acc.password === password);

        if (account) {
            alert('Đăng nhập thành công!');
            localStorage.setItem('username', username);
            // Điều hướng đến trang dashboard hoặc làm gì đó
            window.location.href = 'dashboard.html';
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
});
