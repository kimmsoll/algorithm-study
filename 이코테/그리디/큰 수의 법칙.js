const input = [5, 7, 2];
const n = input[0];
const m = input[1];
const k = input[2];
const arr = [3, 4, 3, 4, 3];

arr.sort((a,b) => b - a);

const firstNum = arr[0];
const secondNum = arr[1];

const firstCount = Math.floor(m / (k+1)) * k + (m % (k+1));
const secondCount = m - firstCount;

const result = (firstCount * firstNum) + (secondCount * secondNum);

console.log(result);