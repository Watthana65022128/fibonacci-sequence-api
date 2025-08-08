const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware สำหรับจัดการ request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// เชื่อมต่อ API Routes
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

// หน้าแรกของ API
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Fibonacci Sequence API' });
});

// เริ่มต้นเซิร์ฟเวอร์
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;