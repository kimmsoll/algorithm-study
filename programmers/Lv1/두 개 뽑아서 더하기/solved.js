function solution(numbers) {
    let set = new Set();
    for(let i=0; i<numbers.length; i++){
        for(let j=i+1; j<numbers.length; j++){
            set.add(numbers[i]+numbers[j]);
        }
    }
    return Array.from(set).sort((a,b)=>a-b);
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.05ms, 30.2MB)
// 테스트 2 〉	통과 (0.08ms, 30.4MB)
// 테스트 3 〉	통과 (0.07ms, 30.2MB)
// 테스트 4 〉	통과 (0.07ms, 30.2MB)
// 테스트 5 〉	통과 (0.11ms, 30.2MB)
// 테스트 6 〉	통과 (0.11ms, 30.3MB)
// 테스트 7 〉	통과 (0.45ms, 30.6MB)
// 테스트 8 〉	통과 (0.41ms, 30MB)
// 테스트 9 〉	통과 (0.37ms, 30.2MB)

// indexOf 활용
function solution(numbers) {
    let answer = [];
    for(let i=0; i<numbers.length-1; i++){
        for(let j=i+1; j<numbers.length; j++){
            if(answer.indexOf(numbers[i]+numbers[j])===-1){
                answer.push(numbers[i]+numbers[j]) 
        }
        }
    }

    return answer.sort((a,b)=>a-b);
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.05ms, 30.2MB)
// 테스트 2 〉	통과 (0.07ms, 30MB)
// 테스트 3 〉	통과 (0.10ms, 30.2MB)
// 테스트 4 〉	통과 (0.07ms, 30.3MB)
// 테스트 5 〉	통과 (0.08ms, 30.4MB)
// 테스트 6 〉	통과 (0.15ms, 30.4MB)
// 테스트 7 〉	통과 (1.06ms, 30.6MB)
// 테스트 8 〉	통과 (0.54ms, 30.1MB)
// 테스트 9 〉	통과 (0.40ms, 30MB)
