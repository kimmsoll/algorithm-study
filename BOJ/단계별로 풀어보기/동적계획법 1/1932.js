const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = +input[0];
let d = [];

for (let i=1; i<=n; i++) {
    d.push(input[i].split(' ').map(Number));
}

for (let i=1; i<n; i++) {
    for (let j=0; j<=i; j++) {
        let temp;
        if (j === 0) temp = d[i-1][j];
        else if (j === i) temp = d[i-1][j-1];
        else {
            temp = Math.max(d[i-1][j-1], d[i-1][j]);
        }
        d[i][j] += temp;
    }
}

console.log(Math.max(...d[n-1]));