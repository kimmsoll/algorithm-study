function solution(arr, n) {
    let temp = "";
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i][n] > arr[j][n]){
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }else if(arr[i][n] === arr[j][n]){
                if(arr[i] > arr[j]){
                    temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
    }
    return arr;
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.10ms, 29.9MB)
// 테스트 2 〉	통과 (0.06ms, 30MB)
// 테스트 3 〉	통과 (0.13ms, 30MB)
// 테스트 4 〉	통과 (0.17ms, 30MB)
// 테스트 5 〉	통과 (0.06ms, 29.9MB)
// 테스트 6 〉	통과 (0.17ms, 30.1MB)
// 테스트 7 〉	통과 (0.08ms, 29.9MB)
// 테스트 8 〉	통과 (0.09ms, 30MB)
// 테스트 9 〉	통과 (0.09ms, 29.7MB)
// 테스트 10 〉	통과 (0.26ms, 29.8MB)
// 테스트 11 〉	통과 (0.06ms, 29.8MB)
// 테스트 12 〉	통과 (0.49ms, 30MB)


// true, false 이용한 방법 - 신박함!
function solution(strings, n) {
    return strings.sort((a, b) => {
        const chr1 = a.charAt(n);
        const chr2 = b.charAt(n);

        if (chr1 == chr2) {
            return (a > b) - (a < b);
        } else {
            return (chr1 > chr2) - (chr1 < chr2);
        }
    })
}
// 정확성  테스트
// 테스트 1 〉	통과 (0.07ms, 30.3MB)
// 테스트 2 〉	통과 (0.10ms, 30.3MB)
// 테스트 3 〉	통과 (0.11ms, 30.2MB)
// 테스트 4 〉	통과 (0.12ms, 30.3MB)
// 테스트 5 〉	통과 (0.10ms, 30.2MB)
// 테스트 6 〉	통과 (0.10ms, 30.2MB)
// 테스트 7 〉	통과 (0.10ms, 30.2MB)
// 테스트 8 〉	통과 (0.08ms, 30.4MB)
// 테스트 9 〉	통과 (0.07ms, 30.2MB)
// 테스트 10 〉	통과 (0.16ms, 30MB)
// 테스트 11 〉	통과 (0.08ms, 30.3MB)
// 테스트 12 〉	통과 (0.10ms, 30.3MB)