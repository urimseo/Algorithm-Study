function n의_배수(num, n) {
  return Number(num % n === 0);
}

function 공배수(number, n, m) {
  return number % n === 0 && number % m === 0 ? 1 : 0;
}
