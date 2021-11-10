let n = 3;
let d = Array(10).fill(0);

d[1] = 1;
d[2] = 3;

for(let i=3; i<n+1; i++){
    d[i] = (d[i-1] + 2*d[i-2])%769769;
}

console.log(d[n]);