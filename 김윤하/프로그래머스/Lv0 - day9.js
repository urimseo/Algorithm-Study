function 세균_증식(n, t) {
  return n * 2 ** t;
}

// function solution(n, t) {
//   return n << t;
// }

function 제곱수_판별하기(n) {
  return Math.sqrt(n) % 1 === 0 ? 1 : 2;
}

function 문자열안에_문자열(str1, str2) {
  return str1.includes(str2) ? 1 : 2;
}

function OX퀴즈(quiz) {
  var answer = [];
  for (let val of quiz) {
    var arr = val.split(' ');
    var left = arr[1] === '+' ? +arr[0] + +arr[2] : +arr[0] - +arr[2];
    left === +arr[4] ? answer.push('O') : answer.push('X');
  }
  return answer;
}

function 자릿수_더하기(n) {
  return [...String(n)].reduce((a, c) => Number(a) + Number(c), 0);
}

function n의_배수_고르기(n, numlist) {
  return numlist.filter((num) => num % n === 0);
}

function 숫자_찾기(num, k) {
  var idx = [...String(num)].map((val) => +val).indexOf(k);
  return idx === -1 ? idx : idx + 1;

  // return [...String(num)].map((val) => +val).indexOf(k) + 1 || -1
  // 좌항이 -1을 리턴하면 +1로 인해 0이 되므로 0 || -1을 연산하면 -1 이 됨
  // 즉 -1이라면 -1 나머지는 k의 인덱스 + 1이 됨
}

function 배열의_유사도(s1, s2) {
  var answer = 0;
  for (let i of s1) {
    for (let j of s2) {
      if (i === j) {
        answer++;
        break;
      }
    }
  }
  return answer;
  // 교집합
  // return s1.filter((x) => s2.includes(x)).length
}

function 문자열_계산하기(my_string) {
  const arr = my_string.split(' ');
  var answer = +arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === '+') {
      answer += +arr[i + 1];
    } else if (arr[i] === '-') {
      answer -= +arr[i + 1];
    }
  }
  return answer;
}

function 가장_큰_수_찾기(array) {
  var max = Math.max(...array);
  return [max, array.indexOf(max)];
}

function 편지(message) {
  return message.length * 2;
}

function 약수_구하기(n) {
  var answer = [];
  for (let i = 1; i <= n / 4 + 1; i++) {
    if (n % i === 0) {
      answer.push(i);
      answer.push(n / i);
    }
  }
  const set = new Set(answer);
  return [...set].sort((a, b) => a - b);
}

function 한_번만_등장한_문자(s) {
  let res = [];
  for (let c of s) {
    if (s.indexOf(c) === s.lastIndexOf(c)) {
      res.push(c);
    }
  }
  return res.sort().join('');
}

function 인덱스_바꾸기(my_string, num1, num2) {
  var arr = [...my_string];
  const str1 = arr[num1];
  const str2 = arr[num2];

  arr[num1] = str2;
  arr[num2] = str1;

  return arr.join('');
}

function solution2(my_string, num1, num2) {
  my_string = my_string.split('');
  [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
  return my_string.join('');
}

function 영어가_싫어요(numbers) {
  var answer = numbers;
  var num_list = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  for (let i = 0; i < 10; i++) {
    answer = answer.replaceAll(num_list[i], String(i));
  }

  return +answer;
}

function 대문자와_소문자(my_string) {
  var answer = '';
  for (let str of my_string) {
    str.toUpperCase() === str
      ? (answer += str.toLowerCase())
      : (answer += str.toUpperCase());
  }
  return answer;
}

function 암호_해독(cipher, code) {
  var answer = '';
  for (let i = 0; i < cipher.length; i++) {
    (i + 1) % code === 0 ? (answer += cipher[i]) : null;
  }
  return answer;
}

function solution2(cipher, code) {
  var answer = '';
  // code 번째(code-1번 인덱스)부터 시작해서 i를 code만큼 증가시키기. 굳이 if 문 안 써도 됨!!
  for (let i = code - 1; i < cipher.length; i += code) {
    answer += cipher[i];
  }
  return answer;
}

function f_369게임(order) {
  var answer = 0;
  [...String(order)].map((val) =>
    ['3', '6', '9'].includes(val) ? answer++ : null
  );
  return answer;
}
