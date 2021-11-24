const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

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

for(let i=1; i <= +input[0]; i++){
    let n = +input[i];
    let a = n/2;
    let b = n/2;
    while(true){
        if(isPrime(a) && isPrime(b)){
            break;
        }else{
            a -= 1;
            b += 1;
        }
    }
    console.log(`${a} ${b}`);
}