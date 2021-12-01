const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const deq = [];
const answer = [];

const commands = {
    push_front : (v) => deq.unshift(v),
    push_back : (v) => deq.push(v),
    pop_front : () => {
        return deq.length<1 ? -1 : deq.shift();
    },
    pop_back : () => {
        return deq.length<1 ? -1 : deq.pop();
    },
    size : () => deq.length,
    empty : () => {
        return deq.length<1 ? 1 : 0;
    },
    front : () => {
        return deq.length<1 ? -1 : deq[0];
    },
    back : () => {
        return deq.length<1 ? -1 : deq[deq.length-1];
    }
}

for(let i=1; i<input.length; i++){
    let cmd = input[i].split(' ');
    switch(cmd[0]){
        case 'push_front':
            commands.push_front(cmd[1]);
            break;
        case 'push_back':
            commands.push_back(cmd[1]);
            break;
        case 'pop_front':
            answer.push(commands.pop_front());
            break;
        case 'pop_back':
            answer.push(commands.pop_back());
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
