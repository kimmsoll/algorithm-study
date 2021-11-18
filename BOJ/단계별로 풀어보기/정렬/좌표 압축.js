const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let arr = input[1].split(' ').map(Number);
let set = new Set(arr);
let sorted = Array.from(set).sort((a,b)=>a-b);
let obj = {};
let answer = '';

sorted.forEach((v, idx) => obj[v] = idx);

// obj 에서 값을 찾아내는 속도는 O(1)이므로,
// 배열에서 찾는 것보다 시간을 줄일 수 있다
for(let v of arr){
    answer += obj[v] + ' ';
}

console.log(answer);