# API สำหรับการคำนวณลำดับฟีโบนัชชี

## วิธีการติดตั้งและรัน

### ข้อกำหนดระบบ
- Node.js (แนะนำเวอร์ชัน 14 เป็นต้นไป)
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

#### รัน server
```bash
npm start
```

เซิร์ฟเวอร์จะรันที่ port เริ่มต้น (โดยทั่วไปคือ port 3000)

## การทดสอบ API

### วิธีการทดสอบ

#### 1. ผ่าน Web Browser
เปิดเบราว์เซอร์และเข้าไปที่:
```
http://localhost:3000/api/v1/test/:memberCount
```

**ตัวอย่างการใช้งาน:**
```
http://localhost:3000/api/v1/test/5
```

#### 2. ผ่าน curl (Command Line)
```bash
# ทดสอบกรณีปกติ
curl http://localhost:3000/api/v1/test/8

# ทดสอบกรณีข้อผิดพลาด
curl http://localhost:3000/api/v1/test/0
curl http://localhost:3000/api/v1/test/101
curl http://localhost:3000/api/v1/test/abc
```

#### 3. ผ่าน Postman หรือ Insomnia
- Method: GET
- URL: `http://localhost:3000/api/v1/test/{memberCount}`
- แทนที่ `{memberCount}` ด้วยตัวเลข 1-100

### ตัวอย่างผลลัพธ์

#### กรณีสำเร็จ (memberCount = 8):
```json
{
  "member-count": 8,
  "sequence": [0, 1, 1, 2, 3, 5, 8, 13],
  "total": 33
}
```

#### กรณีข้อผิดพลาด (memberCount นอกช่วง):
```json
{
  "error": "Invalid input. Member count must be between 1 and 100."
}
```

#### กรณีข้อผิดพลาด (memberCount ไม่ใช่ตัวเลข):
```json
{
  "error": "Invalid input. Member count must be an integer."
}
```

## API Specification

### Endpoint
- **URL**: `api/v1/test/:memberCount`
- **Method**: GET
- **Parameter**: 
  - `memberCount` (integer): จำนวนสมาชิกในลำดับฟีโบนัชชี (1-100)

### Response Format
- **Content-Type**: application/json
- **Success Status**: 200 OK
- **Error Status**: 400 Bad Request, 500 Internal Server Error