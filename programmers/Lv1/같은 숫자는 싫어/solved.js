//forEach 문 안에서는 continue 를 사용할 수 없다! 대신 return 사용하면 같은 기능 함.
// for, for..of 문은 continue 사용 가능!

// forEach 사용한 방법
function solution(arr)
{
    let answer = [];
    arr.forEach((a)=>{
        if(answer.length<1){
            answer.push(a);
        }
        else if(answer.length>=1 && answer[answer.length-1] !== a){
            answer.push(a);
        }else if(answer.length>=1 && answer[answer.length-1] === a){
            return;
        }
    });
    return answer;
}
// 테스트 1 〉	통과 (0.14ms, 30.1MB)
// 테스트 2 〉	통과 (0.13ms, 30.4MB)
// 테스트 3 〉	통과 (0.10ms, 30.1MB)
// 테스트 4 〉	통과 (0.08ms, 30.2MB)
// 테스트 5 〉	통과 (0.14ms, 30.2MB)
// 테스트 6 〉	통과 (0.19ms, 30.4MB)
// 테스트 7 〉	통과 (0.13ms, 30.2MB)
// 테스트 8 〉	통과 (0.14ms, 30.3MB)
// 테스트 9 〉	통과 (0.11ms, 30.2MB)
// 테스트 10 〉	통과 (0.09ms, 30.3MB)
// 테스트 11 〉	통과 (0.23ms, 30.3MB)
// 테스트 12 〉	통과 (0.08ms, 30.3MB)
// 테스트 13 〉	통과 (0.08ms, 30.2MB)
// 테스트 14 〉	통과 (0.08ms, 30.2MB)
// 테스트 15 〉	통과 (0.09ms, 30.3MB)
// 테스트 16 〉	통과 (0.09ms, 30.3MB)
// 테스트 17 〉	통과 (0.07ms, 30.4MB)
// 효율성  테스트
// 테스트 1 〉	통과 (26.59ms, 76.2MB)
// 테스트 2 〉	통과 (23.86ms, 76.5MB)
// 테스트 3 〉	통과 (26.50ms, 76MB)
// 테스트 4 〉	통과 (26.67ms, 75.7MB)



// pop, reverse 사용한 방법
function solution(arr) {
    let result = [];
    result.push(arr.pop());

    while(arr.length > 0){
        let a = arr.pop();
        if(result[result.length-1] !== a){
            result.push(a);
        } else {
            continue;
        }
    }
    return result.reverse();
}
// 정확성  테스트
// 테스트 1 〉	통과 (0.04ms, 30.3MB)
// 테스트 2 〉	통과 (0.06ms, 30.3MB)
// 테스트 3 〉	통과 (0.11ms, 30.2MB)
// 테스트 4 〉	통과 (0.13ms, 30.3MB)
// 테스트 5 〉	통과 (0.07ms, 30.2MB)
// 테스트 6 〉	통과 (0.07ms, 30.4MB)
// 테스트 7 〉	통과 (0.06ms, 30.3MB)
// 테스트 8 〉	통과 (0.10ms, 30.3MB)
// 테스트 9 〉	통과 (0.07ms, 30.3MB)
// 테스트 10 〉	통과 (0.06ms, 30.2MB)
// 테스트 11 〉	통과 (0.06ms, 30.2MB)
// 테스트 12 〉	통과 (0.09ms, 30.2MB)
// 테스트 13 〉	통과 (0.09ms, 30.1MB)
// 테스트 14 〉	통과 (0.06ms, 30.2MB)
// 테스트 15 〉	통과 (0.07ms, 30.3MB)
// 테스트 16 〉	통과 (0.07ms, 30.3MB)
// 테스트 17 〉	통과 (0.04ms, 30.4MB)
// 효율성  테스트
// 테스트 1 〉	통과 (19.76ms, 82.8MB)
// 테스트 2 〉	통과 (20.49ms, 82.1MB)
// 테스트 3 〉	통과 (17.77ms, 82.5MB)
// 테스트 4 〉	통과 (20.86ms, 82.8MB)