function 일1로_만들기(num_list) {
  let cnt = 0;
  num_list.map((num) => {
    while (num > 1) {
      num % 2 === 0 ? (num /= 2) : (num = (num - 1) / 2);
      cnt++;
    }
  });
  return cnt;
}

function 길이에_따른_연산(num_list) {
  var answer = 1;
  if (num_list.length >= 11) {
    num_list.forEach((num) => (answer += num));
    answer--;
  } else {
    num_list.forEach((num) => (answer *= num));
  }
  return answer;
  // reduce로 풀기
  // return num_list.reduce((a,v)=> num_list.length > 10 ? a+v : a*v )
}
