let inputs = require("fs")
  .readFileSync("RGB거리.txt")
  .toString()
  .trim()
  .split("\n");
function solution(input) {
  let n = parseInt(input[0]);
  let board = [];
  for (var i = 1; i < 1 + n; i++) {
    let part = input[i].split(" ").map(d => parseInt(d));
    board.push(part);
  }
  for (var k = 0; k < n - 1; k++) {
    let minFirst = Math.min(...board[k]);
    let firstIdx = board[k].indexOf(minFirst);
    let slice = [
      ...board[k].slice(0, firstIdx),
      ...board[k].slice(firstIdx + 1),
    ];
    let minSecond = Math.min(...slice);
    let nextBoard = board[k + 1];
    for (var z = 0; z < nextBoard.length; z++) {
      if (z === firstIdx) {
        nextBoard[z] += minSecond;
      } else {
        nextBoard[z] += minFirst;
      }
    }
    // console.log(minFirst, minSecond, firstIdx, secondIdx);
  }
  console.log(Math.min(...board[n - 1]));
}
solution(inputs);
