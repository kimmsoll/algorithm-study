function solution(n){
    let arr = n.sort((a,b)=> a-b);
    let target = 1;
    for(let a of arr){
        if(target<a){
        break;
    }
        target += a;
    }
}

solution([3,2,1,1,9]);