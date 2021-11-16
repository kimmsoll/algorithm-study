const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');
let fixed = +input[0];
let change = +input[1];
let price = +input[2];

let cnt = Math.floor(fixed / (price - change)) +1;
let answer = (price - change) <= 0 ? -1 : cnt;

console.log(answer);