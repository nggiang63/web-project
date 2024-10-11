// Kiểm tra xem có danh sách tài khoản trong localStorage không
if (localStorage.getItem('accounts')) {
    const accounts = JSON.parse(localStorage.getItem('accounts'));
    const username = localStorage.getItem('username'); // Lấy tên người dùng từ localStorage

    // Tìm thông tin cá nhân dựa trên tên người dùng
    const userInfo = accounts.find(account => account.username === username);

    if (userInfo) {
        // Cập nhật thông tin cá nhân lên trang
        document.getElementById('username').innerText = userInfo.username || 'Tên Của Bạn';
        document.getElementById('profile-image').src = userInfo.image || 'your-image.jpg';
        document.getElementById('bio').innerText = userInfo.bio || 'Mô tả về bạn sẽ được hiển thị ở đây.';
        document.getElementById('email').innerText = userInfo.email || 'email@example.com';
        document.getElementById('phone').innerText = userInfo.phone || '+123 456 7890';
        document.getElementById('location').innerText = userInfo.location || 'Thành phố, Quốc gia';
    } else {
        // Nếu không tìm thấy thông tin cá nhân
        alert('Không tìm thấy thông tin cá nhân cho tài khoản này. Vui lòng nhập thông tin.');
        // Có thể chuyển hướng đến trang nhập thông tin cá nhân (nếu cần)
    }
} else {
    // Nếu không có danh sách tài khoản, yêu cầu người dùng nhập thông tin
    alert('Không tìm thấy danh sách tài khoản. Vui lòng nhập thông tin.');
    // Có thể chuyển hướng đến trang nhập thông tin cá nhân (nếu cần)
}
