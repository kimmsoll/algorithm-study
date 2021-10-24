function solution(people, limit) {
    let boat = 0;
    people.sort((a,b)=>a-b);
    let first = people.shift();
    let second = people.pop();
    
    while(people.length>0){
        if(first+second <= limit){
            boat++;
            first = people.shift();
            second = people.pop();
        }else if(first+second > limit){
            boat++;
            second = people.pop();
        }else{
            boat += people.length;
        }
    }
    if(first+second<=limit) boat++;
    else if(first+second>limit) boat += 2;
    else boat++;
    return boat;
}

// 정확성  테스트
// 테스트 1 〉	통과 (2.34ms, 32.1MB)
// 테스트 2 〉	통과 (1.22ms, 30.3MB)
// 테스트 3 〉	통과 (1.35ms, 30.4MB)
// 테스트 4 〉	통과 (1.18ms, 30.4MB)
// 테스트 5 〉	통과 (0.74ms, 30.3MB)
// 테스트 6 〉	통과 (0.41ms, 30.3MB)
// 테스트 7 〉	통과 (0.64ms, 30.4MB)
// 테스트 8 〉	통과 (0.13ms, 30.4MB)
// 테스트 9 〉	통과 (0.16ms, 29.9MB)

// 효율성  테스트
// 테스트 1 〉	통과 (59.08ms, 33.7MB)
// 테스트 2 〉	통과 (13.87ms, 33.8MB)
// 테스트 3 〉	통과 (30.56ms, 33.7MB)
// 테스트 4 〉	통과 (12.35ms, 33.9MB)
// 테스트 5 〉	통과 (11.18ms, 33.5MB)


// 새로운 배열 생성하지 않고 풀기
function solution(people, limit) {
    people.sort((a,b)=>a-b);
    let first = 0;
    for(let i=first, j=people.length-1; i < j; j--) {
        if( people[i] + people[j] <= limit ){
            i++;
            first++;
        }
    }
    return people.length-first;
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
