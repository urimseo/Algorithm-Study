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
