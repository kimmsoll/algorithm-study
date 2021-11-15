const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n').map(Number);
const set = new Set();

for(let i=0; i<10; i++){
    let a = input[i]%42;
    set.add(a);
}

console.log(set.size);