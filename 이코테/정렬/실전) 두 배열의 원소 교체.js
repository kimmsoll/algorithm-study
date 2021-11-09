let arr1 = "1 2 5 4 3";
let arr2 = "5 5 6 6 5";

function solution(arr1, arr2, k){
    arr1 = arr1.split(' ').map(v=>+v).sort((a,b)=>a-b);
    arr2 = arr2.split(' ').map(v=>+v).sort((a,b)=>b-a);
    for(let i=0; i<k; i++){
        if(arr1[i]<arr2[i]){
            arr1[i] = arr2[i];
        }else break;
    }
    return arr1.reduce((pre, curr)=>pre+curr);
}

solution(arr1, arr2, 3);