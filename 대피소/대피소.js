let inputs = require("fs")
  .readFileSync("대피소.txt")
  .toString()
  .trim()
  .split("\n");
const getDistance = (arr1, arr2) => {
  let [x1, y1] = arr1;
  let [x2, y2] = arr2;
  return Math.abs(x1 - x2) + Math.abs(y1 - y2);
};
const getCombination = (selectNum, arr) => {
  let result = [];
  if (selectNum === 1) return arr.map(d => [d]);
  arr.forEach((fixed, idx, origin) => {
    let rest = origin.slice(idx + 1);
    let combination = getCombination(selectNum - 1, rest);
    let attached = combination.map(d => [fixed, ...d]);
    result.push(...attached);
  });
  return result;
};
function solution(input) {
  let [n, k] = input[0].split(" ").map(d => parseInt(d));
  let house = [];
  let num = new Array(n).fill().map((_, i) => i);
  for (var i = 1; i < 1 + n; i++) {
    let [x, y] = input[i].split(" ").map(d => parseInt(d));
    house.push([x, y]);
  }
  let distance = Array.from(Array(n), () => Array(n).fill(0));
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      if (i === j) continue;
      else {
        distance[i][j] = getDistance(house[i], house[j]);
      }
    }
  }
  let results = getCombination(k, num);
  let reArr = [];
  results.forEach(data => {
    console.log(data);
  });
  //   console.log(Math.min(...reArr));
}

solution(inputs);
