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

function 홀짝_구분하기() {
  n = Number(input);
  var result = n % 2 === 0 ? `${n} is even` : `${n} is odd`;
  console.log(result);
}

function 문자열_겹쳐쓰기(my_string, overwrite_string, s) {
  var arr = [...my_string];
  // array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
  // 배열.splice(시작[, 삭제할 수(없으면 삭제하지 않고 삽입만 함[, 대체할 것)
  arr.splice(s, overwrite_string.length, overwrite_string);
  return arr.join("");
}

function 문자열_섞기(str1, str2) {
  var answer = "";
  for (let i = 0; i < str1.length; i++) answer += str1[i] + str2[i];
  return answer;
}

function 문자_리스트를_문자열로_변환하기(arr) {
  return arr.join("");
}

function 문자열_곱하기(my_string, k) {
  return my_string.repeat(k);
}

function 더_크게_합치기(a, b) {
  var str1 = String(a) + String(b);
  var str2 = String(b) + String(a);
  return Math.max(str1, str2);
}
// 정수 두 개 string으로 합칠 때 `${a}${b}` 처럼 해도 됨

function 두_수의_연산값_비교하기(a, b) {
  return Math.max(Number(`${a}${b}`), 2 * a * b);
}
