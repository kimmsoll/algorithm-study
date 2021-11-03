function solution(number, k) {
    let stack = [];
    for(let i=0; i<number.length; i++){
        const curr = number[i];
        while(k>0 && stack[stack.length-1] < curr){
            stack.pop();
            k--;
        }
        stack.push(curr);
    }
    stack.splice(stack.length-k, k);
    return stack.join('');
}