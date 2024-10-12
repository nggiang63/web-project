const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Kết nối MongoDB
mongoose.connect('mongodb://localhost:27017/myDatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Kết nối thành công đến MongoDB'))
.catch((err) => console.error('Kết nối thất bại', err));

// Định nghĩa schema cho tài khoản
const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    phone: String,
    location: String
});

const User = mongoose.model('User', userSchema);

// API để nhận dữ liệu từ form và lưu vào MongoDB
app.post('/register', async (req, res) => {
    const { username, email, password, phone, location } = req.body;

    // Kiểm tra xem tài khoản đã tồn tại chưa
    const existingUser = await User.findOne({ username: username });
    if (existingUser) {
        return res.status(400).json({ message: 'Tài khoản đã tồn tại!' });
    }

    // Tạo người dùng mới và lưu vào MongoDB
    const newUser = new User({
        username: username,
        email: email,
        password: password,
        phone: phone,
        location: location
    });

    try {
        await newUser.save();
        res.status(201).json({ message: 'Đăng ký thành công!' });
    } catch (err) {
        res.status(500).json({ message: 'Có lỗi xảy ra khi lưu dữ liệu!' });
    }
});

// API để xử lý đăng nhập
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Tìm người dùng trong MongoDB
        const user = await User.findOne({ username: username, password: password });
        
        if (user) {
            // Nếu tìm thấy, đăng nhập thành công
            res.status(200).json({ message: 'Đăng nhập thành công', user: user });
        } else {
            // Nếu không tìm thấy, trả về lỗi
            res.status(401).json({ message: 'Tên đăng nhập hoặc mật khẩu không đúng' });
        }
    } catch (error) {
        // Xử lý lỗi
        res.status(500).json({ message: 'Có lỗi xảy ra', error: error.message });
    }
});

// API để lấy thông tin cá nhân
app.get('/profile/:username', async (req, res) => {
    const { username } = req.params;

    try {
        // Tìm người dùng trong MongoDB
        const user = await User.findOne({ username: username });
        
        if (user) {
            // Nếu tìm thấy, trả về thông tin người dùng
            res.status(200).json(user);
        } else {
            // Nếu không tìm thấy, trả về lỗi
            res.status(404).json({ message: 'Không tìm thấy thông tin người dùng.' });
        }
    } catch (error) {
        // Xử lý lỗi
        res.status(500).json({ message: 'Có lỗi xảy ra', error: error.message });
    }
});

// Chạy server
app.listen(3000, () => {
    console.log('Server đang chạy tại http://localhost:3000');
});
