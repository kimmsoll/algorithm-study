const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let answer = '';

let graph = input.slice(1).map(v => v.split(' ').map(Number));
graph.sort((a,b) => a[1] - b[1] || a[0] - b[0]);

for(let v of graph){
    answer += v.join(' ') + '\n';
}

console.log(answer);