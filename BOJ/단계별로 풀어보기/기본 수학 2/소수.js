const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let m = +input[0];
let n = +input[1];
let answer = [];

function isPrime(num){
    if(num === 1) return false;
    if(num === 2) return true;
    for(let i=2; i<=Math.floor(Math.sqrt(num)); i++){
        if(num%i === 0) return false;
    }
    return true;
}

for(let i=m; i<n+1; i++){
    if(isPrime(i)){
        answer.push(i);
    }
}

if(answer.length<1) console.log(-1);
else{
    console.log(answer.reduce((prev, curr)=>prev + curr));
    console.log(answer[0]);
}