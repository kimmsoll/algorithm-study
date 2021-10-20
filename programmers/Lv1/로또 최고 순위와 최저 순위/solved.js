function solution(lottos, win_nums) {
    const scores = [6,6,5,4,3,2,1];
    let zero_cnt = 0;
    let win_cnt = 0;
    for(let a of lottos){
        if(a === 0) zero_cnt++;
    }
    for(let a of lottos){
        if(win_nums.includes(a)) win_cnt++;
    }
    return [scores[win_cnt+zero_cnt], scores[win_cnt]];
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.13ms, 30.4MB)
// 테스트 2 〉	통과 (0.10ms, 30.4MB)
// 테스트 3 〉	통과 (0.07ms, 30.1MB)
// 테스트 4 〉	통과 (0.07ms, 30.4MB)
// 테스트 5 〉	통과 (0.10ms, 30.3MB)
// 테스트 6 〉	통과 (0.07ms, 30.2MB)
// 테스트 7 〉	통과 (0.12ms, 30.4MB)
// 테스트 8 〉	통과 (0.07ms, 30.3MB)
// 테스트 9 〉	통과 (0.07ms, 30.1MB)
// 테스트 10 〉	통과 (0.07ms, 30.2MB)
// 테스트 11 〉	통과 (0.10ms, 30.3MB)
// 테스트 12 〉	통과 (0.06ms, 30.3MB)
// 테스트 13 〉	통과 (0.07ms, 30.5MB)
// 테스트 14 〉	통과 (0.06ms, 30.2MB)
// 테스트 15 〉	통과 (0.07ms, 30.4MB)