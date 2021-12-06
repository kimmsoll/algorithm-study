const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

let a = input[0] + input[1];
let b = input[2] + input[3];

console.log(+a + +b);