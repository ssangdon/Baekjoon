let inputs = require("fs")
  .readFileSync("틱택토.txt")
  .toString()
  .trim()
  .split("\n");

let checkFin = (board, char) => {
  let garoCheck = false;
  let saeroCheck = false;
  let crossCheck = false;
  for (var i = 0; i < 3; i++) {
    let count = 0;
    for (var k = 0; k < 3; k++) {
      if (board[i][k] !== char) break;
      else count++;
    }
    if (count === 3) {
      garoCheck = true;
      break;
    }
  }
  for (var i = 0; i < 3; i++) {
    let count = 0;
    for (var k = 0; k < 3; k++) {
      if (board[k][i] !== char) break;
      else count++;
    }
    if (count === 3) {
      saeroCheck = true;
      break;
    }
  }
  for (var k = 0; k < 3; k++) {
    let count = 0;
    if (board[k][k] !== char) break;
    else count++;
    if (count === 3) {
      crossCheck = true;
      break;
    }
  }
  for (var k = 0; k < 3; k++) {
    let count = 0;
    if (board[2 - k][2 - k] !== char) break;
    else count++;
    if (count === 3) {
      crossCheck = true;
      break;
    }
  }
  return garoCheck || saeroCheck || crossCheck;
};
function solution(input) {
  let start = 0;
  while (input[start] !== "end") {
    let board = [];
    let xCount = 0;
    let oCount = 0;
    let str = input[start].split("");
    for (var i = 0; i < str.length; i++) {
      if (str[i] === "X") xCount++;
      else if (str[i] === "O") oCount++;
    }
    board = [str.slice(0, 3), str.slice(3, 6), str.slice(6)];
    // console.log(board);
    if (xCount < oCount) {
      console.log("invalid");
    } else if (xCount === oCount) {
      let x = checkFin(board, "X");
      let o = checkFin(board, "O");
      //   console.log(board, x, o);
      if (!x && !o) {
        console.log("valid");
      } else if (!x && o) {
        console.log("valid");
      } else {
        console.log("invalid");
      }
      //   console.log(x, o);
    } else {
      if (xCount - oCount !== 1) console.log("invalid");
      else {
        let xFin = checkFin(board, "X");
        let oFin = checkFin(board, "O");
        if (!xFin && !oFin) {
          console.log("valid");
        } else if (xFin && !oFin) {
          console.log("valid");
        } else {
          console.log("invalid");
        }
      }
    }

    start++;
  }
}
solution(inputs);
// x x x
// o o .
// x x x
