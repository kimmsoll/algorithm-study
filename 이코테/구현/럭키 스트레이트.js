function solution(str){
    let length = str.length/2;
    let arr = str.split("").map((a)=>Number(a));
    let arr1 = arr.slice(0,length);
    let arr2 = arr.slice(length);
    let sum1 = arr1.reduce((pre,cur)=>pre+cur);
    let sum2 = arr2.reduce((pre,cur)=>pre+cur);
    console.log(sum1 === sum2 ? "LUCKY" : "READY");
}

solution("123402");