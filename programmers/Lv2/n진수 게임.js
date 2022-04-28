function solution(n, t, m, p) {
    let nums = '';
    let answer = '';
    let cnt = 0;
    while (nums.length <= m*t) {
        let num = cnt.toString(n);
        nums += num;
        cnt++;
    }
    for (let i=0; i<nums.length; i++) {
        if (answer.length === t) break;
        if ((i+1)%m === p || ((i + 1) % m === 0 && m === p)) {
            answer += nums[i];
        }
    }
    // 10~15가 나오는 진법은 16진법 뿐이다.
    // 대문자로 출력한다고 했으니, toUpperCase()만 적용해주면 되는 것.
    return answer.toUpperCase();
}