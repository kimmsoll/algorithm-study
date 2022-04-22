function solution(numbers, target) {
    let answer = 0;
    const totalLength = numbers.length;

    function dfs(len, sum) {
        if (len === totalLength) {
            if (target === sum) {
                answer++;
            }
            return;
        }

        dfs(len + 1, sum + numbers[len]);
        dfs(len + 1, sum - numbers[len]);
    }

    dfs(0, 0);
    return answer;
}