let inputs = require("fs")
  .readFileSync("해킹.txt")
  .toString()
  .trim()
  .split("\n");
function dijkstra(start, graph, distance) {
  const queue = [];
  queue.push([0, start]);
  distance[start] = 0;

  while (queue.length > 0) {
    const [dist, now] = queue.shift();

    if (dist > distance[now]) {
      continue;
    }

    for (const node of graph[now]) {
      const cost = dist + node[0];
      if (cost < distance[node[1]]) {
        distance[node[1]] = cost;
        queue.push([cost, node[1]]);
      }
    }
  }

  return distance;
}

function solution(input) {
  let testCaseNum = +input[0];
  let start = 1;
  for (var i = 0; i < testCaseNum; i++) {
    let [n, d, c] = input[start].split(" ").map(d => +d);
    let count = 0;
    let time = 0;
    let board = Array.from(Array(n + 1), () => Array(0));
    for (var k = start + 1; k < d + start + 1; k++) {
      let [a, b, s] = input[k].split(" ").map(d => +d);
      board[b].push([s, a]);
    }
    const distance = new Array(n + 1).fill(Infinity);
    let a = dijkstra(c, board, distance);
    a.forEach(data => {
      if (data !== Infinity) {
        count++;
        time = Math.max(time, data);
      }
    });
    console.log(count, time);
    start = k;
  }
}
solution(inputs);
