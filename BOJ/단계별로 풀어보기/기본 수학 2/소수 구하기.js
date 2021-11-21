const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

let m = +input[0];
let n = +input[1];
let answer = '';

function isPrime(num){
    if(num === 1) return false;
    if(num === 2) return true;
    for(let i=2; i<=Math.floor(Math.sqrt(num)); i++){
        if(num % i === 0){
            return false; 
        }
    }
    return true; 
}

for(let i=m; i<n+1; i++){
    if(isPrime(i)){
        answer += i + '\n';
    }
}

console.log(answer);
