/*
비트 연산에서 특정 수보다 작은 값 중 가장 큰 수 찾기
1. 맨 뒤가 0일 때 -> 1로 바꿈 (1비트 바꿔서 얻을 수 있는 가장 작은 값, 특정 수 + 1 인 값)
2. 그 외, 맨 뒤에서 가장 먼저 등장하는 01 찾아 10으로 바꿈 (2비트 바꿔서 얻을 수 있는 가장 작은 값)
*/

function solution(numbers) {
    let answer = [];
    for(let number of numbers) {
        let str = number.toString(2);
        if (str[str.length - 1] === '0') {
            // 맨 뒷자리를 0에서 1로 바꾸면, number 보다 1 큰 수가 된다
            answer.push(number + 1);
        } else {
            // 뒤에서부터 가장 먼저 나오는 0의 인덱스를 찾는다
            for (let i=str.length; i>0; i--) {
                if (str[i] === '0') {
                    str = `${str.substring(0, i)}10${str.substring(i+2)}`;
                    answer.push(parseInt(str, 2));
                    break;
                }
            }
        }
    }
    return answer;
}