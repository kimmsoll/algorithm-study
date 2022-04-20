function formatTime(time) {
    let [t, sec] = time;
    const h = (t[0]*10 + t[1]*1)*60*60;
    const m = (t[3]*10 + t[4]*1)*60;
    const s = (t[6]*10 + t[7]*1);
    const ms = (t[9]*100 + t[10]*10 + t[11]*1);
    let newT = (h + m + s) * 1000 + ms;
    // 시작 시간에 1을 더하고, 종료 시간에 999를 더하는 게 관건
    return [newT - sec*1000 + 1, newT + 999];
}

function solution(lines) {
    let answer = 0;
    let cnt = 0;
    let times = [];
    let newLines = lines.map((v) => v.split(' ').slice(1));
    newLines.map((v) => {
        const [start, end] = formatTime([v[0], +v[1].slice(0, -1)]);
        times.push(['start', start]);
        times.push(['end', end]);
    });
    // 시작 시간과 종료 시간이 같을 경우, 시작 시간이 먼저 나오게 정렬
    times.sort((a, b) => a[1] !== b[1] ? a[1] - b[1] : -1);
    for (let t of times) {
        if (t[0] === 'start') {
            cnt++;
        } else cnt--;
        answer = Math.max(cnt, answer); 
    }
    return answer;
}