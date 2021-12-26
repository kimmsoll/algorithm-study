// https://www.acmicpc.net/problem/9095

const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
let n = input[0];
let arr = new Array(11).fill(0);

arr[1] = 1;
arr[2] = 2;
arr[3] = 4;

for(let i=4; i<11; i++){
    arr[i] = arr[i-1] + arr[i-2] + arr[i-3];
}

for(let i=1; i<=n; i++){
    console.log(arr[input[i]]);
}