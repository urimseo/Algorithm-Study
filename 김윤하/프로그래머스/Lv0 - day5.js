function n_번째_원소부터(num_list, n) {
  var answer = num_list.slice(n - 1);
  return answer;
}

function 순서_바꾸기(num_list, n) {
  var answer = [];
  var after_n = num_list.slice(n);
  var before_n = num_list.slice(0, n);
  return after_n.concat(...before_n);
}

function 왼쪽_오른쪽(str_list) {
  var idx = str_list.findIndex((el) => el === "l" || el === "r");
  if (idx === -1) {
    return [];
  }
  const isL = str_list[idx] === "l";
  const start = isL ? 0 : idx + 1;
  const end = isL ? idx : undefined;
  return str_list.slice(start, end);
}

function n_번째_원소까지(num_list, n) {
  return num_list.slice(0, n);
}

function n개_간격의_원소들(num_list, n) {
  return num_list.filter((_, idx) => idx % n === 0);
}

function 홀수_vs_짝수(num_list) {
    var odd = 0;
    var even = 0;
    num_list.map((num, idx) => idx % 2 ? odd += num : even += num)
    return Math.max(odd, even);
}

function 다섯_명씩(names) {
    // var answer = 0;
    // names.map((name, idx) => idx % 5 == 0 ? answer.push(name) : null)

    return names.filter((_, i) => i % 5 == 0);
}

function 할_일_목록(todo_list, finished) {
    var answer = [];
    for (let i = 0; i < finished.length; i++) {
        if (!finished[i]) { answer.push(todo_list[i])}
    }
    return answer;
}

function n보다_커질_때까지_더하기(numbers, n) {
    var answer = 0;
    for (let number of numbers) {
        if (answer > n) {
            break
        } else {
            answer += number
        }
    }

    // // while로 풀기
    // let i = 0;
    // while (answer <= n) {
    //     answer += numbers[i++]
    // }
    return answer;
}

function 수열과_구간_쿼리_1(arr, queries) {
    var answer = [...arr];
    for (let query of queries) {
        let s, e;
        [s, e] = query;
        for (let i = s; i < e+1; i++) {
            answer[i]++;
        }
    }
    return answer;
    // queries.forEach(([s, e]) => {
    //     while (s <= e) arr[s++]++;
    // });
    // return arr;
}

