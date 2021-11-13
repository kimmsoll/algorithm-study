function solution(n, left, right) {
    // left, right 이 똑같을 수 있음
    // left ~ right범위의 임의의 숫자 num에 대해서 좌표 (r, c)를 구하는 공식
    // r = Math.floor(num / n)
    // c = num % n
    const answer = [];
    while (left <= right) {
        answer.push(Math.max(Math.floor(left / n) +1, (left % n) +1));
        left++;
    }
    return answer;
}