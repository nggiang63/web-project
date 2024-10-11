// Lấy tên đăng nhập từ LocalStorage
const username = localStorage.getItem('loggedInUser');

// Gửi yêu cầu để lấy thông tin người dùng
async function getUserProfile() {
    try {
        const response = await fetch(`http://localhost:3000/profile/${username}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (!response.ok) {
            throw new Error('Không tìm thấy thông tin cá nhân.');
        }

        const userInfo = await response.json();
        // Cập nhật thông tin cá nhân lên trang
        document.getElementById('username').innerText = userInfo.username || 'Tên Của Bạn';
        document.getElementById('profile-image').src = userInfo.image || 'your-image.jpg';
        document.getElementById('bio').innerText = userInfo.bio || 'Mô tả về bạn sẽ được hiển thị ở đây.';
        document.getElementById('email').innerText = userInfo.email || 'email@example.com';
        document.getElementById('phone').innerText = userInfo.phone || '+123 456 7890';
        document.getElementById('location').innerText = userInfo.location || 'Thành phố, Quốc gia';
    } catch (error) {
        alert(error.message);
    }
}

// Gọi hàm để lấy thông tin người dùng
getUserProfile();
