function 수열과_구간_쿼리_4(arr, queries) {
  for (let [s, e, k] of queries) {
    for (let i = s; i < e + 1; i++) {
      if (i % k === 0) {
        arr[i]++;
      }
    }
  }
  return arr;
}

function 배열_만들기_2(l, r) {
  let answer = [];

  for (let i = l; i < r + 1; i++) {
    if (i % 5 === 0) {
      if (
        [...String(i)].every((element) => element === "5" || element == "0")
      ) {
        answer.push(i);
      }
    }
  }

  return answer.length ? answer : [-1];
}
