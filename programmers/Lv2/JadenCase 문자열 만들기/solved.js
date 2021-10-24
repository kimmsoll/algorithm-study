function solution(s) {
    let arr = s.split(' ');
    let answer = [];
    arr.map((item) => {
        let word = '';
        if(isNaN(item.slice(0,1))){
            word += item.slice(0,1).toUpperCase();
            for(let a of item.slice(1,item.length)){
                if(isNaN(a)) word += a.toLowerCase();
                else word += a;
            }
            answer.push(word);
            word = '';
        }else{
            word += item.slice(0,1);
            for(let a of item.slice(1,item.length)){
                if(isNaN(a)) word += a.toLowerCase();
                else word += a;
            }
            answer.push(word);
            word = '';
        }})
    return answer.join(' ');     
}
// 정확성  테스트
// 테스트 1 〉	통과 (0.20ms, 30.4MB)
// 테스트 2 〉	통과 (0.17ms, 29.9MB)
// 테스트 3 〉	통과 (0.17ms, 30.3MB)
// 테스트 4 〉	통과 (0.19ms, 30.4MB)
// 테스트 5 〉	통과 (0.19ms, 30.1MB)
// 테스트 6 〉	통과 (0.17ms, 30.4MB)
// 테스트 7 〉	통과 (0.19ms, 30.3MB)
// 테스트 8 〉	통과 (0.16ms, 30.3MB)
// 테스트 9 〉	통과 (0.18ms, 30.3MB)