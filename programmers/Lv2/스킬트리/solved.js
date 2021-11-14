// 1차 풀이
function solution(skill, skill_trees) {
    let answer = skill_trees.map((s) => {
        return s.split('').filter((v) => skill.includes(v))})
        .map((arr) => arr.join(''));
    answer = answer.filter(v => {
        for(let i=0; i<v.length; i++){
            if(v[i] !== skill[i]) return false;
        }
        return true;
    });
    return answer.length;
}
// 테스트 1 〉	통과 (0.11ms, 30.2MB)
// 테스트 2 〉	통과 (0.12ms, 30.1MB)
// 테스트 3 〉	통과 (0.14ms, 30.3MB)
// 테스트 4 〉	통과 (0.11ms, 30.3MB)
// 테스트 5 〉	통과 (0.12ms, 30.3MB)
// 테스트 6 〉	통과 (0.14ms, 30.1MB)
// 테스트 7 〉	통과 (0.14ms, 30.2MB)
// 테스트 8 〉	통과 (0.15ms, 30.2MB)
// 테스트 9 〉	통과 (0.11ms, 30.2MB)



// 정규식 사용 풀이
function solution(skill, skill_trees) {
    let regex = new RegExp(`[^${skill}]`, 'g');
    let arr = skill_trees.map((s) => s.replace(regex, ''));
    return arr.filter((v) => skill.indexOf(v) === 0).length;
}
// 테스트 1 〉	통과 (0.19ms, 30.3MB)
// 테스트 2 〉	통과 (0.26ms, 30.6MB)
// 테스트 3 〉	통과 (0.19ms, 30MB)
// 테스트 4 〉	통과 (0.25ms, 30.3MB)
// 테스트 5 〉	통과 (0.14ms, 30.4MB)
// 테스트 6 〉	통과 (0.25ms, 30.3MB)
// 테스트 7 〉	통과 (0.17ms, 30.2MB)
// 테스트 8 〉	통과 (0.28ms, 30.4MB)
// 테스트 9 〉	통과 (0.25ms, 30.4MB)