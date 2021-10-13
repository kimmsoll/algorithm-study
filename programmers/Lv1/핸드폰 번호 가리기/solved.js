function solution(phone_number) {
    let result = "";
    let numbers = phone_number.split("");
    for(let i=0; i<numbers.length - 4; i++){
        numbers[i] = "*";
    }
    for(let i=0; i<numbers.length; i++){
        result += numbers[i]
    }
    return result;
}

// 속도가 훨씬 빨라짐!
function solution(phone_number) {
    let nums = phone_number.slice(-4);
    let arrLength = phone_number.length - 4;
    return "*".repeat(arrLength) + nums;
}