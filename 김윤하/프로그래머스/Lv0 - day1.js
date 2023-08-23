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

function 문자열_출력하기() {
  console.log(input);
}

function a와_b_출력하기() {
  input = input.split(" ");
  const [a, b] = input;
  console.log(`a = ${a}\nb = ${b}`);
}

function 문자열_반복해서_출력하기() {
  input = input.split(" ");
  str = input[0];
  n = Number(input[1]);
  console.log(str.repeat(n));
}

function 대소문자_바꿔서_출력하기() {
  const arr = input.split("").map((char) => {
    return char === char.toUpperCase()
      ? char.toLowerCase()
      : char.toUpperCase();
  });
  console.log(newArr.join(""));
}
