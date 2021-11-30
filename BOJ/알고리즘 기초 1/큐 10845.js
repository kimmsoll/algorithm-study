const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const q = [];
const answer = [];

const commands = {
    push : (v) => q.push(v),
    pop : () => {return q.length>0 ? q.shift() : -1},
    size : () => {return q.length},
    empty : () => {return q.length>0 ? 0 : 1},
    front : () => {return q.length>0 ? q[0] : -1},
    back : () => {return q.length>0 ? q[q.length-1] : -1}
}

for(let i=1; i<input.length; i++){
    let cmd = input[i].split(' ');
    switch(cmd[0]){
        case 'push':
            commands.push(cmd[1]);
            break;
        case 'pop':
            answer.push(commands.pop());
            break;
        case 'size':
            answer.push(commands.size());
            break;
        case 'empty':
            answer.push(commands.empty());
            break;
        case 'front':
            answer.push(commands.front());
            break;
        case 'back':
            answer.push(commands.back());
            break;
    }
}

console.log(answer.join('\n'));