import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

// Test every build: ES5 (CommonJS), ES6 (ES modules).
const builds = {
  es5: require('../dist/es5/index.js'),
  es6: await import('../dist/es6/index.js'),
};

const cases = [
  [0, 'ศูนย์บาทถ้วน'],
  [1, 'หนึ่งบาทถ้วน'],
  [11, 'สิบเอ็ดบาทถ้วน'],
  [21, 'ยี่สิบเอ็ดบาทถ้วน'],
  [101, 'หนึ่งร้อยเอ็ดบาทถ้วน'],
  [138, 'หนึ่งร้อยสามสิบแปดบาทถ้วน'],
  [1000, 'หนึ่งพันบาทถ้วน'],
  [1000000, 'หนึ่งล้านบาทถ้วน'],
  [1000001, 'หนึ่งล้านเอ็ดบาทถ้วน'],
  [2000000000, 'สองพันล้านบาทถ้วน'],
  [12.5, 'สิบสองบาทห้าสิบสตางค์'],
  [0.5, 'ห้าสิบสตางค์'],
  [0.01, 'หนึ่งสตางค์'],
  [-5, 'ลบห้าบาทถ้วน'],
  [-0.001, 'ศูนย์บาทถ้วน'],
];

for (const [name, mod] of Object.entries(builds)) {
  const bahtText = mod.bahtText;
  test(`${name}: bahtText converts amounts`, () => {
    for (const [input, expected] of cases) {
      assert.equal(bahtText(input), expected, `bahtText(${input})`);
    }
  });
}
