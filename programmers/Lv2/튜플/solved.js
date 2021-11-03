function solution(s) {
    let answer = [];
    let arr = s.replace(/\{{/,'').replace(/\}}/,'').split('},{');
    // 원소가 1개일 때 처리
    if(arr.length === 1){
        return arr.map(a => Number(a));
    }
    // 원소 길이 오름차순 정렬
    arr.sort((a,b)=>a.length-b.length);
    // 각 원소를 배열에 담음
    let newArr = [];
    for(let i=0; i<arr.length; i++){
        newArr.push(arr[i].split(','));
    }
    answer.push(newArr[0][0]);
    // 이전 원소에 없는 원소 찾기
    for(let i=1; i<newArr.length; i++){
        let currArr = newArr[i];
        for(let j=0; j<currArr.length; j++){
            if(answer.includes(currArr[j])) continue;
            else answer.push(currArr[j]);
        }
    }
    return answer.map((a)=>Number(a));
}

// let arr = ["111","20,111"];
// for(let i=0; i<arr.length; i++){
//     arr[i].split(',');
// }
// return arr;
// 출력 : [["111"],["20","111"]]