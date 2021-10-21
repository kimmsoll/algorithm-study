function solution(s) {
    const nums = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    for(let a of s){
        for(let i=0; i<nums.length; i++){
            if(s.includes(nums[i])){
                s = s.replace(nums[i], String(i));
            }
        }
    }
    return Number(s);
}
// 정확성  테스트
// 테스트 1 〉	통과 (0.07ms, 29.8MB)
// 테스트 2 〉	통과 (0.10ms, 30.3MB)
// 테스트 3 〉	통과 (0.11ms, 29.8MB)
// 테스트 4 〉	통과 (0.17ms, 30.1MB)
// 테스트 5 〉	통과 (0.14ms, 30MB)
// 테스트 6 〉	통과 (0.10ms, 30.3MB)
// 테스트 7 〉	통과 (0.10ms, 30.1MB)
// 테스트 8 〉	통과 (0.10ms, 30.4MB)
// 테스트 9 〉	통과 (0.14ms, 30.1MB)
// 테스트 10 〉	통과 (0.14ms, 30.3MB)



// split 활용한 방법
function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = s;

    for(let i=0; i< numbers.length; i++) {
        let arr = answer.split(numbers[i]);
        answer = arr.join(i);
    }

    return Number(answer);
}
// 정확성  테스트
// 테스트 1 〉	통과 (0.09ms, 30.2MB)
// 테스트 2 〉	통과 (0.06ms, 30.4MB)
// 테스트 3 〉	통과 (0.09ms, 30.1MB)
// 테스트 4 〉	통과 (0.06ms, 30.1MB)
// 테스트 5 〉	통과 (0.09ms, 30.3MB)
// 테스트 6 〉	통과 (0.06ms, 30.3MB)
// 테스트 7 〉	통과 (0.12ms, 30.2MB)
// 테스트 8 〉	통과 (0.09ms, 30.4MB)
// 테스트 9 〉	통과 (0.10ms, 30.3MB)
// 테스트 10 〉	통과 (0.06ms, 30.7MB)
