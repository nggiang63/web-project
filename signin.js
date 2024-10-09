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

         // Lấy danh sách tài khoản từ localStorage
         const accounts = JSON.parse(localStorage.getItem('accounts')) || [];

         // Kiểm tra xem tài khoản đã tồn tại chưa
         const accountExists = accounts.some(account => account.username === username);
         
         if (accountExists) {
             alert('Tài khoản đã tồn tại!');
             return;
         }

        // Kiểm tra xem mật khẩu và xác nhận mật khẩu có khớp không
        if (password !== confirmPassword) {
            alert('Mật khẩu và xác nhận mật khẩu không khớp!');
            return;
        }


        // Lưu thông tin đăng ký vào localStorage
        const userInfo = {
            username: username,
            email: email,
            password: password,
            phone: phone,
            location: location
        };
        accounts.push(userInfo);

        localStorage.setItem('accounts', JSON.stringify(accounts)); // Lưu thông tin

        alert('Đăng ký thành công!');

        window.location.href = "login.html"; // Chuyển hướng tới trang đăng nhập
    });
});
