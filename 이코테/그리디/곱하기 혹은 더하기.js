function solution(n){
    let arr = n.split("").map((a) => Number(a));
    arr.sort((a,b)=>a-b);
    let result = 0;
    for(let a of arr){
        if(result === 0){
            result += a;
        }else if(a === 1 || a === 0){
            result += a;
        }else{
            result *= a;
        }
    }
    console.log(result);
};

solution("02984");