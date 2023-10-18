let inputs = require("fs")
  .readFileSync("적록색약.txt")
  .toString()
  .trim()
  .split("\n");
let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];
const check = (arr, a, b, visited, size) => {
  let color = arr[a][b];
  let needVisit = [[a, b]];
  visited[a][b] = 1;
  let prefix = 0;
  while (prefix < needVisit.length) {
    let [x, y] = needVisit[prefix];
    for (var i = 0; i < 4; i++) {
      let lx = x + dx[i];
      let ly = y + dy[i];
      if (
        lx >= 0 &&
        ly >= 0 &&
        lx < size &&
        ly < size &&
        arr[lx][ly] === color &&
        !visited[lx][ly]
      ) {
        visited[lx][ly] = 1;
        needVisit.push([lx, ly]);
      }
    }
    prefix++;
  }
  return visited;
};
function solution(input) {
  let n = parseInt(input[0]);
  let visited = Array.from(Array(n), () => Array(n).fill(0));
  let visited2 = Array.from(Array(n), () => Array(n).fill(0));
  let count2 = 0;

  let board = [];
  for (var i = 1; i < 1 + n; i++) {
    board.push(input[i].split(""));
  }
  let count = 0;
  for (var j = 0; j < n; j++) {
    for (var k = 0; k < n; k++) {
      if (!visited[j][k]) {
        visited = check(board, j, k, visited, n);
        count++;
      }
    }
  }
  for (var k = 0; k < n; k++) {
    for (var m = 0; m < n; m++) {
      if (board[k][m] === "R") board[k][m] = "G";
    }
  }
  for (var a = 0; a < n; a++) {
    for (var b = 0; b < n; b++) {
      if (!visited2[a][b]) {
        visited2 = check(board, a, b, visited2, n);
        count2++;
      }
    }
  }

  console.log(count, count2);
}
solution(inputs);
