// 시간 초과 - 제한시간 0.15초를 통과하지 못함
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

let a = +input[0];
let b = +input[1];
let v = +input[2];
let height = 0;
let day = 1;

while(a+height < v){
    day++;
    height += a - b;
}
console.log(day);

// ** 해결 코드
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

let a = +input[0];
let b = +input[1];
let v = +input[2];

console.log(Math.ceil((v-b)/(a-b)));