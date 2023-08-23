let input = [];

function SolveInterface(probfunc) {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.on("line", function (line) {
    input = line;
  }).on("close", probfunc);
  return rl;
}

function 문자열출력하기() {
  console.log(input);
}
