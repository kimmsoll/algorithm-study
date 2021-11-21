const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n').map(Number);
let answer = '';

function isPrime(num){
    if(num === 2) return true;
    if(num === 3) return true;
    for(let i=2; i<=Math.floor(Math.sqrt(num)); i++){
        if(num % i === 0){
            return false; 
        }
    }
    return true; 
}

for(let v of input){
    if(v === 0) break;
    let cnt = 0;
    for(let i=v+1; i<=2*v; i++){
        let value = isPrime(i);
        if(value) cnt++;
    }
    answer += cnt + '\n';
};

console.log(answer);

