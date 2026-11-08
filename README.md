# thai-convert

แปลงตัวเลขและจำนวนเงินบาท (THB) เป็นคำอ่านภาษาไทย สำหรับพิมพ์บนใบเสร็จ ใบกำกับภาษี และเอกสารทางการเงิน

```ts
import { bahtText } from 'thai-convert';

bahtText(138);   // "หนึ่งร้อยสามสิบแปดบาทถ้วน"
bahtText(12.5);  // "สิบสองบาทห้าสิบสตางค์"
bahtText(-5);    // "ลบห้าบาทถ้วน"
```

## ติดตั้ง

```bash
npm install thai-convert
```

## การใช้งาน

### `bahtText(amount: number): string`

| input        | output                            |
| ------------ | --------------------------------- |
| `0`          | `ศูนย์บาทถ้วน`                     |
| `21`         | `ยี่สิบเอ็ดบาทถ้วน`                |
| `1000001`    | `หนึ่งล้านเอ็ดบาทถ้วน`              |
| `12.5`       | `สิบสองบาทห้าสิบสตางค์`             |
| `0.01`       | `หนึ่งสตางค์`                      |
| `-5`         | `ลบห้าบาทถ้วน`                     |

- จำนวนเต็มลงท้ายด้วย `บาทถ้วน`, มีสตางค์ให้ใช้ `บาท` + `สตางค์`
- ทศนิยมปัดเป็นสตางค์ (2 ตำแหน่ง)
- ค่าลบจะมีคำว่า `ลบ` นำหน้า (ถ้ามีค่าสตางค์หรือบาทไม่เป็นศูนย์)

## รองรับ ES5 / ES6 / TypeScript

| ไฟล์                     | รูปแบบ                | ใช้เมื่อ                              |
| ------------------------ | --------------------- | ------------------------------------- |
| `dist/es5/index.js`      | ES5, CommonJS         | `require()`, โปรเจกต์ Node/เก่า        |
| `dist/es6/index.js`      | ES2015, ES modules    | `import`, bundler สมัยใหม่              |
| `dist/types/index.d.ts`  | TypeScript declaration | โปรเจกต์ TypeScript                    |

```js
// ES5 / CommonJS
var thai = require('thai-convert');
thai.bahtText(138);
```

```js
// ES6 modules
import { bahtText } from 'thai-convert';
```

## พัฒนา

```bash
npm install
npm test     # build ทั้ง ES5 และ ES6 แล้วรันเทส
npm run build
```

## License

MIT
