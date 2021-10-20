function solution(n, stages) {
    let answer = [];
    let arrive = 0;
    let clear = 0;
    const all_length = stages.length;
    stages.sort((a,b)=>a-b);
    // 반복문을 돌면서 한번에 도달, 클리어 수를 확인한다
    for(let i=1; i<=n; i++){
        for(let j=0; j<all_length; j++){
            if(stages[j]>=i) arrive++;
            if(stages[j]>i) clear++;
        }
        let lose = arrive<1 && clear<1 ? 0 : (arrive-clear)/arrive;
        answer.push([i, lose]);
        arrive = 0;
        clear = 0;
    }
    answer.sort((a,b)=>b[1]-a[1] || a[0]-b[0]);
    return answer.map((a)=>a[0]);
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.16ms, 30MB)
// 테스트 2 〉	통과 (0.80ms, 30.2MB)
// 테스트 3 〉	통과 (19.58ms, 32.4MB)
// 테스트 4 〉	통과 (89.40ms, 36.7MB)
// 테스트 5 〉	통과 (303.05ms, 42.6MB)
// 테스트 6 〉	통과 (5.78ms, 32.8MB)
// 테스트 7 〉	통과 (14.89ms, 32.2MB)
// 테스트 8 〉	통과 (84.58ms, 36.6MB)
// 테스트 9 〉	통과 (279.76ms, 42MB)
// 테스트 10 〉	통과 (51.39ms, 36.6MB)



function solution(n, stages) {
    let answer = [];
    let all_length = stages.length;
    stages.sort((a,b)=>a-b);
    for(let i=1; i<=n; i++){
        // filter 문을 사용하여 두 번 돌기 때문에 느리다!
        let arrive = stages.filter((a)=>a>=i).length;
        let clear = stages.filter((a)=>a>i).length;
        let lose = arrive<1 && clear<1 ? 0 : (arrive-clear)/arrive;
        answer.push([i, lose]);   
    }
    answer.sort((a,b)=>b[1]-a[1] || a[0]-b[0]);
    return answer.map((a)=>a[0]);
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.19ms, 30.2MB)
// 테스트 2 〉	통과 (1.02ms, 30.4MB)
// 테스트 3 〉	통과 (177.50ms, 38.6MB)
// 테스트 4 〉	통과 (1194.95ms, 66.8MB)
// 테스트 5 〉	통과 (5446.03ms, 75MB)
// 테스트 6 〉	통과 (5.47ms, 32.7MB)
// 테스트 7 〉	통과 (37.40ms, 34.4MB)
// 테스트 8 〉	통과 (1355.61ms, 72.3MB)
// 테스트 9 〉	통과 (5305.26ms, 76.5MB)
// 테스트 10 〉	통과 (516.57ms, 56.1MB)
