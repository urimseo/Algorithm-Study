function 세균_증식(n, t) {
  return n * 2 ** t;
}

// function solution(n, t) {
//   return n << t;
// }

function 제곱수_판별하기(n) {
  return Math.sqrt(n) % 1 === 0 ? 1 : 2;
}

function 문자열안에_문자열(str1, str2) {
  return str1.includes(str2) ? 1 : 2;
}
