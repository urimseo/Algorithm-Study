function 간단한_식_계산하기(binomial) {
  var arr = binomial.split(' ');
  var a = Number(arr[0]);
  var b = Number(arr[2]);
  return arr[1] === '+'
    ? a + b
    : arr[1] === '-'
    ? a - b
    : arr[1] === '*'
    ? a * b
    : null;
}
