function solution(s, n) {
    let result = "";
    for(let a of s){
        if(a === " "){
            result += a;
        }else if(a.toUpperCase() === a){
            const idx = s.indexOf(a);
            result += String.fromCharCode((s.charCodeAt(idx)+n-65)%26+65);
        }else if(a.toLowerCase() === a){
            const idx = s.indexOf(a);
            result += String.fromCharCode((s.charCodeAt(idx)+n-97)%26+97);
        }
    }
    return result;
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.09ms, 30.3MB)
// 테스트 2 〉	통과 (0.09ms, 30.3MB)
// 테스트 3 〉	통과 (0.09ms, 30.3MB)
// 테스트 4 〉	통과 (0.12ms, 30.3MB)
// 테스트 5 〉	통과 (0.10ms, 30.2MB)
// 테스트 6 〉	통과 (0.12ms, 30.3MB)
// 테스트 7 〉	통과 (0.08ms, 30.4MB)
// 테스트 8 〉	통과 (0.11ms, 30.2MB)
// 테스트 9 〉	통과 (0.09ms, 30.2MB)
// 테스트 10 〉	통과 (0.13ms, 30.2MB)
// 테스트 11 〉	통과 (0.10ms, 30.4MB)
// 테스트 12 〉	통과 (0.17ms, 30.1MB)
// 테스트 13 〉	통과 (7.43ms, 33.6MB)
