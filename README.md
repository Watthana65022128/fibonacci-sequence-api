"# fibonacci-sequence-api

API สำหรับการคำนวณลำดับฟีโบนัชชี

## วิธีการติดตั้งและรัน

### ข้อกำหนดระบบ
- Node.js (แนะนำเวอร์ชัน 14 หรือสูงกว่า)
- npm หรือ yarn

### การติดตั้ง

1. Clone โปรเจกต์
```bash
git clone <repository-url>
cd fibonacci-sequence-api
```

2. ติดตั้ง dependencies
```bash
npm install
```

### การรันแอปพลิเคชัน

#### รันในโหมด Production
```bash
npm start
```

#### รันในโหมด Development (พร้อม auto-reload)
```bash
npm run dev
```

แอปพลิเคชันจะรันที่ port เริ่มต้น (โดยทั่วไปคือ port 3000)

### การทดสอบ API

เข้าถึง API ผ่าน:
```
http://localhost:3000/v1/test/:memberCount
```

ตัวอย่าง:
```bash
curl http://localhost:3000/v1/test/:memberCount
```" 
