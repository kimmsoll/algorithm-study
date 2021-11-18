const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let n = +input[0];
let arr = [];

for(let i=0; i<n; i++){
    let wh = input[i+1].split(' ').map(Number);
    arr.push([wh[0], wh[1]]);
}

arr.forEach(v => {
    let len = arr.filter(a => a[0]>v[0] && a[1]>v[1]).length;
    v.push(len+1);
})

arr = arr.map(v => v[2]);
console.log(arr.join(' '));