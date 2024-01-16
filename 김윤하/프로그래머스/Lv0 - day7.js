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

function rny_string(rny_string) {
  return rny_string.replaceAll('m', 'rn');
}

function 세_개의_구분자(myStr) {
  const result = myStr.split(/[a|b|c]/g).filter((a) => a);
  return result.length ? result : ['EMPTY'];
}

function 배열의_원소만큼_추가하기(arr) {
  var answer = [];
  arr.map((val) => {
    for (let i = 0; i < val; i++) answer.push(val);
  });
  return answer;

  // 다른 풀이 1
  // return arr.reduce((list, num) => [...list, ...new Array(num).fill(num)], []);
  // 다른 풀이 2
  // return arr.reduce((a, c) => a.concat(Array(c).fill(c)), []);
}

function 빈_배열에_추가_삭제하기(arr, flag) {
  var X = [];
  for (let i = 0; i < arr.length; i++) {
    if (flag[i]) {
      for (let j = 0; j < arr[i] * 2; j++) {
        X.push(arr[i]);
      }
    } else {
      for (let j = 0; j < arr[i]; j++) {
        X.pop();
      }
    }
  }
  return X;
}

function 배열_만들기_6(arr) {
  var stk = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    stk[stk.length - 1] === arr[i] ? stk.pop() : stk.push(arr[i]);
  }
  return stk.length ? stk : [-1];
}

function 무작위로_K개의_수_뽑기(arr, k) {
  const set = new Set(arr);
  var answer = [...set];
  if (answer.length > k) {
    answer = answer.slice(0, k);
  } else {
    while (answer.length < k) {
      answer.push(-1);
    }
  }
  return answer;

  /*  다른 풀이 1: 한 줄로 풀기 
  const set = new Set(arr);
  return set.size < k ? [...set, ...Array(k - set.size).fill(-1)] : [...set].slice(0, k);
  */

  // 다른 풀이 2: if 문 생략 가능 !! slice는 크게 잘라도 오류 안 남.
  // "만약 end 값이 배열의 길이보다 크다면, slice()는 배열의 끝까지(arr.length) 추출합니다.""
  // const set = new Set(arr);
  // const result = [...set].slice(0, k);
  // while (result.length !== k) {
  //   result.push(-1);
  // }
  // return result;
}

function 배열의_길이를_2의_거듭제곱으로_만들기(arr) {
  var exponent = 0;
  while (Math.pow(2, exponent) < arr.length) exponent++;
  let fillNum = Math.pow(2, exponent) - arr.length;

  return [...arr, ...Array(fillNum).fill(0)];
}

function 배열_비교하기(arr1, arr2) {
  var big = 0;
  const sumArr = (arr) => arr.reduce((a, c) => a + c);

  arr1.length > arr2.length
    ? (big = 1)
    : arr1.length < arr2.length
    ? (big = -1)
    : sumArr(arr1) > sumArr(arr2)
    ? (big = 1)
    : sumArr(arr1) < sumArr(arr2)
    ? (big = -1)
    : null;

  return big;
}

function 문자열_묶기(strArr) {
  // 딕셔너리로 풀기
  const dict = {};
  // key: 문자열 길이, value: 문자열 목록
  strArr.forEach((item) => {
    const len = item.length;
    dict[len] = dict[len] ?? []; // a ?? b : a가 undefined나 null이 아니면 a, 맞으면 b
    dict[len].push(item);
  });
  // 길이 별 목록 수의 최댓값
  const values = Object.values(dict).map((a) => a.length);
  return Math.max(...values);
}

function 배열의_길이에_따라_다른_연산하기(arr, n) {
  return arr.map((num, idx) => (arr.length % 2 !== idx % 2 ? num + n : num));
}

function 뒤에서_5등까지(num_list) {
  return num_list.sort((a, b) => a - b).slice(0, 5);
}

function 뒤에서_5등_위로(num_list) {
  return num_list.sort((a, b) => a - b).slice(5);
}

function 전국_대회_선발_고사(rank, attendance) {
  const [a, b, c] = rank
    .map((r, i) => [r, i])
    .filter(([_, i]) => attendance[i])
    .sort(([a], [b]) => a - b);
  return 10000 * a[1] + 100 * b[1] + c[1];
}

function 정수_부분(flo) {
  return Math.trunc(flo); // trunc는 정수 부분만 return
  // Math.floor() 함수는 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환합니다.
  // Math.floor(-45.05); // -46
}

function 문자열_정수의_합(num_str) {
  var answer = 0;
  for (let i of num_str) {
    answer += Number(i);
  }
  return answer;
}

function 문자열을_정수로_변환하기(n_str) {
  return +n_str;
}

function 영0_떼기(n_str) {
  return `${+n_str}`;
}

function 두_수의_합(a, b) {
  return String(BigInt(a) + BigInt(b));
}

function 문자열로_변환(n) {
  return String(n);
}

function 배열의_원소_삭제하기(arr, delete_list) {
  return arr.filter((val) => !delete_list.includes(val));
}

function 부분_문자열인지_확인하기(my_string, target) {
  return +my_string.includes(target);
}
