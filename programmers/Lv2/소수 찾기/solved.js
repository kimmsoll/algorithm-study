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
function check(num) {
    for(let n=2; n<=Math.floor(Math.sqrt(num)); n++){
        if(num % n === 0) return false;
    }
    return true;
}

function solution(numbers) {
    let arr = numbers.split('');
    let permutations = [];
    let cnt = 0;
    // 순열 구하기
    for(let i=1; i<=numbers.length; i++){
        permutations.push(...getPermutations(arr,i));
    }
    // 소수 판별할 숫자들로 매핑
    permutations = permutations.filter((a)=>{
        return (a.length>1 && a[0] !== "0") || (a.length === 1 && a[0] > 1)
    }).map((a)=>Number(a.join('')));
    
    // 중복 제거 후 소수 판별
    let set = new Set(permutations);
    set.forEach((num)=>{if(check(num)) cnt++;});
    return cnt;
}