function solution(files) {
    return files.sort((a,b) => {
        // \D 는 숫자를 제외한 모든 문자
        // ^ 는 파일의 시작 부분에 대응
        const header1 = a.match(/^\D+/)[0].toLowerCase();
        const header2 = b.match(/^\D+/)[0].toLowerCase();
        
        if(header1 < header2){
            return -1;
        }else if(header1 > header2){
            return 1;
        }
        // 문자 이후, 연속으로 나오는 숫자에 대응
        const number1 = a.match(/\d+/)[0].replace(/^0+/, "");
        const number2 = b.match(/\d+/)[0].replace(/^0+/, "");
        
        return number1 - number2;
    })
}