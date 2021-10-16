function solution(arr, d) {
    arr = arr.filter((a)=>a%d === 0);
    if(arr.length<1){
        return [-1];
    };
    return arr.sort((a,b)=>a-b);
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.10ms, 30.3MB)
// 테스트 2 〉	통과 (0.07ms, 30.2MB)
// 테스트 3 〉	통과 (0.08ms, 30.6MB)
// 테스트 4 〉	통과 (0.21ms, 30.3MB)
// 테스트 5 〉	통과 (0.11ms, 30.3MB)
// 테스트 6 〉	통과 (2.39ms, 33.5MB)
// 테스트 7 〉	통과 (0.18ms, 30.1MB)
// 테스트 8 〉	통과 (0.05ms, 30.3MB)
// 테스트 9 〉	통과 (0.19ms, 30.3MB)
// 테스트 10 〉	통과 (0.15ms, 30.7MB)
// 테스트 11 〉	통과 (0.09ms, 30.4MB)
// 테스트 12 〉	통과 (0.09ms, 30.4MB)
// 테스트 13 〉	통과 (0.23ms, 30.2MB)
// 테스트 14 〉	통과 (0.23ms, 30.6MB)
// 테스트 15 〉	통과 (0.15ms, 30.4MB)
// 테스트 16 〉	통과 (0.10ms, 30MB)

// 반복문으로 풀기
function solution(arr, d) {
    let result = [];
    let temp = 0;
    for(let a of arr){
        if (a%d === 0){
            result.push(a);
        }
    }
    if(result.length < 1){
        return [-1];
    }
    for(let i=0; i<result.length; i++){
        for(let j=i+1; j<result.length; j++){
            if(result[i]>result[j]){
                temp = result[i];
                result[i] = result[j];
                result[j] = temp;
            }
        }
    }
    return result;
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.09ms, 29.7MB)
// 테스트 2 〉	통과 (0.08ms, 30MB)
// 테스트 3 〉	통과 (0.22ms, 30.1MB)
// 테스트 4 〉	통과 (0.16ms, 30.1MB)
// 테스트 5 〉	통과 (0.33ms, 30.3MB)
// 테스트 6 〉	통과 (4.13ms, 35.9MB)
// 테스트 7 〉	통과 (0.44ms, 29.9MB)
// 테스트 8 〉	통과 (0.11ms, 30MB)
// 테스트 9 〉	통과 (0.24ms, 30.2MB)
// 테스트 10 〉	통과 (2.68ms, 32.7MB)
// 테스트 11 〉	통과 (0.20ms, 30MB)
// 테스트 12 〉	통과 (0.17ms, 30.1MB)
// 테스트 13 〉	통과 (0.40ms, 30.2MB)
// 테스트 14 〉	통과 (0.59ms, 30.2MB)
// 테스트 15 〉	통과 (0.32ms, 30.4MB)
// 테스트 16 〉	통과 (0.20ms, 30MB)
