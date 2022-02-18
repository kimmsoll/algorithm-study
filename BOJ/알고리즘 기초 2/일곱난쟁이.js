const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
let sum = input.reduce((a,b)=>a+b);
let target = sum - 100;
let a;
let b;

for(let i=0; i<9; i++){
    for(let j=i+1; j<9; j++){
        if(input[i] + input[j] === target){
            a = input[i];
            b = input[j];
            break;
        }
    }
}

const arr = input.filter((v) => v !== a && v !== b);
console.log(arr.sort((a,b)=>a-b).join('\n'));

