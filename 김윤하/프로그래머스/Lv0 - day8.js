function 정수_찾기(num_list, n) {
  return num_list.includes(n) ? 1 : 0;
}

function 주사위_게임_1(a, b) {
  const answer =
    a % 2 && b % 2
      ? a ** 2 + b ** 2
      : a % 2 || b % 2
      ? 2 * (a + b)
      : Math.abs(a - b);
  return answer;
}

function 날짜_비교하기(date1, date2) {
  var answer = 0;
  for (let i = 0; i < 3; i++) {
    if (date1[i] > date2[i]) {
      answer = 0;
      break;
    } else if (date1[i] < date2[i]) {
      answer = 1;
      break;
    }
  }
  return answer;
}

function 커피_심부름(order) {
  var cost = 0;
  order.map((val) => {
    if (val.includes('cafelatte')) {
      cost += 5000;
    } else {
      cost += 4500;
    }
  });
  return cost;
}

function solution2(order) {
  return order.reduce(
    (acc, cur) => acc + (cur.includes('latte') ? 5000 : 4500),
    0
  );
}

function 그림_확대(picture, k) {
  let answer = [];

  picture.forEach((v) => {
    const expanded = [...v].reduce((acc, curr) => acc + curr.repeat(k), '');
    // initialValue를 제공하지 않은 경우 배열의 첫 번째 요소를 사용.
    for (let i = 0; i < k; i++) answer.push(expanded);
  });

  return answer;
}

function 조건에_맞게_수열_변환하기_3(arr, k) {
  return arr.map((val) => (k % 2 ? val * k : val + k));
}

function l로_만들기(myString) {
  return [...myString].reduce((a, c) => (c < 'l' ? a + 'l' : c));
}

function 특별한_이차원_배열_1(n) {
  var arr = new Array(n);
  for (var i = 0; i < arr.length; i++) {
    arr[i] = new Array(n);
  }
  // ES6 : const arr = Array.from(Array(n), () => Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      i === j ? (arr[i][j] = 1) : (arr[i][j] = 0);
    }
  }
  return arr;
}
