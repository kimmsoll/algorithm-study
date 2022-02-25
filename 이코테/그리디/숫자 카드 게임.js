const n = 3;
const m = 3;
let maxNum = 0;

const arr = [
    [3, 1, 2],
    [4, 1, 4],
    [2, 2, 2]
];

for(let i=0; i<arr.length; i++){
    const minNum = Math.min(...arr[i]);
    maxNum = (maxNum, minNum);
}

console.log(maxNum);