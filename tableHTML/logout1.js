$(document).ready(function() {
    // Kiểm tra xem người dùng đã đăng nhập chưa
    const loggedInUser = localStorage.getItem('loggedInUser');
    
    if (loggedInUser) {
        // Nếu đã đăng nhập, hiển thị tên người dùng
        $('#username-display').text(loggedInUser);
    } else {
        // Nếu chưa đăng nhập, hiển thị thông tin đăng nhập mặc định
        $('#username-display').text('Đăng nhập');
    }

    // Xử lý đăng xuất
    $('#logout-btn').on('click', function(event) {
        event.preventDefault();
        
        // Xóa thông tin người dùng khỏi localStorage
        localStorage.removeItem('loggedInUser');
        
        // Chuyển hướng tới trang đăng nhập hoặc trang chủ
        window.location.href = "../index.html";
    });
});