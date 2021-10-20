function solution(d, budget) {
    d.sort((a,b)=>a-b);
    let cnt = 0;
    for(let i=0; i<d.length; i++){
        if(budget >= d[i]){
            budget -= d[i];
            cnt++;
        }else if(budget < d[i]){
            return cnt;
        }
    }
    return cnt;
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.05ms, 30.1MB)
// 테스트 2 〉	통과 (0.08ms, 30.1MB)
// 테스트 3 〉	통과 (0.06ms, 30.4MB)
// 테스트 4 〉	통과 (0.06ms, 30MB)
// 테스트 5 〉	통과 (0.08ms, 30.3MB)
// 테스트 6 〉	통과 (0.08ms, 30.3MB)
// 테스트 7 〉	통과 (0.15ms, 30MB)
// 테스트 8 〉	통과 (0.11ms, 30.1MB)
// 테스트 9 〉	통과 (0.12ms, 30.1MB)
// 테스트 10 〉	통과 (0.10ms, 30.2MB)


// forEach 사용 풀이
function solution(d, budget) {
    let cnt = 0;
    let money = 0;
    d.sort((a,b) => a-b).forEach(function(val){
        money += val;
        if(money <= budget){
            cnt++;    
        }

    })
    return cnt;
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.06ms, 30.4MB)
// 테스트 2 〉	통과 (0.07ms, 30MB)
// 테스트 3 〉	통과 (0.07ms, 30.4MB)
// 테스트 4 〉	통과 (0.12ms, 30.1MB)
// 테스트 5 〉	통과 (0.09ms, 30.5MB)
// 테스트 6 〉	통과 (0.07ms, 30.3MB)
// 테스트 7 〉	통과 (0.09ms, 30.3MB)
// 테스트 8 〉	통과 (0.11ms, 30.3MB)
// 테스트 9 〉	통과 (0.11ms, 30.4MB)
// 테스트 10 〉	통과 (0.19ms, 30.2MB)