let arr = [1,3,1,5];
let d = Array(10).fill(0);
d[0] = arr[0]
d[1] = Math.max(arr[0], arr[1]);

for(let i=2; i<4; i++){
    d[i] = Math.max(d[i-1], d[i-2]+arr[i]);
}

console.log(d[3]);