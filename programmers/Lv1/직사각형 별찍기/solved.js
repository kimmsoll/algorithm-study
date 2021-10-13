process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0])
    const b = Number(n[1]);
    
    for (let i=0; i<b; i++){
        //console.log("*".repeat(a));
        
        // 아래 방법이 효율성이 더 좋다
        console.log(Array(a+1).join("*"))
    }
});