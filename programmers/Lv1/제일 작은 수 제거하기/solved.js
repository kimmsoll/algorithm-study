function solution(arr) {
    let arrLen = arr.length;
    if(arrLen === 1) return [-1];
    for(let i=0; i< arrLen; i++){
        for(let j=i+1; j< arrLen; j++){
            if(arr[i] > arr[j]){
            i=j;
            }
        }
        arr.splice(i,1)
        return arr;
}
}
// 정확성  테스트
// 테스트 1 〉	통과 (2.39ms, 37.1MB)
// 테스트 2 〉	통과 (0.07ms, 30.6MB)
// 테스트 3 〉	통과 (0.07ms, 30.4MB)
// 테스트 4 〉	통과 (0.09ms, 30.4MB)
// 테스트 5 〉	통과 (0.06ms, 30.5MB)
// 테스트 6 〉	통과 (0.08ms, 30.6MB)
// 테스트 7 〉	통과 (0.09ms, 30.3MB)
// 테스트 8 〉	통과 (0.11ms, 30.4MB)
// 테스트 9 〉	통과 (0.06ms, 30.3MB)
// 테스트 10 〉	통과 (0.05ms, 30.4MB)
// 테스트 11 〉	통과 (0.06ms, 30.3MB)
// 테스트 12 〉	통과 (0.06ms, 30.4MB)
// 테스트 13 〉	통과 (0.08ms, 30.5MB)
// 테스트 14 〉	통과 (0.09ms, 30.6MB)
// 테스트 15 〉	통과 (0.06ms, 30.6MB)
// 테스트 16 〉	통과 (0.09ms, 30.4MB)

// Math.min 사용

function solution(arr) {
    if(arr.length === 1){
        return [-1];
    }
    const minNum = Math.min(...arr);
    const idx = arr.indexOf(minNum);
    arr.splice(idx, 1);
    return arr;
    
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.61ms, 37.3MB)
// 테스트 2 〉	통과 (0.05ms, 30.5MB)
// 테스트 3 〉	통과 (0.06ms, 30.6MB)
// 테스트 4 〉	통과 (0.05ms, 30.5MB)
// 테스트 5 〉	통과 (0.05ms, 30.6MB)
// 테스트 6 〉	통과 (0.10ms, 30.4MB)
// 테스트 7 〉	통과 (0.11ms, 30.3MB)
// 테스트 8 〉	통과 (0.05ms, 30.1MB)
// 테스트 9 〉	통과 (0.05ms, 30.2MB)
// 테스트 10 〉	통과 (0.04ms, 30MB)
// 테스트 11 〉	통과 (0.04ms, 30.1MB)
// 테스트 12 〉	통과 (0.04ms, 30.3MB)
// 테스트 13 〉	통과 (0.04ms, 30.5MB)
// 테스트 14 〉	통과 (0.04ms, 30.5MB)
// 테스트 15 〉	통과 (0.04ms, 30.3MB)
// 테스트 16 〉	통과 (0.04ms, 30.6MB)