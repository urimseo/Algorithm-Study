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
