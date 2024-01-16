function 정수_찾기(num_list, n) {
  return num_list.includes(n) ? 1 : 0;
}

function 주사위_게임_1(a, b) {
  const answer =
    a % 2 && b % 2
      ? a ** 2 + b ** 2
      : a % 2 || b % 2
      ? 2 * (a + b)
      : Math.abs(a - b);
  return answer;
}

function 날짜_비교하기(date1, date2) {
  var answer = 0;
  for (let i = 0; i < 3; i++) {
    if (date1[i] > date2[i]) {
      answer = 0;
      break;
    } else if (date1[i] < date2[i]) {
      answer = 1;
      break;
    }
  }
  return answer;
}
