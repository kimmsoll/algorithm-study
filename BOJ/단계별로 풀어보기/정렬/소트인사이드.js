const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

let arr = input.split('').map(Number);
arr.sort((a,b)=>b-a);

console.log(Number(arr.join('')));