const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

let answer = input.replace(/(c=)/g, 'A')
    .replace(/(c-)/g, 'B')
    .replace(/(dz=)/g, 'C')
    .replace(/(d-)/g, 'D')
    .replace(/(lj)/g, 'E')
    .replace(/(nj)/g, 'F')
    .replace(/(s=)/g, 'G')
    .replace(/(z=)/g, 'H');

console.log(answer.length);