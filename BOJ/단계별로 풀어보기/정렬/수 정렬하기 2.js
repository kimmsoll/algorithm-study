const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let arr = input.slice(1).map(Number);
arr.sort((a,b)=>a-b);
let answer = '';

for(let a of arr){
    answer += a + '\n';
}

console.log(answer);