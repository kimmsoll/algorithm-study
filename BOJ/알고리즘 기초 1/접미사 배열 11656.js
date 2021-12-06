// 9872 KB, 128 ms
const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();
let answer = [];

for(let i=0; i<input.length; i++){
    answer.push(input.slice(i));
}

answer.sort();
console.log(answer.join('\n'));


// 12208 KB, 140 ms
const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('');
let answer = [];

while(input.length){
    answer.push(input.join(''));
    input.shift();
}

answer.sort();
console.log(answer.join('\n'));