const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Trang chính
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Xử lý đăng nhập
app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // Kiểm tra thông tin đăng nhập (ví dụ)
    if (username === 'admin' && password === 'password') {
        res.redirect('dashboard.html'); // Chuyển đến trang sau khi đăng nhập thành công
    } else {
        res.send('Thông tin đăng nhập không đúng');
    }
});

// Khởi động server
app.listen(port, () => {
    console.log(`Server đang chạy trên http://localhost:${port}`);
});
