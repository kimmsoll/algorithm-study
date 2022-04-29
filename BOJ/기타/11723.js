// 메모리 제한으로, node.js 로는 못 푸는 문제

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').split('\n');
const n = input[0];
const arr = input.slice(1);

let set = new Set();

for(let i=0; i<n; i++) {
    let curr = arr[i];
    if (curr === 'all') {
        set = new Set();
        for (let i=1; i<21; i++) {
            set.add(i);
        }
        continue;
    }
    if (curr === 'empty') {
        set = new Set();
        continue;
    }

    let target = +curr.split(' ')[1];

    if (curr.includes('add')) {
        set.add(target);
        continue;
    }
    if (curr.includes('remove')) {
        set.has(target) && set.delete(target);
        continue;
    }
    if (curr.includes('check')) {
        if(set.has(target)) {
            console.log(1);
        } else console.log(0);
        continue;
    }
    if (curr.includes('toggle')) {
        if(set.has(target)) {
            set.delete(target);
        } else set.add(target);
        continue;
    }
}
