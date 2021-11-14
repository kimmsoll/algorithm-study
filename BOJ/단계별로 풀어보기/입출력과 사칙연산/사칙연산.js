const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');
const a = +input[0];
const b = +input[1];
console.log(`${a+b}
${a-b}
${a*b}
${Math.floor(a/b)}
${a%b}`);