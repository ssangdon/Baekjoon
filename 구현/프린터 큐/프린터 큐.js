let inputs = require("fs")
  .readFileSync("프린터 큐.txt")
  .toString()
  .trim()
  .split("\n");

function solution(input) {
  let n = +input[0];
  let idx = 1;
  for (var i = 0; i < n; i++) {
    let times = 0;
    let [n, m] = input[idx++].split(" ").map(d => +d);
    let weight = input[idx++].split(" ").map(d => +d);
    let sorted = weight.slice().sort((a, b) => a - b);
    let newArr = [];
    weight.forEach((d, i) => {
      newArr.push([d, i]);
    });
    while (sorted.length) {
      let shifted = newArr.shift();
      if (sorted.at(-1) === shifted[0]) {
        sorted.pop();
        if (shifted[1] === m) {
          console.log(++times);
          break;
        } else {
          times++;
        }
      } else {
        newArr.push(shifted);
      }
    }
  }
}
solution(inputs);
