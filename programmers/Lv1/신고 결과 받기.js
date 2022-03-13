// Map을 사용하면 순서 보장이 된다!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

// Map 사용 풀이
function solution(id_list, report, k) {
    let reports = [...new Set(report)].map(v => {
        return v.split(' ');
    });
    let counts = new Map();

    for (const bad of reports){
        counts.set(bad[1], counts.get(bad[1]) + 1 || 1);
    }

    let mails = new Map();

    for (const report of reports) {
        if(counts.get(report[1]) >= k){
            mails.set(report[0], mails.get(report[0]) + 1 || 1);
        }
    }
    let answer = id_list.map(a => mails.get(a) || 0);
    return answer;
}

// 첫번째 풀이
function solution(names, report, k) {
    let reports = new Set(report);
    reports = Array.from(reports).map((v) => {
        return v.split(' ');
    });
    
    const target = {};
    const cnt = {};
    reports.map((v) => {
        target[v[0]] ? target[v[0]].push(v[1]) : target[v[0]] = [v[1]];
        cnt[v[1]] ? ++cnt[v[1]] : cnt[v[1]] = 1;
    });
    
    const resultMembers = [];
    for (let a in cnt) {
        if (cnt[a] >= k) resultMembers.push(a);
    }
    
    const answer = [];
    let count = 0;
    for (let a of names) {
        const name = a;
        const targets = target[name];
        targets && targets.forEach((v) => {
            if(resultMembers.indexOf(v) !== -1) {
                ++count;
            }
        });
        answer.push(count);
        count = 0;
    }
    
    return answer;
}