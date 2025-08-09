const express = require('express');
const router = express.Router();
const { calculateFibonacci, calculateTotal } = require('../src/fibonacci');

// API endpoint สำหรับคำนวณ Fibonacci Sequence
router.get('/v1/test/:memberCount', (req, res) => {
  const { memberCount } = req.params;
  
  // ตรวจสอบว่า input เป็นตัวเลขหรือไม่
  const num = parseInt(memberCount);
  if (isNaN(num) || memberCount.includes('.') || memberCount !== num.toString()) {
    return res.status(400).json({
      message: 'Invalid input',
      error: 'Member count must be an integer.'
    });
  }
  
  // ตรวจสอบช่วงของตัวเลข (1-100)
  if (num < 1 || num > 100) {
    return res.status(400).json({
      message: 'Out of range',
      error: 'Member count must be between 1 and 100.'
    });
  }
  
  // คำนวณลำดับ Fibonacci และผลรวม
  const sequence = calculateFibonacci(num);
  const total = calculateTotal(sequence);
  
  // ส่งคำตอบกลับในรูปแบบ JSON
  res.json({
    'member-count': num,
    sequence: sequence,
    total: total
  });
});

module.exports = router;