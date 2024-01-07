function 일1로_만들기(num_list) {
  let cnt = 0;
  num_list.map((num) => {
    while (num > 1) {
      num % 2 === 0 ? (num /= 2) : (num = (num - 1) / 2);
      cnt++;
    }
  });
  return cnt;
}
