// 유클리드 기하학과 택시 기하학의 차이
https://m.blog.naver.com/alwaysneoi/100172516753

// 유클리드 기하학 원의 너비 = Math.PI * r * r
// 택시 기하학 원의 너비 = 2 * r * r

const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();
let r = +input;

console.log((Math.PI * Math.pow(r, 2)).toFixed(6));
console.log((2 * Math.pow(r, 2)).toFixed(6));
