function solution(answers) {
    const stu_1 = [1, 2, 3, 4, 5];
    const stu_2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const stu_3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let score_1 = 0;
    let score_2 = 0;
    let score_3 = 0;
    let result = [];
    answers.forEach((a, idx) => {
        if(a === stu_1[idx%5]) score_1++;
        if(a === stu_2[idx%8]) score_2++;
        if(a === stu_3[idx%10]) score_3++;
    });
    const max = Math.max(score_1, score_2, score_3);
    if(score_1 === max) result.push(1);
    if(score_2 === max) result.push(2);
    if(score_3 === max) result.push(3);
    return result;
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.08ms, 30.2MB)
// 테스트 2 〉	통과 (0.10ms, 30.1MB)
// 테스트 3 〉	통과 (0.11ms, 30.4MB)
// 테스트 4 〉	통과 (0.08ms, 30.3MB)
// 테스트 5 〉	통과 (0.10ms, 30.2MB)
// 테스트 6 〉	통과 (0.09ms, 30.1MB)
// 테스트 7 〉	통과 (0.68ms, 30.3MB)
// 테스트 8 〉	통과 (0.30ms, 30.2MB)
// 테스트 9 〉	통과 (1.80ms, 33MB)
// 테스트 10 〉	통과 (0.52ms, 30.3MB)

function solution(answers) {
    const stu_1 = [1, 2, 3, 4, 5];
    const stu_2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const stu_3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let scores = [0, 0, 0];
    let result = [];
    answers.forEach((a, idx) => {
        if(a === stu_1[idx%5]) scores[0]++;
        if(a === stu_2[idx%8]) scores[1]++;
        if(a === stu_3[idx%10]) scores[2]++;
    });
    const max = Math.max(scores[0], scores[1], scores[2]);
    for(let i=0; i<3; i++){
        if(scores[i] === max){
            result.push(i+1);
        }
    }
    return result;
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.11ms, 30MB)
// 테스트 2 〉	통과 (0.08ms, 30.2MB)
// 테스트 3 〉	통과 (0.13ms, 30.2MB)
// 테스트 4 〉	통과 (0.13ms, 30.3MB)
// 테스트 5 〉	통과 (0.13ms, 30.3MB)
// 테스트 6 〉	통과 (0.11ms, 30.5MB)
// 테스트 7 〉	통과 (0.68ms, 30.3MB)
// 테스트 8 〉	통과 (0.34ms, 30.1MB)
// 테스트 9 〉	통과 (1.97ms, 32.2MB)
// 테스트 10 〉	통과 (0.62ms, 30.3MB)



