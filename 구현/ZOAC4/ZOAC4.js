let inputs = require("fs")
  .readFileSync("ZOAC4.txt")
  .toString()
  .trim()
  .split("\n");

function solution(input) {
  let [h, w, n, m] = input[0].split(" ").map(d => +d);
  let dx = [-n - 1, n + 1, 0, 0];
  let dy = [0, 0, -m - 1, m + 1];
  let ans = 0;
  let board = Array.from(Array(h), () => Array(w).fill(0));
  for (var i = 0; i < h; i++) {
    for (var k = 0; k < w; k++) {
      let queue = [[i, k]];
      let answer = 0;
      //   let visited = Array.from(Array(h), () => Array(w).fill(0));

      while (queue.length) {
        let [x, y] = queue.shift();
        if (!board[x][y]) {
          board[x][y] = 1;
          answer++;
          for (var j = 0; j < 4; j++) {
            let lx = x + dx[j];
            let ly = y + dy[j];
            if (lx >= 0 && ly >= 0 && lx < h && ly < w && !board[lx][ly]) {
              queue.push([lx, ly]);
            }
          }
        }
      }
      //   console.log(visited);
      ans = Math.max(ans, answer);
    }
  }
  console.log(ans);
}
solution(inputs);
