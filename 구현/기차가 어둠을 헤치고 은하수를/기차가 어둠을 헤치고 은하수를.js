let inputs = require("fs")
  .readFileSync("기차가 어둠을 헤치고 은하수를.txt")
  .toString()
  .trim()
  .split("\n");

function solution(input) {
  let [n, m] = input[0].split(" ").map(d => +d);
  let train = Array.from(Array(n), () => Array(20).fill(0));
  let set = new Set();
  for (var i = 1; i < 1 + m; i++) {
    let [com, tNum, sNum] = input[i].split(" ").map(d => +d);
    switch (com) {
      case 1:
        train[tNum - 1][sNum - 1] = 1;
        break;
      case 2:
        train[tNum - 1][sNum - 1] = 0;
        break;
      case 3:
        train[tNum - 1].pop();
        train[tNum - 1].unshift(0);
        break;
      case 4:
        train[tNum - 1].shift();
        train[tNum - 1].push(0);
        break;
    }
  }
  train.forEach(d => {
    let str = d.join("");
    if (!set.has(str)) {
      set.add(str);
    }
  });
  console.log(set.size);
}
solution(inputs);
