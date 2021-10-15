function solution(s) {
    let arr = [];
    let temp = 0;
    let result = "";
    // 아스키 코드로 변경
    for(let i=0; i<s.length; i++){
        arr.push(s.charCodeAt(i));
    }
    // 내림차순 배열
    for(let i=0; i<s.length; i++){
        for(let j=i+1; j<s.length; j++){
            if(arr[i] < arr[j]){
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            } else {
                continue;
            }
        }
    }
    // 다시 알파벳으로 변환
    for(let i=0; i<s.length; i++){
        result += String.fromCharCode(arr[i]);
    }
    return result;
    
}
// 테스트 1 〉	통과 (0.17ms, 29.9MB)
// 테스트 2 〉	통과 (0.24ms, 30MB)
// 테스트 3 〉	통과 (0.14ms, 30.2MB)
// 테스트 4 〉	통과 (0.20ms, 30.1MB)
// 테스트 5 〉	통과 (2.94ms, 32.5MB)
// 테스트 6 〉	통과 (2.55ms, 32.9MB)
// 테스트 7 〉	통과 (0.19ms, 30MB)
// 테스트 8 〉	통과 (0.28ms, 30.3MB)
// 테스트 9 〉	통과 (0.38ms, 30MB)
// 테스트 10 〉	통과 (0.36ms, 30.2MB)
// 테스트 11 〉	통과 (0.20ms, 29.7MB)
// 테스트 12 〉	통과 (0.22ms, 30.1MB)
// 테스트 13 〉	통과 (0.21ms, 30.3MB)
// 테스트 14 〉	통과 (0.10ms, 30.1MB)
// 테스트 15 〉	통과 (0.08ms, 30.2MB)
// 테스트 16 〉	통과 (0.09ms, 29.9MB)


function solution(s){
    return s.split("").sort().reverse().join("");
}
// 테스트 1 〉	통과 (0.07ms, 30.4MB)
// 테스트 2 〉	통과 (0.05ms, 30.4MB)
// 테스트 3 〉	통과 (0.06ms, 30.3MB)
// 테스트 4 〉	통과 (0.05ms, 30.5MB)
// 테스트 5 〉	통과 (0.15ms, 30MB)
// 테스트 6 〉	통과 (0.10ms, 30.2MB)
// 테스트 7 〉	통과 (0.06ms, 30.2MB)
// 테스트 8 〉	통과 (0.06ms, 30.3MB)
// 테스트 9 〉	통과 (0.08ms, 30.4MB)
// 테스트 10 〉	통과 (0.06ms, 29.3MB)
// 테스트 11 〉	통과 (0.09ms, 29.3MB)
// 테스트 12 〉	통과 (0.06ms, 30.3MB)
// 테스트 13 〉	통과 (0.14ms, 30.3MB)
// 테스트 14 〉	통과 (0.08ms, 30.3MB)
// 테스트 15 〉	통과 (0.04ms, 30.2MB)
// 테스트 16 〉	통과 (0.06ms, 30.3MB)
