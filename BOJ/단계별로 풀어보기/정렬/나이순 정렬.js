const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let n = +input[0];
let arr = input.slice(1).map(v => v.split(' '));

for(let i=0; i<n; i++){
    arr[i].push(i);
}

let answer = '';

arr.sort((a,b)=> {
    if(a[0] !== b[0]) return a[0] - b[0];
    else return a[2] - b[2];
});

for(let v of arr){
    answer += v.slice(0,-1).join(' ') + '\n';
}

console.log(answer);