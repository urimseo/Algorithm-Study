function 수열과_구간_쿼리_4(arr, queries) {
  for (let [s, e, k] of queries) {
    for (let i = s; i < e + 1; i++) {
      if (i % k === 0) {
        arr[i]++;
      }
    }
  }
  return arr;
}

function 배열_만들기_2(l, r) {
  let answer = [];

  for (let i = l; i < r + 1; i++) {
    if (i % 5 === 0) {
      if (
        [...String(i)].every((element) => element === "5" || element == "0")
      ) {
        answer.push(i);
      }
    }
  }

  return answer.length ? answer : [-1];
}

function 카운트_업(start_num, end_num) {
  var answer = [];
  for (let i = start_num; i < end_num + 1; i++) {
    answer.push(i);
  }
  return answer;
}

function 콜라츠_수열_만들기(n) {
  var answer = [];
  answer.push(n);
  while (n > 1) {
    if (n % 2 == 0) {
      n /= 2;
      answer.push(n);
    } else {
      n = 3 * n + 1;
      answer.push(n);
    }
  }

  return answer;
}

// 재귀로 푸는 법
function 콜라츠_수열_만들기_재귀(n, arr = []) {
  arr.push(n);
  if (n === 1) return arr;
  if (n % 2 === 0) return solution(n / 2, arr);
  return solution(3 * n + 1, arr);
}

function 배열_만들기_4(arr) {
  var stk = [];
  let i = 0;
  while (i < arr.length) {
    if (stk.length === 0) {
      stk.push(arr[i]);
      i++;
    } else if (stk.at(-1) < arr[i]) {
      stk.push(arr[i]);
      i++;
    } else {
      stk.pop();
    }
  }
  return stk;
}

function 간단한_논리_연산(x1, x2, x3, x4) {
  var answer = (x1 || x2) && (x3 || x4);
  return answer;
}

function 주사위_게임_3(a, b, c, d) {
  var answer = 0;
  var numbers = [a, b, c, d];
  var set = new Set(numbers);
  switch (set.size) {
    case 1:
      return (answer = 1111 * a);

    case 2: {
      // 3개 1개, 2개, 2개씩 같은 경우
      const [p, q] = [...set];
      let cnt = 0;
      for (let i = 0; i < 4; i++) {
        for (let j = i + 1; j < 4; j++) {
          if (numbers[i] === numbers[j]) {
            cnt++;
          }
        }
      }
      // 3개 1개
      if (cnt === 3) {
        // p와 q 판별
        let pCnt = 0,
          qCnt = 0;
        numbers.forEach((n) => (n === p ? pCnt++ : qCnt++));
        return pCnt > qCnt ? Math.pow(10 * p + q, 2) : Math.pow(10 * q + p, 2);
      } else if (cnt === 2) {
        return (p + q) * Math.abs(p - q);
      }
    }
    case 3: {
      const [p, q, r] = [...set];
      let pCnt = 0,
        qCnt = 0;
      numbers.forEach((n) => {
        n === p && pCnt++;
        n === q && qCnt++;
      });
      if (pCnt === 2) {
        return q * r;
      } else if (qCnt === 2) {
        return p * r;
      } else {
        return p * q;
      }
    }
    case 4:
      return Math.min(...numbers);
  }
}
