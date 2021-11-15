const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n').map(Number);

let max = [...input].sort((a,b)=>b-a)[0];
let idx = input.indexOf(max);
console.log(`${max}\n${idx+1}`);
