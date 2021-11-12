function getCombinationsRe(arr, length) {
    const result = [];
    if (length === 1) return arr.map((value) => [value]);
    arr.forEach((fixed, _, origin) => {
        const combinations = getCombinationsRe(origin, length - 1);
        const attached = combinations.map((combination) => [fixed, ...combination]);
        result.push(...attached);
    });
    return result;
}

// 조합을 구해서 오름차순 정렬 후 순서를 구하면 된다
function solution(word) {
    let combi = [];
    for(let i=1; i<6; i++){
        combi.push(...getCombinationsRe(['A','E','I','O','U'],i));
    }
    combi = combi.sort().map(v=>v.join(''));
    return combi.indexOf(word)+1;
}