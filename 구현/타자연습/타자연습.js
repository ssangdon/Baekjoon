let inputs = require("fs")
  .readFileSync("타자연습.txt")
  .toString()
  .trim()
  .split("\n");
const word = {
  q: "L",
  w: "L",
  e: "L",
  r: "L",
  t: "L",
  y: "L",
  a: "L",
  s: "L",
  d: "L",
  f: "L",
  g: "L",
  z: "L",
  x: "L",
  c: "L",
  v: "L",
  b: "L",
};
function solution(input) {
  let str = input[0];
  let lCount = 0;
  let rCount = 0;
  let strArr = str.split("");
  let rest = 0;
  strArr.forEach(d => {
    if (d.trim().length === 0) {
      rest++;
    } else if (d === d.toLowerCase()) {
      word[d] === undefined ? rCount++ : lCount++;
    } else {
      rest++;
      word[d.toLowerCase()] === undefined ? rCount++ : lCount++;
    }
  });
  while (rest > 0) {
    if (lCount < rCount || Math.abs(lCount - rCount) <= 1) {
      lCount++;
    } else {
      rCount++;
    }
    rest--;
  }
  console.log(lCount, rCount);
}
solution(inputs);
