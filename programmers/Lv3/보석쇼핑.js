// 다시 풀어보기
// 모범 답안 - Map 사용, 투 포인터 사용! 훨씬 빠름!
function solution(gems) {
    let kinds = new Set(gems).size;
    let gemsMap = new Map();
    let answer = [0, gems.length];
    
    for (let i=0; i<gems.length; i++) {
        gemsMap.delete(gems[i]);
        gemsMap.set(gems[i], i);
        if (gemsMap.size === kinds) {
            let start = gemsMap.values().next().value;
            let end = i;
            if (end - start < answer[1] - answer[0]) {
                answer = [start+1, end+1];
            }
            gemsMap.delete(gems[start]);
        }
    }
    return answer;
}

// 시간초과
function solution(gems) {
    let kinds = new Set(gems);
    const n = kinds.size;
    const gemsLen = gems.length;
    if (n === 1) return [1, 1];
    if (n === gemsLen) return [1, n];
    
    for (let i=n; i <= gemsLen; i++) {
        for (let j=0; j <= gemsLen - i; j++) {
            let curr = new Set(gems.slice(j, j + i));
            if (curr.size === n) return [j+1, j+i];
        }
    }
}