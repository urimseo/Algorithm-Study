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

function OX퀴즈(quiz) {
  var answer = [];
  for (let val of quiz) {
    var arr = val.split(' ');
    var left = arr[1] === '+' ? +arr[0] + +arr[2] : +arr[0] - +arr[2];
    left === +arr[4] ? answer.push('O') : answer.push('X');
  }
  return answer;
}

function 자릿수_더하기(n) {
  return [...String(n)].reduce((a, c) => Number(a) + Number(c), 0);
}

function n의_배수_고르기(n, numlist) {
  return numlist.filter((num) => num % n === 0);
}

function 숫자_찾기(num, k) {
  var idx = [...String(num)].map((val) => +val).indexOf(k);
  return idx === -1 ? idx : idx + 1;

  // return [...String(num)].map((val) => +val).indexOf(k) + 1 || -1
  // 좌항이 -1을 리턴하면 +1로 인해 0이 되므로 0 || -1을 연산하면 -1 이 됨
  // 즉 -1이라면 -1 나머지는 k의 인덱스 + 1이 됨
}
