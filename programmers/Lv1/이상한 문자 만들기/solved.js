function solution(s) {
    let arr = s.split(" ");
    let answer = "";
    arr.forEach(item => {
        item = item.split("");
        item.map((a, idx)=>{
            if(idx%2 === 0 && a !== " "){
                answer += a.toUpperCase();
            }else if(idx%2 !== 0 && a !== " "){
                answer += a.toLowerCase();
            }else if(a === " "){
                answer += " ";
            }
        })
        answer += " ";
    });
    // 여러 개의 공백 하나로 치환
    answer.replace(/ +/g, " ");
    // trimEnd()를 썼더니 에러가 나고, slice 를 쓰니까 통과가 됐다.
    return answer.slice(0,-1);
}
// 정확성  테스트
// 테스트 1 〉	통과 (0.31ms, 30.2MB)
// 테스트 2 〉	통과 (0.32ms, 30.4MB)
// 테스트 3 〉	통과 (0.42ms, 30.3MB)
// 테스트 4 〉	통과 (0.36ms, 30.4MB)
// 테스트 5 〉	통과 (0.35ms, 30.2MB)
// 테스트 6 〉	통과 (0.31ms, 30.3MB)
// 테스트 7 〉	통과 (0.18ms, 30.3MB)
// 테스트 8 〉	통과 (0.36ms, 30.2MB)
// 테스트 9 〉	통과 (0.32ms, 30.2MB)
// 테스트 10 〉	통과 (0.37ms, 30.2MB)
// 테스트 11 〉	통과 (0.35ms, 30.4MB)
// 테스트 12 〉	통과 (0.38ms, 30.2MB)
// 테스트 13 〉	통과 (0.34ms, 30.2MB)
// 테스트 14 〉	통과 (0.30ms, 30.4MB)
// 테스트 15 〉	통과 (0.33ms, 30.4MB)
// 테스트 16 〉	통과 (0.34ms, 30.1MB)
