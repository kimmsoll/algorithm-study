function solution(times, k) {
    // 더 섭취해야 할 음식이 없다면 -1 리턴
    const sum = times.reduce((pre,cur)=>pre+cur);
    if(sum <= k){
        return -1;
    }
    // idx 넣은 새로운 배열 생성
    let newArr = [];
    for(let i=0; i<times.length; i++){
        newArr.push([i+1, times[i]]);
    }
    // 시간 기준 내림차순 정렬
    newArr.sort((a,b)=>b[1]-a[1]);
    
    let sum_value = 0;
    let previous = 0;
    let length = newArr.length;

    // 최솟값 * 남은 음식 갯수가 k 보다 작거나 같을 동안 반복
    while(sum_value + (newArr[newArr.length-1][1] - previous)*length <= k){
        let now = newArr.pop()[1];
        sum_value += (now - previous)*length;
        length -= 1;
        previous = now;
    }

    // 번호 기준으로 재정렬
    newArr.sort((a,b)=>a[0]-b[0]);
    return newArr[(k - sum_value)%length][0];
}
