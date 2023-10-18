let inputs = require("fs")
  .readFileSync("설탕 배달.txt")
  .toString()
  .trim()
  .split("\n");
function solution(input) {
  let weight = parseInt(input[0]);
  let max = Math.floor(weight / 5);
  let dp = new Array(max + 1).fill(Infinity);
  for (var i = 0; i < dp.length; i++) {
    let num5 = i * 5;
    let remain = weight - num5;
    if (remain % 3 === 0) {
      dp[i] = i + remain / 3;
    }
  }
  let min = Math.min(...dp);
  min === Infinity ? console.log(-1) : console.log(min);
}
solution(inputs);
