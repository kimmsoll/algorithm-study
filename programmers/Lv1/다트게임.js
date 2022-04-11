function solution(dartResult) {
    let result = dartResult.match(/([0-9]+)(S|D|T)(\*|#)?/g);
    let finalScore = [];
    for (let i=0; i<result.length; i++) {
        let score = result[i];
        let currScore = 0;
        for (let letter of score) {
            // 숫자임을 파악해서
            if (letter == Number(letter)) {
                // 10일 수 있으니, 문자열로 저장
                currScore += letter;
            } else if (letter === 'S') {
                currScore *= 1;   
            } else if (letter === 'D') {
                currScore = Math.pow(Number(currScore), 2);
            } else if (letter === 'T') {
                currScore = Math.pow(Number(currScore), 3);
            } else if (letter === '*') {
                if (finalScore.length < 1) {
                    currScore *= 2;
                } else {
                    finalScore[i-1] *= 2;
                    currScore *= 2;
                }
            } else if (letter === '#') {
                currScore *= (-1);
            }
        }
        finalScore.push(currScore);
    }
    return finalScore.reduce((a, b) => a + b);
}