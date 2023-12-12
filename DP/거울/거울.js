let inputs = require("fs")
  .readFileSync("거울.txt")
  .toString()
  .trim()
  .split("\n");

const changeDir = dir => {
  switch (dir) {
    case "U":
      return "R";
    case "D":
      return "L";
    case "L":
      return "D";
    case "R":
      return "U";
  }
};

const makeDir = dir => {
  let command;
  let dirArr = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  switch (dir) {
    case "U":
      command = dirArr[0];
      break;
    case "D":
      command = dirArr[1];
      break;
    case "L":
      command = dirArr[2];
      break;
    case "R":
      command = dirArr[3];
      break;
  }
  return command;
};

function solution(input) {
  let [n, m] = input[0].split(" ").map(d => +d);
  let board = [];
  let idx = 1;
  let obj = {};
  let strArr = [];
  for (var i = 1; i < 1 + n; i++) {
    board.push(input[i].split(" ").map(d => +d));
  }
  // 오른쪽으로 쏘기
  let str = "";
  for (var i = 0; i < n; i++) {
    let queue = [[i, 0, "R"]];
    let str = `${i},-1,L`;
    obj[str] = idx++;
    while (queue.length) {
      let [x, y, dir] = queue.shift();
      dir = board[x][y] === 1 ? changeDir(dir) : dir;

      let [dx, dy] = makeDir(dir);
      let lx = x + dx;
      let ly = y + dy;
      if (lx < 0 || ly < 0 || lx >= n || ly >= m) {
        strArr.push(`${lx},${ly},${dir}`);
        break;
      } else {
        queue.push([lx, ly, dir]);
      }
    }
  }
  // 위쪽으로 쏘기
  for (var i = 0; i < m; i++) {
    let queue = [[n - 1, i, "U"]];
    let str = `${n},${i},D`;
    obj[str] = idx++;
    while (queue.length) {
      let [x, y, dir] = queue.shift();
      dir = board[x][y] === 1 ? changeDir(dir) : dir;

      let [dx, dy] = makeDir(dir);
      let lx = x + dx;
      let ly = y + dy;
      if (lx < 0 || ly < 0 || lx >= n || ly >= m) {
        strArr.push(`${lx},${ly},${dir}`);
        // console.log(lx, ly, dir);
        break;
      } else {
        queue.push([lx, ly, dir]);
      }
    }
  }

  // 왼쪽으로 쏘기
  for (var i = n - 1; i >= 0; i--) {
    let queue = [[i, m - 1, "L"]];
    let str = `${i},${m},R`;
    obj[str] = idx++;
    while (queue.length) {
      let [x, y, dir] = queue.shift();
      dir = board[x][y] === 1 ? changeDir(dir) : dir;
      let [dx, dy] = makeDir(dir);
      let lx = x + dx;
      let ly = y + dy;
      if (lx < 0 || ly < 0 || lx >= n || ly >= m) {
        strArr.push(`${lx},${ly},${dir}`);
        break;
      } else {
        queue.push([lx, ly, dir]);
      }
    }
  }

  // 아래쪽으로 쏘기
  for (var i = m - 1; i >= 0; i--) {
    let queue = [[0, i, "D"]];
    let str = `-1,${i},U`;
    obj[str] = idx++;
    while (queue.length) {
      let [x, y, dir] = queue.shift();
      dir = board[x][y] === 1 ? changeDir(dir) : dir;
      let [dx, dy] = makeDir(dir);
      let lx = x + dx;
      let ly = y + dy;
      if (lx < 0 || ly < 0 || lx >= n || ly >= m) {
        strArr.push(`${lx},${ly},${dir}`);

        break;
      } else {
        queue.push([lx, ly, dir]);
      }
    }
  }
  strArr = strArr.map(d => {
    return obj[d];
  });
  console.log(strArr.join(" "));
}
solution(inputs);
