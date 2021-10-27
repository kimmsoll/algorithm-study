function solution(n) {
    let answer = Array(n).fill([]).map((_, idx) => Array(idx+1));
    let x = -1;
    let y = 0;
    let count = 0;
    let result = [];
    
    while(n>0){    
        for(let i=0; i<n; i++){
            answer[++x][y] = ++count;
        }
        for(let i=0; i<(n-1); i++){
            answer[x][++y] = ++count;
        }
        for(let i=0; i<(n-2); i++){
            answer[--x][--y] = ++count;
        }
        n -= 3;
    }
    
    for(let a of answer){
        result.push(...a);
    }
    return result;
}
