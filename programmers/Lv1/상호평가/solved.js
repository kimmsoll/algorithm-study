function solution(scores) {
    let avg = 0;
    let result = ""
    let selfScores = [];
    
    for(let i=0; i<scores.length; i++){
        selfScores.push(scores[i][i]);
    }
    
    for(let i=0; i<scores.length; i++){
        let newArr = [];
        for(let j=0; j<scores.length; j++){
            newArr.push(scores[j][i]);
        }
        newArr.sort((a,b)=>a-b);
        if(newArr[0] !== newArr[1] && newArr[0] === selfScores[i]){
            newArr.shift();
        } else if(newArr[newArr.length-1] !== newArr[newArr.length-2] && newArr[newArr.length-1] === selfScores[i]){
            newArr.pop();
        }
        avg = (newArr.reduce((pre,cur)=>pre+cur))/newArr.length;
        
        if(avg>=90){
            result += "A";
        }else if(avg>=80 && avg<90){
            result += "B";
        }else if(avg>=70 && avg<80){
            result += "C";
        }else if(avg>=50 && avg<70){
            result += "D";
        }else if(avg<50){
            result += "F";
        }

    }
    return result;
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.13ms, 30.3MB)
// 테스트 2 〉	통과 (0.16ms, 30.4MB)
// 테스트 3 〉	통과 (0.12ms, 30MB)
// 테스트 4 〉	통과 (0.19ms, 30.2MB)
// 테스트 5 〉	통과 (0.19ms, 30.2MB)
// 테스트 6 〉	통과 (0.19ms, 30.2MB)
// 테스트 7 〉	통과 (0.16ms, 30.2MB)
// 테스트 8 〉	통과 (0.25ms, 30.1MB)
// 테스트 9 〉	통과 (0.18ms, 30.3MB)
// 테스트 10 〉	통과 (0.19ms, 30MB)
// 테스트 11 〉	통과 (0.14ms, 30.3MB)
// 테스트 12 〉	통과 (0.17ms, 30.2MB)
// 테스트 13 〉	통과 (0.11ms, 30MB)
// 테스트 14 〉	통과 (0.13ms, 30.3MB)
// 테스트 15 〉	통과 (0.16ms, 30.2MB)
// 테스트 16 〉	통과 (0.20ms, 30.3MB)
// 테스트 17 〉	통과 (0.18ms, 30.2MB)
// 테스트 18 〉	통과 (0.19ms, 30.2MB)
// 테스트 19 〉	통과 (0.23ms, 30.1MB)
// 테스트 20 〉	통과 (0.18ms, 30.3MB)
// 테스트 21 〉	통과 (0.34ms, 29.9MB)