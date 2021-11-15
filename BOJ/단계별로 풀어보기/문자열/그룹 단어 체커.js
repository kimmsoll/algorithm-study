const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let n = +input[0];
let answer = 0;
for(let i=0; i<n; i++){
    let curr = input[i+1];
    if(curr.length === 1){
        answer++;
        continue;
    }
    let kind = [];
    for(let j=0; j<curr.length; j++){
        if(kind[kind.length-1] !== curr[j]){
            kind.push(curr[j]);
        }
    }
    let set = new Set(kind);
    if(set.size === kind.length) answer++;
}

console.log(answer);