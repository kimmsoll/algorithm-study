// 중복 순열

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number);
let n = input[0];
let m = input[1];

let nums = [];
for (let i=1; i<=n; i++) {
    nums.push(i);
}

const getPermutations = (arr, length) => {
    const result = [];
    if (length === 1) return arr.map((v) => [v]);
    arr.forEach((fixed, idx, origin) => {
        const rest = [...origin];
        const Permutations = getPermutations(rest, length - 1);
        const attached = Permutations.map((perm) => [fixed, ...perm]);
        result.push(...attached);
    });

    return result;
}

let answer = getPermutations(nums, m).map((v)=>v.join(' ')).join('\n');
console.log(answer);