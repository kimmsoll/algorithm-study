const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const arr = new Array(26).fill(0).map((v,idx) => v = String.fromCharCode(idx+97));
let answer = '';

for(let v of arr){
    answer += `${input.indexOf(v)} `;
}

console.log(answer.trim());