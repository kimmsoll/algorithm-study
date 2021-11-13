// ** 다시 풀이한 코드(정답) **

function replaceWord(str){
    // 대문자는 이미 있는 음이므로, 없는 음인 소문자로 치환해야 한다.
    return str.replace(/(C#)/g, 'c')
    .replace(/(D#)/g, 'd')
    .replace(/(F#)/g, 'f')
    .replace(/(G#)/g, 'g')
    .replace(/(A#)/g, 'a');
}

function solution(m, musicinfos) {
    let answer = [];
    musicinfos = musicinfos.map((info)=>info.split(','));
    musicinfos.forEach((info) => {
        let stopTime = 60*(info[1].slice(0,2)) + Number(info[1].slice(3));
        let startTime = 60*(info[0].slice(0,2)) + Number(info[0].slice(3));
        // 시간 차만 구하면 되므로, 각 시간의 총합을 구한 후,
        // 정지 시각이 더 작은 숫자인 경우만 예외처리 하면 된다.
        let playTime = stopTime<startTime ? stopTime + 60*24 - startTime : stopTime - startTime;
        let music = replaceWord(info[3]);
        let musicLength = music.length;
        let findInThis = playTime>musicLength ? 
            music.repeat(Math.floor(playTime/musicLength))+music.slice(0, playTime%musicLength)
            // 재생시간이 음악 길이보다 작을 경우, 재생시간에 맞게 잘라줘야 한다.
            : music.slice(0, playTime);
        let findMusic = replaceWord(m);
        if(findInThis.includes(findMusic)){
            answer.push([playTime, info[2]]);
        }
    });
    if(answer.length>1){
        // 재생시간을 내림차순으로 정렬하되, 재생시간이 같을 경우 입력된 순서 그대로를 출력한다.
        answer.sort((a,b)=> b[0]-a[0] || 0);
    }
    if(answer.length<1){
        return '(None)';
    }
    return answer[0][1];
}


// ** 처음 푼 코드(테케 19, 25~28, 30 실패) **

// 시간이 13:50, 14:20 등으로 주어질 경우 잘못된 계산을 한다
// 재생 시간이 음 길이보다 적게 주어질 경우를 정확하게 계산하지 못한다.
function solution(m, musicinfos) {
    let answer = [];
    musicinfos = musicinfos.map((info)=>info.split(','));
    musicinfos.forEach((info) => {
        let stopH = Number(info[1].slice(0,2));
        let stopM = Number(info[1].slice(3));
        let startH = Number(info[0].slice(0,2));
        let startM = Number(info[0].slice(3));
        let playH = stopH < startH ? 60*(stopH+24-startH) : 60*(stopH-startH);
        let playM = stopM < startM ? stopM+60-startM : stopM-startM;
        let playTime = playH + playM;
        let music = info[3].match(/([A-Z]#?)/g);
        let musicLength = music.length;
        let findInThis = playTime>musicLength ? info[3].repeat(Math.floor(playTime/musicLength))+info[3].slice(0, playTime%musicLength) : info[3];
        if(findInThis.includes(m)){
            if(findInThis[findInThis.indexOf(m)+m.length] !== '#'){
                answer.push([playTime, info[2]]);
            }
        }
    });
    if(answer.length>1){
        answer.sort((a,b)=> {
            if(a[0]===b[0]) return 0;
            return b[0]-a[0];
        });
        return answer[0][1];
    }
    if(answer.length<1){
        return '(None)';
    }
    return answer[0][1];
}