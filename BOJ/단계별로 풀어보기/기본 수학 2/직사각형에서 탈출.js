const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

let minWidth = Math.min(input[2]-input[0], +input[0]);
let minHeight = Math.min(input[3]-input[1], +input[1]);
console.log(Math.min(minWidth, minHeight));