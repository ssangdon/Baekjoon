let inputs = require("fs")
  .readFileSync("최소비용구하기.txt")
  .toString()
  .trim()
  .split("\n");

const dijkstra = (graph, start, distance) => {
  let queue = [[0, start]];
  distance[start] = 0;
  while (queue.length) {
    let [dist, now] = queue.shift();
    if (dist > distance[now]) continue;
    for (let node of graph[now]) {
      let cost = dist + node[0];
      if (distance[node[1]] > cost) {
        distance[node[1]] = cost;
        queue.push([cost, node[1]]);
      }
    }
  }
  return distance;
};
function solution(input) {
  let [n, m] = [+input[0], +input[1]];
  let graph = Array.from(Array(n + 1), () => Array(0));
  for (var i = 2; i < 2 + m; i++) {
    let [a, b, c] = input[i].split(" ").map(d => +d);
    graph[a].push([c, b]);
  }
  //   console.log(input[m + 2]);
  let [start, end] = input[m + 2].split(" ").map(d => +d);
  let distance = new Array(n + 1).fill(Infinity);
  let a = dijkstra(graph, start, distance);
  console.log(a[end]);
}
solution(inputs);
