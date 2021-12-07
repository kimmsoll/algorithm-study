const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0].split(' ')[1]);
let arr = input[1].split(' ').map(Number);
arr = arr.map(v => Math.abs(n - v));
let gcd;

function getGcd(a, b) {
    const mod = a % b;
    if (mod === 0) {
        return b;
    }
    return getGcd(b, mod);
}

if(arr.length === 1){
    console.log(arr[0]);
}else{
    gcd = getGcd(arr.pop(), arr.pop());
    while(arr.length>0){
        gcd = getGcd(gcd, arr.pop());
    }
    console.log(gcd);
}