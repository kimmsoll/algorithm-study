function solution(arr1, arr2) {
    let answer = [[]];
    for(let i=0; i<arr1.length; i++){
        answer[i] = [];
        for(let j=0; j<arr1[i].length; j++){
            answer[i][j] = arr1[i][j] + arr2[i][j];
        }
    }
    return answer;
}

// map 활용
function sumMatrix(A,B){
    let answer;
    answer = A.map((a, i) => {
    return a.map((val, idx) => {
        val += B[i][idx];
    return val;
    })
})

    return answer;
}