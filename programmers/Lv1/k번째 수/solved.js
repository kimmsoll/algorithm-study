function solution(array, commands) {
    const answer = [];
    for(let command of commands) {
        const [i, j, k] = command;
        const sliced = array.slice(i-1, j).sort((a, b) => a-b);
        answer.push(sliced[k-1]);
    }
    return answer;
}