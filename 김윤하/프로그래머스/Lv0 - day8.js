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

function 정수를_나선형으로_배치하기(n) {
  // 나선형(우하좌상)
  const move = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const answer = Array.from(Array(n), () => Array(n).fill(0));

  let x = 0,
    y = 0,
    d = 0,
    num = 1;
  while (num <= n ** 2) {
    answer[x][y] = num;
    let nx = x + move[d][0];
    let ny = y + move[d][1];
    if (nx >= n || nx < 0 || ny >= n || ny < 0 || answer[nx][ny] !== 0) {
      d = (d + 1) % 4;
      nx = x + move[d][0];
      ny = y + move[d][1];
    }
    x = nx;
    y = ny;
    num++;
  }
  return answer;
}

function 특별한_이차원_배열_2(arr) {
  const n = arr.length;
  var answer = 1;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i !== j) {
        if (arr[i][j] !== arr[j][i]) {
          answer = 0;
        }
      }
    }
  }
  return answer;
}

function solution2(arr) {
  return arr.every((r, i) => r.every((_, j) => arr[i][j] === arr[j][i]))
    ? 1
    : 0;
}

function 정사각형으로_만들기(arr) {
  var row = arr.length;
  var col = arr[0].length;
  var answer = [...arr];
  if (row > col) {
    answer = arr.map((val) => [...val, ...Array(row - col).fill(0)]);
  } else if (row < col) {
    while (row < col) {
      answer.push(Array(col).fill(0));
      row++;
    }
  }
  return answer;
}

function 이차원_배열_대각선_순회하기(board, k) {
  var answer = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (i + j <= k) {
        answer += board[i][j];
      }
    }
  }
  return answer;
}

function 옹알이_1(babbling) {
  const one = ['aya', 'ye', 'woo', 'ma'];
  let count = 0;
  for (let i = 0; i < babbling.length; i++) {
    for (let j = 0; j < one.length; j++) {
      babbling[i] = babbling[i].replace(one[j], '-');
    }
  }
  for (let k = 0; k < babbling.length; k++) {
    if (babbling[k].split('-').join('') === '') count++;
  }
  return count;
}

function 다음에_올_숫자(common) {
  var answer = 0;
  var len = common.length;
  if (common[1] - common[0] === common[2] - common[1]) {
    answer = common[len - 1] + common[1] - common[0];
  } else {
    answer = common[len - 1] * (common[len - 1] / common[len - 2]);
  }
  return answer;
}

function 연속된_수의_합(num, total) {
  const firstValue =
    num % 2 === 0
      ? Math.ceil(total / num) - num / 2
      : total / num - Math.floor(num / 2);
  const answer = Array(num)
    .fill(firstValue)
    .map((v, idx) => v + idx);
  return answer;
}

function 종이_자르기(M, N) {
  return M - 1 + (N - 1) * M;
}

function 문자열_밀기(A, B) {
  let arr = [...A];
  for (let i = 0; i < arr.length; i++) {
    if (A === B) {
      return i;
    } else {
      arr.unshift(arr.pop());
      if (arr.join('') === B) {
        return i + 1;
      }
    }
  }
  return -1;
}

// memo : (a,b)=>(b+b).indexOf(a)

function 잘라서_배열로_저장하기(my_str, n) {
  let res = [];
  for (let i = 0; i < my_str.length; i += n) {
    res.push(my_str.slice(i, i + n));
  }
  return res;
}

function 칠7의_개수(array) {
  return array.join('').split('7').length;
}

function 문자열_정렬하기_2(my_string) {
  return my_string.toLowerCase().split('').sort().join('');
}
