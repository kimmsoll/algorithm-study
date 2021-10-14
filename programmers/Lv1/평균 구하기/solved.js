function solution(arr) {
    return arr.reduce((pre,cur)=>pre+cur)/arr.length;
}


function solution(array){
let sum = 0;
    for(let value of array){
    sum += value;
}
    return sum/array.length;
}


function solution(array){
    let sum = 0;
    array.forEach((item) => sum += item);
    return sum/array.length;
}
