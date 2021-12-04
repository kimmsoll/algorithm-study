const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = +input[0];
const arr = input[1].split(' ').map(Number);

let result = new Array(n).fill(-1);
let cntObj = {};
let stack = [];

for(let v of arr){
    if(cntObj[v]) cntObj[v]++;
    else cntObj[v] = 1;
}

for (let i=0; i<arr.length; i++) {
    while(stack.length > 0 && cntObj[arr[stack[stack.length - 1]]] < cntObj[arr[i]]) {
        result[stack.pop()] = arr[i];
    }
    stack.push(i);
}

console.log(result.join(' '));