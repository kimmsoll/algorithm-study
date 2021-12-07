const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = +input[0];

function getGcd(a, b) {
    const mod = a % b;
    if (mod === 0) {
        return b;
    }
    return getGcd(b, mod);
}

for(let i=1; i<n+1; i++){
    let arr = input[i].split(' ').slice(1).map(Number);
    let combinations = [];
    for(let j=0; j<arr.length-1; j++){
        for(let k=j+1; k<arr.length; k++){
            combinations.push(getGcd(arr[j], arr[k]));
        }
    }
    console.log(combinations.reduce((a,b)=>a+b));
}