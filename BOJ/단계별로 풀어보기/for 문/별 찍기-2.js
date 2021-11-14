const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();
let n = +input;
let stars = '*';

for(let i=1; i<=n; i++){
    console.log(stars.repeat(i).padStart(n,' '));
}
