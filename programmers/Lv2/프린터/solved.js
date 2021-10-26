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
