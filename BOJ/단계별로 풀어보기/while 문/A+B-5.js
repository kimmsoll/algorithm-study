const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let answer = '';

for(let i=0; i<input.length; i++){
    let nums = input[i].split(' ');
    let a = +nums[0];
    let b = +nums[1];
    if(a !== 0 && b !== 0){
        answer += a+b + '\n';
    }else break;
}

console.log(answer);