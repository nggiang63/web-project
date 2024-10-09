$(document).ready(function() {
    // Hiển thị hoặc ẩn mật khẩu
    $('#eye').on('click', function() {
        const passwordInput = $(this).siblings('input[type="password"]');
        const passwordType = passwordInput.attr('type') === 'password' ? 'text' : 'password';
        passwordInput.attr('type', passwordType);
        $(this).find('i').toggleClass('fa-eye fa-eye-slash');
    });

    $('#eye1').on('click', function() {
        const confirmPasswordInput = $(this).siblings('input[type="password"]');
        const confirmPasswordType = confirmPasswordInput.attr('type') === 'password' ? 'text' : 'password';
        confirmPasswordInput.attr('type', confirmPasswordType);
        $(this).find('i').toggleClass('fa-eye fa-eye-slash');
    });

    // Xử lý sự kiện gửi form
    $('#form-login').on('submit', function(event) {
        event.preventDefault(); // Ngăn chặn gửi form mặc định

        const username = $(this).find('input[placeholder="Tên đăng nhập"]').val().trim();
        const email = $(this).find('input[placeholder="Email"]').val().trim();
        const password = $(this).find('input[placeholder="Mật khẩu"]').val();
        const confirmPassword = $(this).find('input[placeholder="Xác nhận mật khẩu"]').val();

        // Kiểm tra xem mật khẩu và xác nhận mật khẩu có khớp không
        if (password !== confirmPassword) {
            alert('Mật khẩu và xác nhận mật khẩu không khớp!');
            return;
        }

        // Lưu thông tin đăng ký vào localStorage
        const userInfo = {
            username: username,
            email: email,
            password: password
        };

        localStorage.setItem('userInfo', JSON.stringify(userInfo)); // Lưu thông tin

        alert('Đăng ký thành công!');

        // Bạn có thể chuyển hướng tới trang đăng nhập ở đây nếu cần
        window.location.href = "login.html"; // Chuyển hướng tới trang đăng nhập
    });
});
