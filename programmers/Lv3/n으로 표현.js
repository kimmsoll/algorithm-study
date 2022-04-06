function solution(N, number) {
    if (N === number) return 1;
    let dp = new Array(9).fill().map(() => new Set());
    for (let i=1; i<9; i++) {
        dp[i].add(Number(String(N).repeat(i)));
    }
    
    for (let i=1; i<9; i++) {
        for (let j=1; j<i; j++) {
            for (let a of dp[j]) {
                for (let b of dp[i-j]) {
                    if (dp[i].has(number)) return i;
                    dp[i].add(a + b);
                    dp[i].add(a - b);
                    dp[i].add(a * b);
                    dp[i].add(a / b);
                }
            }
        }
    }
    return -1;
    
}