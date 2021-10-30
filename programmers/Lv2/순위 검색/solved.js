// 이분탐색과 조합을 이용하여 풀어야 효율성 테스트를 통과할 수 있는 문제다.
// ** 공부해서 다시 풀어볼 것

// 효율성 테스트를 통과하지 못함
function solution(info, query) {
    let result = [];
    info = info.map((i) => i.split(' '));
    query.forEach((q)=>{
        const question = q.replace(/\s+|(and)/g, " ").split(/\s+/g);
        const lang = question[0];
        const job = question[1];
        const career = question[2];
        const food = question[3];
        const score = Number(question[4]);
        let cnt = 0;
        info.map((i) => {
            if(lang === '-' || i[0] === lang){
                if(job === '-' || i[1] === job){
                    if(career === '-' || i[2] === career){
                        if(food === '-' || i[3] === food){
                            if(score <= Number(i[4])){
                                cnt++;
                            }
                        }
                    }
                }
            }
        })
        result.push(cnt);
    })
    return result;
}
// 정확성  테스트
// 테스트 1 〉	통과 (0.47ms, 30.4MB)
// 테스트 2 〉	통과 (0.42ms, 30.5MB)
// 테스트 3 〉	통과 (0.80ms, 30.2MB)
// 테스트 4 〉	통과 (4.89ms, 33.9MB)
// 테스트 5 〉	통과 (8.74ms, 34.2MB)
// 테스트 6 〉	통과 (15.45ms, 34.7MB)
// 테스트 7 〉	통과 (11.23ms, 34.7MB)
// 테스트 8 〉	통과 (31.32ms, 35.4MB)
// 테스트 9 〉	통과 (29.55ms, 36MB)
// 테스트 10 〉	통과 (36.18ms, 36.4MB)
// 테스트 11 〉	통과 (12.58ms, 34.4MB)
// 테스트 12 〉	통과 (15.54ms, 34.2MB)
// 테스트 13 〉	통과 (10.62ms, 34.3MB)
// 테스트 14 〉	통과 (31.20ms, 35.4MB)
// 테스트 15 〉	통과 (28.58ms, 36.1MB)
// 테스트 16 〉	통과 (8.73ms, 34.7MB)
// 테스트 17 〉	통과 (14.27ms, 34.5MB)

