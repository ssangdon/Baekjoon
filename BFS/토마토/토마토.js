let inputs = require("fs")
  .readFileSync("토마토.txt")
  .toString()
  .trim()
  .split("\n");
function solution(input) {
  let [m, n] = input[0].split(" ").map(d => parseInt(d));
  let board = [];
  let dx = [-1, 1, 0, 0];
  let dy = [0, 0, -1, 1];
  let day = -1;
  let needVisit = [];
  for (var i = 1; i < 1 + n; i++) {
    const arr = input[i].split(" ").map(d => parseInt(d));
    board.push(arr);
    let idx = -1;
    while (true) {
      idx = arr.indexOf(1, idx + 1);
      if (idx === -1) break;
      needVisit.push([i - 1, idx]);
    }
  }

  let prefix = 0;
  while (1) {
    let len = needVisit.length;
    let change = 0;
    if (prefix === len) break;
    for (var l = prefix; l < len; l++) {
      let [x, y] = needVisit[l];
      board[x][y] = 1;
      for (var z = 0; z < 4; z++) {
        let lx = x + dx[z];
        let ly = y + dy[z];
        if (lx >= 0 && ly >= 0 && lx < n && ly < m && board[lx][ly] === 0) {
          change = 1;
          needVisit.push([lx, ly]);
        }
      }
    }

    prefix = len;
    day++;
    if (!change) break;
  }
  for (var i = 0; i < n; i++) {
    if (board[i].includes(0)) {
      return console.log(-1);
    }
  }
  return console.log(day);
}
solution(inputs);
