// 중복 조합

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number);
let n = input[0];
let m = input[1];

let nums = [];
for (let i=1; i<=n; i++) {
    nums.push(i);
}

const getCombinations = (arr, length) => {
    const result = [];
    if (length === 1) return arr.map((v) => [v]);
    arr.forEach((fixed, idx, origin) => {
        const rest = [...origin.slice(idx)];
        const Combinations = getCombinations(rest, length - 1);
        const attached = Combinations.map((comb) => [fixed, ...comb]);
        result.push(...attached);
    });

    return result;
}

let answer = getCombinations(nums, m).map((v)=>v.join(' ')).join('\n');
console.log(answer);
