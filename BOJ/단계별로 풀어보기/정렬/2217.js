const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
let n = input[0];
let arr = input.slice(1).sort((a, b) => a - b);
let result = [];

for (let i=n; i>0; i--) {
    result.push(arr[n-i] * i);
}

console.log(Math.max(...result));