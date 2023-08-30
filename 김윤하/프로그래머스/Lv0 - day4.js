function 문자열의_앞의_n글자(my_string, n) {
  var answer = my_string.slice(0, n);
  return answer;
}

function 접두사인지_확인하기(my_string, is_prefix) {
  var answer = Number(my_string.startsWith(is_prefix));
  return answer;
}
