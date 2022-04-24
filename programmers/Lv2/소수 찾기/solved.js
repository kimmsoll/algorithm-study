// 순열 구하기
const getPermutations= function (arr, length) {
    const result = [];
    if (length === 1) return arr.map((value) => [value]);
    arr.forEach((fixed, idx, origin) => {
        const rest = [...origin.slice(0, idx), ...origin.slice(idx+1)]
        const permutations = getPermutations(rest, length - 1);
        const attached = permutations.map((permutation) => [fixed, ...permutation]);
        result.push(...attached);
    });
    return result;
};

// 소수 판별
function isPrime(num){
    if(num <= 1) return false;
    if(num === 2) return true;
    for(let i=2; i<=Math.floor(Math.sqrt(num)); i++){
        if(num % i === 0){
            return false; 
        }
    }
    return true; 
}

function solution(numbers) {
    const len = numbers.length;
    let nums = [];
    for(let i=1; i<=len; i++){
        nums.push(...getPermutations(numbers.split(''), i).map((v) => +v.join('')));
    }
    nums = Array.from(new Set(nums));
    return nums.filter((v) => isPrime(v)).length;
}
