let inputs = require("fs")
  .readFileSync("단축키 지정.txt")
  .toString()
  .trim()
  .split("\n");

function solution(input) {
  let key = {};
  let n = +input[0];
  for (var i = 1; i < 1 + n; i++) {
    let splited = input[i].split(" ");
    let len = splited.length;
    let isAlready = false;
    // 두 단어 이상
    if (len > 1) {
      // 각 단어의 맨 앞글자가 단축어로 등록되어있는지 확인
      for (var j = 0; j < len; j++) {
        let wordSplited = splited[j].split("");
        if (key[wordSplited[0]] === undefined) {
          key[wordSplited[0].toUpperCase()] = 1;
          key[wordSplited[0].toLowerCase()] = 1;

          wordSplited[0] = `[${wordSplited[0]}]`;
          splited[j] = wordSplited.join("");
          isAlready = true;
          break;
        }
      }
      if (!isAlready) {
        let isClear = false;
        for (var z = 0; z < len; z++) {
          let words = splited[z].split("");
          for (var k = 0; k < words.length; k++) {
            if (key[words[k]] === undefined) {
              key[words[k].toLowerCase()] = 1;
              key[words[k].toUpperCase()] = 1;
              words[k] = `[${words[k]}]`;
              isClear = true;
              break;
            }
          }
          if (isClear) {
            splited[z] = words.join("");
            break;
          }
        }
      }
      console.log(splited.join(" ").trim());
    } else {
      let word = splited[0].split("");
      for (var k = 0; k < word.length; k++) {
        if (key[word[k]] === undefined) {
          key[word[k].toLowerCase()] = 1;
          key[word[k].toUpperCase()] = 1;

          word[k] = `[${word[k]}]`;
          break;
        }
      }
      console.log(word.join("").trim());
    }
  }
}
solution(inputs);
