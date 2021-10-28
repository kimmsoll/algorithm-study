function solution(expression) {
    let result = 0;
    const orders = [
        ['*','+','-'],['*','-','+'],
        ['+','*','-'],['+','-','*'],
        ['-','+','*'],['-','*','+']
    ];
    // ()를 넣으면 ()안의 것들을 포함시켜서 나온다.
    const nums = expression.split(/([*+-])/g);
    orders.forEach((operations) => {
        let temp = [...nums];
        operations.forEach((op) => {
            while(temp.includes(op)){
                let cur_idx = temp.indexOf(op);
                let pre = temp[cur_idx-1];
                let next = temp[cur_idx+1];
                let answer;
                if(op === '*'){
                    answer = +pre * +next;
                }
                else if(op === '+'){
                    answer = +pre + +next;
                }
                else if(op === '-'){
                    answer = +pre - +next;
                }
                temp.splice(cur_idx-1, 3, answer);
            }
        })
        result = Math.max(result, Math.abs(temp[0]));
        })
        return result;
    }