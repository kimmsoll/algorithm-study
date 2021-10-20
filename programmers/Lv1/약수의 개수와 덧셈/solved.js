function solution(left, right) {
    let result = 0;
    for(let i=left; i<=right; i++){
        if(Math.sqrt(i) === Math.floor(Math.sqrt(i))){
            result -= i;
        }else{
            result += i;
        }
    }
    return result;
}
