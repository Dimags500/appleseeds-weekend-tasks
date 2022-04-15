function fib(n) {
  let n1 = 0,
    n2 = 1,
    nextNum = n1 + n2;

  while (nextNum <= n) {
    console.log(nextNum);
    n1 = n2;
    n2 = nextNum;
    nextNum = n1 + n2;
  }
}

fib(10);
