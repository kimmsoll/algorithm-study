function solution(str){
    let arr = str.split("");
    let alpha = [];
    let number = 0;
    for(let a of arr){
        if(isNaN(a)){
        alpha.push(a);
        } else {
        number += Number(a);
        }
    }
    alpha.sort((a,b)=>a.charCodeAt(0)-b.charCodeAt(0));
    return alpha.join("") + number;
}

solution("AJKDLSI412K4JSJ9D");