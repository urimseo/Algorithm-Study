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
