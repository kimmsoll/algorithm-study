function getGcd(a, b) {
    // a와 b의 나머지를 구한다.
    const mod = a % b;
    // 만약 나머지가 0일 경우 b를 반환한다.
    if (mod === 0) {
        return b;
    }
    // 만약 0이 아닐경우 a에 b를 넣고 b에 나머지인 mod를 넣어 해당 함수를 다시 호출해준다.
    return getGcd(b, mod);
}

function solution(w, h) {
    // 대각선이 지나는 사각형 개수를 구하는 공식
    // 대각선이 지나는 사각형 개수 = W + H - (W, H의 최대 공약수)
    let gcd = getGcd(w,h);
    return w*h - (w + h - gcd);
}