function 문자열의_앞의_n글자(my_string, n) {
  var answer = my_string.slice(0, n);
  return answer;
}

function 접두사인지_확인하기(my_string, is_prefix) {
  var answer = Number(my_string.startsWith(is_prefix));
  return answer;
}

function 문자열_뒤집기(my_string, s, e) {
  const arr = [...my_string];
  const words = arr.slice(s, e + 1);
  words.reverse(); // 원본 변경
  arr.splice(s, e - s + 1, ...words); // 원본 변경
  return arr.join("");
}

function 세로_읽기(my_string, m, c) {
  let answer = "";
  for (let i = 0; i < my_string.length; i += m) {
    answer += my_string[i + c - 1];
  }
  return answer;
}
