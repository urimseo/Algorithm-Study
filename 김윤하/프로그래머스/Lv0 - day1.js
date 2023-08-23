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

function a와b출력하기() {
  input = input.split(" ");
  const [a, b] = input;
  console.log(`a = ${a}\nb = ${b}`);
}

function 문자열반복해서출력하기() {
  input = input.split(" ");
  str = input[0];
  n = Number(input[1]);
  console.log(str.repeat(n));
}
