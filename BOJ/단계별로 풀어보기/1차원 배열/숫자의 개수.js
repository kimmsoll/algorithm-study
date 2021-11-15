const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let total = input[0]*input[1]*input[2];
total = String(total).split('');

for(let i=0; i<10; i++){
    let arr = total.filter(v => v == i);
    let answer = arr.length<1 ? 0 : arr.length;
    console.log(answer);
}