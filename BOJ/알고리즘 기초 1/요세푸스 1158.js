const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const n = +input[0];
const k = +input[1];
let answer = '<';
let arr = Array.from(Array(n).fill(0)).map((v,idx)=>v=idx+1);

while(arr.length){
    for(let i=0; i<k; i++){
        arr.push(arr.shift());
    }
    if(arr.length === 1){
        answer += `${arr.pop()}>`;
    } else {
        answer += `${arr.pop()}, `;
    }
}

console.log(answer);