// 두 번째 풀이
function solution(priorities, location) {
    let newPriorities = priorities.map((p, idx) => [idx, p]);
    let result = [];
    while(true) {
        const curr = newPriorities.shift();
        const isNotFirst = newPriorities.some((v) => v[1] > curr[1]);
        if (isNotFirst) {
            newPriorities.push(curr);
        } else result.push(curr);
        
        const isMine = result.length && result[result.length-1][0] === location;
        if (isMine) {
            return result.length;
        }
    }
}

// 첫 번째 풀이
function solution(priorities, location) {
    let arr = priorities.map((v, idx) => [v, idx]);
    let queue = [];
    
    while(arr.length>0){
        let cur = arr.shift();
        let hasHighPriority = arr.some((e) => e[0] > cur[0]);
        if(hasHighPriority){
            arr.push(cur);
        }else{
            queue.push(cur);
        }
    }
    
    return queue.findIndex((e)=>e[1]===location) + 1;
}
