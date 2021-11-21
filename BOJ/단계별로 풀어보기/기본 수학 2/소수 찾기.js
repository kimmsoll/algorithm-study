const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let arr = input[1].split(' ').map(Number);
let cnt = 0;

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

arr.forEach(v => {
    if(isPrime(v)){
        cnt++;
    }
});

console.log(cnt);