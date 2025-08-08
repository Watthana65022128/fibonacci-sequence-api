// ฟังก์ชันสำหรับคำนวณลำดับ Fibonacci
function calculateFibonacci(memberCount) {
  // ตรวจสอบกรณีพิเศษ
  if (memberCount <= 0) return [];
  if (memberCount === 1) return [0];
  if (memberCount === 2) return [0, 1];

  // เริ่มต้นด้วยสองค่าแรก
  const sequence = [0, 1];
  
  // คำนวณลำดับ Fibonacci
  for (let i = 2; i < memberCount; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }

  return sequence;
}

// ฟังก์ชันสำหรับคำนวณผลรวมของลำดับ
function calculateTotal(sequence) {
  return sequence.reduce((sum, num) => sum + num, 0);
}

module.exports = {
  calculateFibonacci,
  calculateTotal
};