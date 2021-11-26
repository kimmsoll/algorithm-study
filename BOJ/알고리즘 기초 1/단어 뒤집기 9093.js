const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = +input[0];

for(let i=1; i<=n; i++){
    let arr = input[i].split(' ');
    arr = arr.map(str => str.split('').reverse().join(''));
    console.log(arr.join(' '));
}