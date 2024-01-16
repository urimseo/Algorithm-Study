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
