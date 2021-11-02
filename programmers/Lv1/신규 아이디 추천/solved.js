// 훨씬 간단한 풀이!
function solution(new_id) {
    const answer = new_id
        .toLowerCase() // 1
        .replace(/[^\w-_.]/g, '') // 2
        .replace(/\.+/g, '.') // 3
        .replace(/^\.|\.$/g, '') // 4
        .replace(/^$/, 'a') // 5
        .slice(0, 15).replace(/\.$/, ''); // 6
    const len = answer.length;
    return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
}


// 그대로 구현한 풀이(복잡)
function solution(new_id) {
    let arr = new_id.split('');
    arr = arr.map((a)=>{
        if(a.match(/^[a-zA-Z]*$/)){
            return a.toLowerCase()
        }else return a;
    });
    arr = arr.filter((a)=>{
        if(!a.match(/[\{\}\[\]\/?,;:|\)*~`!^\+<>@\#$%&\\\=\(\'\"]/)){
            return a;
        }
    });
    arr = arr.join('').replace(/\.+/g, '.');
    arr = arr.split('');
    if(arr[0] === '.') arr.splice(0,1);
    if(arr[arr.length-1] === '.') arr.splice(arr.length-1);
    if(arr.length<1) arr.push("a");
    if(arr.length>=16) arr.splice(15);
    if(arr[arr.length-1] === '.') arr.splice(arr.length-1);
    if(arr.length<=2){
        let word = arr[arr.length-1];
        while(arr.length < 3){
            arr.push(word);
        }
    }
    return arr.join('');
}