// 90도 회전
function rotate(a){
    let n = a.length; // 행 길이 계산
    let m = a[0].length; // 열 길이 계산
    let result = Array.from(Array(n), () => new Array(m)); // 결과 리스트
    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            result[j][n -i -1] = a[i][j];
        }
    }
    return result;
}
// 자물쇠 중간 부분이 모두 1인지 확인
function check(bigLock){
    let len = bigLock.length/3;
    for(let i=len; i<len*2; i++){
        for(let j=len; j<len*2; j++){
            if(bigLock[i][j] !== 1){
                return false;
            }
        }
    }
    return true;
}

function solution(key, lock) {
    let length = lock.length;
    let bigLock = Array.from(Array(length*3), () => new Array(length*3));
    for(let i=length; i<length*2; i++){
        for(let j=length; j<length*2; j++){
            bigLock[i][j] = lock[Math.floor(i%length)][Math.floor(j%length)];
        }
    }
    // 4가지 방향에 대해서 확인
    for(let r=0; r<4; r++){
        key = rotate(key);
        for(let x=0; x<length*2; x++){
            for(let y=0; y<length*2; y++){
                for(let i=0; i<key.length; i++){
                    for(let j=0; j<key.length; j++){
                        bigLock[x+i][y+j] += key[i][j];
                        if(check(bigLock) === true){
                            return true;
                        }
                    }
                }
                // 넣었던 열쇠 빼기
                for(let i=0; i<key.length; i++){
                    for(let j=0; j<key.length; j++){
                        bigLock[x+i][y+j] -= key[i][j];
                    }
                }
            }
        }
    }
    return false;
}