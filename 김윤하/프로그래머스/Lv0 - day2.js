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
