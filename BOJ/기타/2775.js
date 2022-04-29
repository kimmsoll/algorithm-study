const fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(Number);
let tc = input.shift();

let d = Array.from(Array(15), () => new Array(15).fill(0));

for (let i=1; i<15; i++) {
    d[0][i] = i;
}

while(input.length) {
    let k = input.shift();
    let n = input.shift();

    for (let i=1; i<=k; i++) {
        for (let j=1; j<=n; j++) {
            d[i][j] = d[i-1][j] + d[i][j-1];
        }
    }

    console.log(d[k][n]);
}