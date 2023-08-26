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

function 주사위_게임_2(a, b, c) {
  var answer = 0;
  const set = new Set([a, b, c]);
  switch (set.size) {
    case 3:
      answer = a + b + c;
      break;
    case 2:
      answer = (a + b + c) * (a ** 2 + b ** 2 + c ** 2);
      break;
    case 1:
      answer =
        (a + b + c) * (a ** 2 + b ** 2 + c ** 2) * (a ** 3 + b ** 3 + c ** 3);
      break;
  }
  return answer;
}

function 원소들의_곱과_합(num_list) {
  var calMul = 1;
  var calSum = 0;
  for (let i = 0; i < num_list.length; i++) {
    calMul *= num_list[i];
    calSum += num_list[i];
  }
  var answer = calMul < calSum ** 2 ? 1 : 0;

  return answer;
}

function 이어_붙인_수(num_list) {
  let odd = "";
  let even = "";
  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] % 2) {
      odd += num_list[i];
    } else {
      even += num_list[i];
    }
  }
  var answer = Number(odd) + Number(even);
  return answer;
}

function 마지막_두_원소(num_list) {
  var a = num_list.at(-1);
  var b = num_list.at(-2);
  if (a > b) {
    num_list.push(a - b);
  } else {
    num_list.push(a * 2);
  }
  return num_list;
}
