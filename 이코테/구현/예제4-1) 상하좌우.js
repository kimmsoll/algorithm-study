function solution(directions) {
  let d = ["L", "R", "U", "D"];
  let dy = [-1, 1, 0, 0];
  let dx = [0, 0, -1, 1];
  let x = 1;
  let y = 1;
  
  for (let a of directions) {
    for (let i=0; i<d.length; i++) {
      if (a === d[i]) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        // 공간 벗어나는 경우 무시
        if (nx < 1 || ny < 1 || nx>5 || ny>5) {
          continue;
        }
        // 벗어나지 않는 경우 x, y에 할당
        x = nx;
        y = ny;
      }
    }
  }
  return [x, y];
}

solution(["R", "R", "R", "U", "D", "D"]);
