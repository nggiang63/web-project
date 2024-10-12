$(document).ready(function () {
  // Hiển thị hoặc ẩn mật khẩu
  $("#eye").on("click", function () {
    const passwordInput = $(this).siblings('input[type="password"]');
    const passwordType =
      passwordInput.attr("type") === "password" ? "text" : "password";
    passwordInput.attr("type", passwordType);
    $(this).find("i").toggleClass("fa-eye fa-eye-slash");
  });

  // Xử lý sự kiện gửi form
  $("#form-login").on("submit", function (event) {
    event.preventDefault(); // Ngăn chặn hành vi gửi form mặc định

    const username = $(this)
      .find('input[placeholder="Tên đăng nhập"]')
      .val()
      .trim();
    const password = $(this).find('input[placeholder="Mật khẩu"]').val();

    // Kiểm tra xem các trường có được nhập hay không
    if (username === "" || password === "") {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    // Gửi dữ liệu đăng nhập tới server qua AJAX
    $.ajax({
      url: "http://localhost:3000/login",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify({ username: username, password: password }),
      success: function (response) {
        // Đăng nhập thành công
        alert("Đăng nhập thành công!");
        // Lưu thông tin người dùng vào localStorage hoặc sessionStorage
        localStorage.setItem("loggedInUser", response.user.username);
        // Chuyển hướng tới trang chính (home.html)
        window.location.href = "dashboard.html";
      },
      error: function (xhr) {
        if (xhr.status === 401) {
          // Đăng nhập thất bại
          alert("Tên đăng nhập hoặc mật khẩu không đúng!");
        } else {
          alert("Có lỗi xảy ra, vui lòng thử lại sau.");
        }
      },
    });
  });
});
