let inputs = require("fs")
  .readFileSync("데크 소트.txt")
  .toString()
  .trim()
  .split("\n");

function solution(input) {
  let arr = [];
  for (var i = 0; i < input.length; i++) {
    arr.push(+input[i]);
  }
  let len = arr.length;
  let sorted = arr.slice().sort((a, b) => a - b);
  let k = 0;
  if (len === 1) {
    console.log(1);
  } else {
    for (var i = 0; i < arr.length; i++) {
      let idx = sorted.indexOf(arr[i]);
      sorted[idx] = 1001;
      if (idx === 0) {
        if (sorted[idx + 1] !== 1001) k++;
      } else if (idx === len - 1) {
        if (sorted[idx - 1] !== 1001) k++;
      } else if (sorted[idx - 1] == 1001 || sorted[idx + 1] == 1001) {
        continue;
      } else {
        k++;
      }
    }
    console.log(k);
  }
}
solution(inputs);
