let inputs = require("fs")
  .readFileSync("와드.txt")
  .toString()
  .trim()
  .split("\n");

function solution(input) {
  let [r, c] = input[0].split(" ").map(d => +d);
  let board = [];
  for (var i = 1; i < 1 + r; i++) {
    board.push(input[i].split(""));
  }
  let dx = [-1, 1, 0, 0];
  let dy = [0, 0, -1, 1];
  let [cX, cY] = input[1 + r].split(" ").map(d => +d - 1);
  let move = input[2 + r].split("");
  let visited = Array.from(Array(r), () => Array(c).fill("#"));
  for (var i = 0; i < move.length; i++) {
    let command = move[i];
    switch (command) {
      case "U":
        cX--;
        break;
      case "D":
        cX++;
        break;
      case "L":
        cY--;
        break;
      case "R":
        cY++;
        break;
      case "W":
        let queue = [[cX, cY]];
        while (queue.length) {
          let [x, y] = queue.shift();
          if (visited[x][y] === "#") {
            visited[x][y] = ".";
            for (var k = 0; k < 4; k++) {
              let lx = x + dx[k];
              let ly = y + dy[k];
              if (
                lx >= 0 &&
                ly >= 0 &&
                lx < r &&
                ly < c &&
                visited[lx][ly] === "#" &&
                board[lx][ly] === board[x][y]
              ) {
                queue.push([lx, ly]);
              }
            }
          }
        }
        break;
    }
  }
  visited[cX][cY] = ".";
  for (var j = 0; j < 4; j++) {
    let nx = cX + dx[j];
    let ny = cY + dy[j];
    if (nx >= 0 && nx < r && ny >= 0 && ny < c) visited[nx][ny] = ".";
  }
  visited.forEach(d => {
    console.log(d.join(""));
  });
}
solution(inputs);
