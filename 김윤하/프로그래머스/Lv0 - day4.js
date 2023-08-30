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

function qr_code(q, r, code) {
  var answer = "";
  for (let i = 0; i < code.length; i++) {
    if (i % q === r) {
      answer += code[i];
    }
  }
  return answer;
}

function qr_code_filter(q, r, code) {
  return [...code].filter((_, i) => i % q === r).join("");
}

function 문자_개수_세기(my_string) {
  const char_A = 65;
  const char_Z = 90;
  const char_a = 97;
  const char_z = 122;
  const _atoz_ = 26;

  let arr = new Array(_atoz_ * 2).fill(0);
  let strArr = [...my_string];

  strArr.map((el, i) => {
    const charcode = my_string.charCodeAt(i);
    if (charcode >= char_A && charcode <= char_Z) {
      arr[charcode - char_A];
    } else if (charcode >= char_a && charcode <= char_z) {
      arr[charcode - char_a + _atoz_];
    }
  });
  return arr;
}

function 배열_만들기_1(n, k) {
  var answer = [];
  for (let i = k; i < n + 1; i += k) {
    answer.push(i);
  }
  return answer;
}

function 글자_지우기(my_string, indices) {
  var strArr = [...my_string];
  for (let i of indices) {
    strArr[i] = "";
  }
  return strArr.join("");
}

function 카운트_다운(start_num, end_num) {
  var answer = [];
  for (let i = start_num; i >= end_num; i--) {
    answer.push(i);
  }
  return answer;
}

function 가까운_1_찾기(arr, idx) {
  for (let i = idx; i < arr.length; i++) {
    const cur = arr[i];
    if (cur === 1) return i;
  }
  return -1;
}

function 리스트_자르기(n, slicer, num_list) {
  var [a, b, c, d] = slicer;
  var answer = [];
  switch (n) {
    case 1:
      return num_list.slice(0, b + 1);
    case 2:
      return num_list.slice(a);
    case 3:
      return num_list.slice(a, b + 1);
    case 4:
      const curStr = num_list.slice(a, b + 1);
      return curStr.filter((_, i) => i % c === 0);
  }
}
