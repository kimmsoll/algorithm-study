function solution(dir){
let types = ["L", "R", "U", "D"];
let dy = [-1, 1, 0, 0];
let dx = [0, 0, -1, 1];
let x = 1;
let y = 1;
let nx = 0;
let ny = 0;

for(let a of dir){
  for(let i=0; i<dx.length; i++){
    if(a === types[i]){
      nx = x + dx[i];
      ny = y + dy[i];
      if(nx < 1 || ny < 1 || nx>5 || ny>5){
        continue;
        }
      x = nx;
      y = ny;
      
      }
    }
}
return [x, y];
}

solution(["R", "R", "R", "U", "D", "D"]);