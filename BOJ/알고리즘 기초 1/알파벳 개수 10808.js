const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('');
let answer = '';

let arr = new Array(26).fill(0).map((v,idx) => v = String.fromCharCode(idx+97));

let cntObj = {};
for(let v of input){
    if(cntObj[v]){
        cntObj[v]++;
    }else{
        cntObj[v] = 1;
    }
}

for(let v of arr){
    if(cntObj[v]){
        answer += cntObj[v] + ' ';
    }else{
        answer += '0 ';
    }
}

console.log(answer.slice(0,-1));
