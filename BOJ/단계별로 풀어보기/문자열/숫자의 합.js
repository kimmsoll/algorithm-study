const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let arr = input[1].split('').map(Number);

console.log(arr.reduce((prev, curr) => prev+curr));
