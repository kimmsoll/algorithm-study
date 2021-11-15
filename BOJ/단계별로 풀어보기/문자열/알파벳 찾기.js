const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();

let alphabets = '';
for(let i=97; i<123; i++){
    alphabets += String.fromCharCode(i);
}

let answer = '';
for(let a of alphabets){
    answer += input.indexOf(a) + ' ';
}

console.log(answer.slice(0,-1));