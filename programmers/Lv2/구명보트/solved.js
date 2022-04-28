// 두 번째 풀이
function solution(people, limit) {
    people.sort((a, b) => a - b);
    let cnt = 0;

    while(people.length) {
        let curr = people.pop();
        let sum = curr;
        while(sum + people[0] <= limit) {
            sum += people.shift();
        }
        cnt++;
    }

    return cnt;
}
// 테스트 1 〉	통과 (2.44ms, 31.8MB)
// 테스트 2 〉	통과 (1.11ms, 30.1MB)
// 테스트 3 〉	통과 (1.36ms, 30.1MB)
// 테스트 4 〉	통과 (1.20ms, 30MB)
// 테스트 5 〉	통과 (0.74ms, 30MB)
// 테스트 6 〉	통과 (0.44ms, 30MB)
// 테스트 7 〉	통과 (0.68ms, 30.1MB)
// 테스트 8 〉	통과 (0.12ms, 30.1MB)
// 테스트 9 〉	통과 (0.22ms, 30.1MB)
// 테스트 10 〉	통과 (1.20ms, 30.1MB)
// 테스트 11 〉	통과 (1.07ms, 29.7MB)
// 테스트 12 〉	통과 (0.96ms, 30.1MB)
// 테스트 13 〉	통과 (1.19ms, 29.9MB)
// 테스트 14 〉	통과 (1.29ms, 30.3MB)
// 테스트 15 〉	통과 (0.17ms, 30MB)
// 효율성  테스트
// 테스트 1 〉	통과 (60.12ms, 33.7MB)
// 테스트 2 〉	통과 (17.50ms, 33.5MB)
// 테스트 3 〉	통과 (35.27ms, 33.5MB)
// 테스트 4 〉	통과 (13.55ms, 33.6MB)
// 테스트 5 〉	통과 (20.38ms, 33.6MB)


// 인덱스만 활용한 풀이
function solution(people, limit) {
    people.sort((a,b) => a - b);
    let totalLength = people.length;
    let first = 0;

    for(let i=first, j=totalLength-1; i<j; j--) {
        if (people[i] + people[j] <= limit) {
            i++;
            first++;
        }
    }

    return totalLength - first;
}

// 정확성  테스트
// 테스트 1 〉	통과 (2.16ms, 32MB)
// 테스트 2 〉	통과 (1.11ms, 29.9MB)
// 테스트 3 〉	통과 (1.17ms, 30.1MB)
// 테스트 4 〉	통과 (1.07ms, 30.3MB)
// 테스트 5 〉	통과 (0.66ms, 30.5MB)
// 테스트 6 〉	통과 (0.40ms, 30.2MB)
// 테스트 7 〉	통과 (0.59ms, 30MB)
// 테스트 8 〉	통과 (0.12ms, 30.3MB)
// 테스트 9 〉	통과 (0.16ms, 30.2MB)

// 효율성  테스트
// 테스트 1 〉	통과 (15.20ms, 33.6MB)
// 테스트 2 〉	통과 (13.45ms, 33.6MB)
// 테스트 3 〉	통과 (14.53ms, 33.5MB)
// 테스트 4 〉	통과 (10.90ms, 33.7MB)
// 테스트 5 〉	통과 (11.73ms, 33.4MB)
