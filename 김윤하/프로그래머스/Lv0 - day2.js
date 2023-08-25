function n의_배수(num, n) {
  return Number(num % n === 0);
}

function 공배수(number, n, m) {
  return number % n === 0 && number % m === 0 ? 1 : 0;
}

function 홀짝에_따라_다른_값_반환하기(n) {
  var answer = 0;
  if (n % 2) {
    for (let i = 1; i < n + 1; i += 2) {
      answer += i;
    }
  } else {
    for (let i = 2; i < n + 1; i += 2) {
      answer += i ** 2;
    }
  }
  return answer;
}

function 조건_문자열(ineq, eq, n, m) {
  const operator = ineq + eq;
  let answer;
  switch (operator) {
    case ">=":
      answer = n >= m;
      break;
    case "<=":
      answer = n <= m;
      break;
    case ">!":
      answer = n > m;
      break;
    case "<!":
      answer = n < m;
      break;
  }
  return Number(answer);
}

function flag에_따라_다른_값_반환하기(a, b, flag) {
  return flag ? a + b : a - b;
}

function 코드_처리하기(code) {
  let mode = 0; // 0 or 1
  let ret = "";

  for (let idx = 0; idx < code.length; idx++) {
    if (code[idx] === "1") {
      mode = mode === 1 ? 0 : 1;
      continue; // code[idx]가 1일 때는 아래 코드 실행 X
    }
    if ((mode === 0 && idx % 2 === 0) || (mode === 1 && idx % 2)) {
      ret += code[idx];
    }
  }

  var answer = ret.length ? ret : "EMPTY";
  return answer;
}

function 등차수열의_특정한_항만_더하기(a, d, included) {
  const n = included.length;
  let answer = 0;
  for (let i = 0; i < n; i++) {
    answer += included[i] ? a + i * d : 0;
  }

  return answer;
}
