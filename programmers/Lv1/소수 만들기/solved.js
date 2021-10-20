function solution(nums) {
    let cnt = 0;
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            for(let k=j+1; k<nums.length; k++){
                let answer = nums[i]+nums[j]+nums[k];
                let n;
                let sqrt = Math.floor(Math.sqrt(answer));
                for(n=2; n<sqrt; n++){
                    if(answer % n === 0) break;
                }
                if(n === sqrt && answer%sqrt !== 0) cnt++;
            }
        }
    }
    return cnt;
}
// 정확성  테스트
// 테스트 1 〉	통과 (0.66ms, 30.1MB)
// 테스트 2 〉	통과 (3.39ms, 32.9MB)
// 테스트 3 〉	통과 (0.25ms, 30.3MB)
// 테스트 4 〉	통과 (0.23ms, 30.1MB)
// 테스트 5 〉	통과 (3.17ms, 33.1MB)
// 테스트 6 〉	통과 (3.45ms, 33MB)
// 테스트 7 〉	통과 (0.16ms, 30.4MB)
// 테스트 8 〉	통과 (9.65ms, 32.8MB)
// 테스트 9 〉	통과 (0.35ms, 30.3MB)
// 테스트 10 〉	통과 (3.83ms, 32.9MB)


// 함수 나눠서 풀이
function check(num) {
    for(let n=2; n<=Math.floor(Math.sqrt(num)); n++){
        if(num % n === 0) return false;
    }
    return true;
}

function solution(nums) {
    let cnt = 0;
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            for(let k=j+1; k<nums.length; k++){
                let answer = nums[i]+nums[j]+nums[k];
                if(check(answer)) cnt++;
            }
        }
    }
    return cnt;
}

// 정확성  테스트
// 테스트 1 〉	통과 (1.69ms, 32.2MB)
// 테스트 2 〉	통과 (1.89ms, 32MB)
// 테스트 3 〉	통과 (0.32ms, 30.3MB)
// 테스트 4 〉	통과 (0.26ms, 30.4MB)
// 테스트 5 〉	통과 (3.44ms, 32.3MB)
// 테스트 6 〉	통과 (2.78ms, 32MB)
// 테스트 7 〉	통과 (0.18ms, 30.3MB)
// 테스트 8 〉	통과 (5.82ms, 32.3MB)
// 테스트 9 〉	통과 (1.33ms, 31.9MB)
// 테스트 10 〉	통과 (7.49ms, 32.8MB)