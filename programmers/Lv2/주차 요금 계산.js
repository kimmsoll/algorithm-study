function formatTime(t) {
    let time = t.split(':').map(Number);
    time = time[0] * 60 + time[1];
    return time;
}

function calculateFees(fees, t) {
    if (t <= fees[0]) return fees[1];
    const over = Math.ceil((t - fees[0]) / fees[2]) * fees[3];
    return fees[1] + over;
}

function solution(fees, records) {
    const now = {};
    const answer = {};
    
    if (records.length === 1) {
        const record = records[0].split(' ');
        const time = formatTime(record[0]);
        return [calculateFees(fees, 24*60-1 -time)];
    } else {
        records.map((v) => {
            const record = v.split(' ');
            const time = formatTime(record[0]);
            const num = record[1];
            const locate = record[2];
            if (locate === 'IN') {
                now[num] = time;
            } else {
                if (answer[num] == null) {
                    answer[num] = time - now[num];
                } else {
                    answer[num] += time - now[num];
                }
                now[num] = null;
            }
        });

        for (let a in now) {
            const remain = now[a];
            if (remain == null) continue;
            else {
                if (answer[a] == null) {
                    answer[a] = 24 * 60 - 1 - remain;
                } else {
                    answer[a] += 24 * 60 - 1 - remain;
                }
            }
        }

        const result = [];

        for (let a in answer) {
            result.push([a, calculateFees(fees, answer[a])]);
        }
        
        result.sort((a, b) => +a[0] - +b[0]);
        return result.map((v) => v[1]);
    }
    
}