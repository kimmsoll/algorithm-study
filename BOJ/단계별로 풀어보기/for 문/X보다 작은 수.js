const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let nx = input[0].split(' ');
let n = +nx[0];
let x = +nx[1];
let arr = input[1].split(' ').filter(v => v<x);
console.log(arr.join(' '));