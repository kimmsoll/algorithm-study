function solution(msg) {
    let answer = [];
    // 사전 초기화
    let dic = [' '];
    for(let i=65; i<91; i++){
        dic.push(String.fromCharCode(i));
    }
    // 가장 긴 문자열 w 찾기
    for(let i=0, j; i<msg.length; i=j){
        let w = msg[i];
        for(j=i+1; j<msg.length; j++){
            let c = msg[j];
            if(!dic.includes(w+c)){
                dic.push(w+c);
                // break는 for 반복문 자체를 빠져나온다. 바로 answer.push 부분이 실행되는 것.
                break;
            }
            w += c;
        }
        answer.push(dic.indexOf(w));
    }
    return answer;
}