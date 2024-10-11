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
        const phone = $(this).find('input[placeholder="Số điện thoại"]').val().trim();
        const location = $(this).find('input[placeholder="Thành phố, quốc gia"]').val().trim();

        // Kiểm tra xem mật khẩu và xác nhận mật khẩu có khớp không
        if (password !== confirmPassword) {
            alert('Mật khẩu và xác nhận mật khẩu không khớp!');
            return;
        }

        // Tạo dữ liệu người dùng để gửi đến server
        const userData = {
            username: username,
            email: email,
            password: password,
            phone: phone,
            location: location
        };

        // Gửi dữ liệu lên server
        fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.message === 'Tài khoản đã tồn tại!') {
                alert('Tài khoản đã tồn tại!');
            } else {
                alert('Đăng ký thành công!');
                window.location.href = "login.html"; // Chuyển hướng tới trang đăng nhập
            }
        })
        .catch(error => {
            console.error('Lỗi:', error);
            alert('Có lỗi xảy ra!');
        });
    });
});

