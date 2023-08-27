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
