const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let testCnt = +input[0];

for(let i=0; i<testCnt; i++){
    let arr = input[i+1].split(' ');
    let n = +arr[0];
    let str = arr[1];
    let answer = '';
    for(let c of str){
        answer += c.repeat(n);
    }
    console.log(answer);
}