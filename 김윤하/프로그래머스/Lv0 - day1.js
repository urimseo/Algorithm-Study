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

function 특수문자_출력하기() {
  console.log("!@#$%^&*(\\'\"<>?:;");
}

function 덧셈식_출력하기() {
  input = input.split(" ").map(Number); // python에서 map(int, input.split(' ')과 같음)
  const [a, b] = input;
  console.log(`${a} + ${b} = ${a + b}`);
}

function 문자열_붙여서_출력하기() {
  input = input.split(" ");
  console.log(input.join(""));
}

function 문자열_돌리기() {
  const arr = [...input];
  arr.map((ch) => console.log(ch));
}
