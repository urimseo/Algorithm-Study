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

function 문자열_바꿔서_찾기(myString, pat) {
  var answer = myString
    .split('')
    .map((val) => (val === 'A' ? 'B' : 'A'))
    .join('');
  return answer.includes(pat) ? 1 : 0;
}
