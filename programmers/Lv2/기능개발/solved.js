// 세 번째 풀이
function solution(progresses, speeds) {
    const answer = [];
    const progress = [];

    for(let i=0; i<speeds.length; i++) {
        progress.push(Math.ceil((100-progresses[i])/speeds[i]));
    }
    
    while(progress.length) {
        let curr = progress.shift();
        let cnt = 1;
        while(progress[0] <= curr) {
            progress.shift();
            cnt++;
        }
        answer.push(cnt);
    }
    return answer;
}

// 두 번째 풀이
function solution(progresses, speeds) {
    let needDays = [];
    let answer = [];
    
    if (progresses.length === 1) return [1];
    
    for(let i=0; i<progresses.length; i++) {
        needDays.push(Math.ceil((100 - progresses[i])/speeds[i]));
    }
    needDays.reverse();

    let queue = [];
    
    while(needDays.length > 0) {
        let cnt = 1;
        queue.push(needDays.pop());
        while (queue[0] >= needDays[needDays.length - 1]) {
            cnt += 1;
            needDays.pop();
        }
        answer.push(cnt);
        queue = [];
        
    }
    return answer;
}

// 첫 번째 풀이
function solution(progress, speed) {
    // Math.ceil(n) 은 n보다 크거나 같은 정수 중 가장 작은 정수를 반환한다
    let arr = progress.map((v, idx) => Math.ceil((100-v)/speed[idx]));
    let max = arr[0];
    let result = [0];
    
    for(let i=0, j=0; i<arr.length; i++){
        if(arr[i] <= max){
            result[j] += 1;
        } else {
            max = arr[i];
            result[++j] = 1;
        }
    }
    return result;
}