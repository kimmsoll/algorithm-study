const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let d = [];

for(let i =0; i<=20; i++){
    d[i]=[];
    for(let j =0; j<=20; j++){
        d[i][j]=[];
        for(let k=0; k<=20; k++){
            d[i][j][k]=0;
        }
    }
}

function w(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0) {
        return 1;
    }
    if (a > 20 || b > 20 || c > 20) {
        return w(20, 20, 20);
    }
    if (d[a][b][c] !== 0) {
        return d[a][b][c];
    }
    if (a < b && b < c) {
        let e1 = d[a][b][c-1] = w(a, b, c-1);
        let e2 = d[a][b-1][c-1] = w(a, b-1, c-1);
        let e3 = d[a][b-1][c] = w(a, b-1, c);
        return d[a][b][c] = e1 + e2 - e3;
    }

    let e1 = d[a-1][b][c] = w(a-1, b, c);
    let e2 = d[a-1][b-1][c] = w(a-1, b-1, c);
    let e3 = d[a-1][b][c-1] = w(a-1, b, c-1);
    let e4 = d[a-1][b-1][c-1] = w(a-1, b-1, c-1);
    return d[a][b][c] = e1 + e2 + e3 - e4;
}

function main() {
    for (let i=0; i<input.length-1; i++) {
        let [a, b, c] = input[i].split(' ').map(Number);
        console.log(`w(${a}, ${b}, ${c}) = ${w(a, b, c)}`);
    }
}

main();