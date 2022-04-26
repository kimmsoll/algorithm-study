function isRight(arr) {
    // 길이가 1이면 무조건 잘못된 괄호 문자열이다
    if (arr.length === 1) return false;
    let queue = [];
    // arr 자체를 수정해버리면 안되므로, 복사본을 활용하는 게 포인트
    let newArr = [...arr];
    let curr = newArr.shift();
    // 첫번째 괄호가 닫힘 괄호면 잘못된 괄호 문자열이다
    if (curr === '[' || '(' || '{') {
        queue.push(curr);
    } else {
        return false;
    }

    while (newArr.length) {
        curr = newArr.shift();
        if(!queue.length) queue.push(curr);
        else if(queue[queue.length - 1] === '[') {
            if(curr === ']') queue.pop();
            else queue.push(curr);
        }
        else if(queue[queue.length - 1] === '{') {
            if(curr === '}') queue.pop();
            else queue.push(curr);
        }
        else if(queue[queue.length - 1] === '(') {
            if(curr === ')') queue.pop();
            else queue.push(curr);
        }
    }
    
    if (queue.length) return false;
    return true;
}

function solution(s) {
    let answer = 0;
    let arr = s.split('');
    if (isRight(arr)) answer++;

    for(let i=1; i<arr.length; i++) {
        let shifted = arr.shift();
        arr.push(shifted);
        if (isRight(arr)) answer++;
    }

    return answer;
}