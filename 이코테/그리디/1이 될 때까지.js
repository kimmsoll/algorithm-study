const n = 25;
const k = 5;
let num = n;
let count = 0;

// 방법 1. 순차적으로 내려오기
while (num) {
    if (num === 1) break;
    if (num % k === 0) {
        count += 1;
        num /= k;
    } else {
        count += 1;
        num -= 1;
    }
}

console.log(count);