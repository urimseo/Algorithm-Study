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
