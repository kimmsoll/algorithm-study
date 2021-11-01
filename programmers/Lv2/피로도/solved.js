// 순열을 구한다
function getPermutations(arr, length) {
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

// 순열을 하나씩 돌면서 확인한다
function solution(k, dungeons) {
    let arr = dungeons.filter((dungeon)=>dungeon[0]<=k);
    let perm = getPermutations(arr, arr.length);
    let answer = 0;
    
    perm.forEach((dungeon)=>{
        let curr = k;
        let cnt = 0;
        dungeon.forEach((d)=>{
            if(curr>=d[0] && curr>=d[1]){
                curr -= d[1];
                cnt++;
            }
        });
        answer = Math.max(cnt, answer);
    });
    
    return answer;
}