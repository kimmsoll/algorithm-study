const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const arr = input.slice(1).map(Number).sort((a, b) => a - b);

function mean(nums) {
    return Math.round(nums.reduce((a, b) => a + b) / nums.length) == 0 ? 0 : Math.round(nums.reduce((a, b) => a + b) / nums.length);
}

function median(nums) {
    return nums[Math.floor(nums.length/2)];
}

function mode(nums) {
    if (nums.length === 1) return +nums[0];
    let countNums = new Map();
    nums.map((v) => {
        let prev = countNums.get(v);
        prev ? countNums.set(v, prev + 1) : countNums.set(v, 1);
    });
    countNums = Object.entries(Object.fromEntries(countNums))
    .sort((a, b) => b[1] - a[1]);
    if (countNums[0][1] !== countNums[1][1]) {
        return +countNums[0][0];
    } else {
        countNums = countNums.filter((v) => v[1] == countNums[0][1])
        .sort((a, b) => a[0] - b[0]);
        return +countNums[1][0];
    }
}

function range(nums) {
    if (nums.length === 1) return 0;
    let max = Math.max(...nums);
    let min = Math.min(...nums);
    return max - min;
}

console.log(mean(arr));
console.log(median(arr));
console.log(mode(arr));
console.log(range(arr));