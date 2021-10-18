function solution(n) {
    let scares = [2,3,1,2,2];
    let result = 0;
    let cnt = 0;
    scares.sort();
    for(let a of scares){
        cnt++;
        if(cnt >= a){
            result++;
            cnt = 0;
        }
    }
    console.log(result);
}

solution(5);