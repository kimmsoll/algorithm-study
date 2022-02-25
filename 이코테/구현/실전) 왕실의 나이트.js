// 방법 1. 알파벳 배열 직접 구현

const d = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const input = 'a1';
const x = +input[1];
const y = +d.indexOf(input[0]) + 1;
let count = 0;

const steps = [
    [1, 2], [1, -2], [-1, 2], [-1, -2],
    [2, 1], [2, -1], [-2, 1], [-2, -1]
];

for (let i=0; i<steps.length; i++) {
    const nx = x + steps[i][0];
    const ny = y + steps[i][1];
    if (nx < 1 || nx > 8 || ny < 1 || ny > 8) {
        continue;
    }
    count += 1;
}

console.log(count);


// 방법 2. charCodeAt 사용

const input = 'a1';
const x = +input[1];
const y = input[0].charCodeAt(0) - 'a'.charCodeAt(0) + 1;
let count = 0;

const steps = [
    [1, 2], [1, -2], [-1, 2], [-1, -2],
    [2, 1], [2, -1], [-2, 1], [-2, -1]
];

for (let i=0; i<steps.length; i++) {
    const nx = x + steps[i][0];
    const ny = y + steps[i][1];
    if (nx < 1 || nx > 8 || ny < 1 || ny > 8) {
        continue;
    }
    count += 1;
}

console.log(count);