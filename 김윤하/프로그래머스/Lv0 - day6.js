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

function 원하는_문자열_찾기(myString, pat) {
  return myString.toLowerCase().includes(pat.toLowerCase()) ? 1 : 0;
}

function 대문자로_바꾸기(myString) {
  return myString.toUpperCase();
}

function 소문자로_바꾸기(myString) {
  return myString.toLowerCase();
}

function 배열에서_문자열_대소문자_변환하기(strArr) {
  return strArr.map((val, idx) =>
    idx % 2 ? val.toUpperCase() : val.toLowerCase()
  );
}

function A_강조하기(myString) {
  return myString.toLowerCase().replace(/a/g, 'A');
}
