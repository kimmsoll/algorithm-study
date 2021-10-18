function solution(n){
    let cnt = 0;
    for(let i=0; i<n.length; i++){
        for(let j=i; j<n.length; j++){
            if(n[i] !== n[j]){
                cnt++;
            } else {
                continue;
            }
        }
    }
    return cnt;
}

solution([1,5,4,3,2,4,5,2]);