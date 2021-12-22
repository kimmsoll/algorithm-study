const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
let sum = input.reduce((a,b) => a+b);
let findNum = sum - 100;
let a;
let b;

for(let i=0; i<input.length; i++){
    for(let j=i+1; j<input.length; j++){
        if(input[i]+input[j] === findNum){
            a = input[i];
            b = input[j];
            break;
        }
    }
}

input = input.filter((v) => v !== a && v !== b);
console.log(input.sort((a,b) => a-b).join('\n'));
