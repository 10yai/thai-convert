const DIGITS = ['', 'หนึ่ง', 'สอง', 'สาม', 'สี่', 'ห้า', 'หก', 'เจ็ด', 'แปด', 'เก้า'];
const PLACES = ['', 'สิบ', 'ร้อย', 'พัน', 'หมื่น', 'แสน'];

/** Thai words for 0 < n < 1,000,000, e.g. 21 → "ยี่สิบเอ็ด". */
function belowMillion(n: number): string {
  const s = String(n);
  let out = '';
  for (let i = 0; i < s.length; i++) {
    const d = Number(s[i]);
    const place = s.length - 1 - i;
    if (d === 0) continue;
    if (place === 1 && d === 1) out += 'สิบ';
    else if (place === 1 && d === 2) out += 'ยี่สิบ';
    else if (place === 0 && d === 1 && s.length > 1) out += 'เอ็ด';
    else out += DIGITS[d] + PLACES[place];
  }
  return out;
}

/** Thai words for a whole number, e.g. 1_000_001 → "หนึ่งล้านเอ็ด". */
function integerText(n: number): string {
  if (n === 0) return 'ศูนย์';
  const millions = Math.floor(n / 1000000);
  const rest = n % 1000000;
  let out = millions > 0 ? integerText(millions) + 'ล้าน' : '';
  if (rest > 0) {
    // "เอ็ด" for a trailing 1 only when something comes before it.
    out += rest === 1 && millions > 0 ? 'เอ็ด' : belowMillion(rest);
  }
  return out;
}

/**
 * A THB amount as printed on Thai receipts.
 *
 * @example
 * bahtText(138)   // "หนึ่งร้อยสามสิบแปดบาทถ้วน"
 * bahtText(12.5)  // "สิบสองบาทห้าสิบสตางค์"
 */
export function bahtText(amount: number): string {
  const satang = Math.round(Math.abs(amount) * 100);
  const baht = Math.floor(satang / 100);
  const st = satang % 100;
  const prefix = amount < 0 && satang > 0 ? 'ลบ' : '';
  if (st === 0) return `${prefix}${integerText(baht)}บาทถ้วน`;
  return `${prefix}${baht > 0 ? integerText(baht) + 'บาท' : ''}${integerText(st)}สตางค์`;
}
