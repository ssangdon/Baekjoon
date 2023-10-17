let inputs = require("fs")
  .readFileSync("N과M.txt")
  .toString()
  .trim()
  .split("\n");

function solution(input) {
  let [n, m] = input[0].split(" ").map(d => parseInt(d));
  let arr = input[1].split(" ").map(d => parseInt(d));
  arr.sort((a, b) => a - b);
  const back = (arr, num, result) => {
    if (num === 0) {
      return console.log(result.join(" "));
    }
    for (var i = 0; i < arr.length; i++) {
      result.push(arr[i]);
      back(arr, num - 1, result);
      result.pop();
      console.log(111111);
    }
  };
  back(arr, m, []);
}
solution(inputs);
