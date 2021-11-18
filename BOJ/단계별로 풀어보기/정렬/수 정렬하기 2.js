const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let arr = input.slice(1).map(Number);
