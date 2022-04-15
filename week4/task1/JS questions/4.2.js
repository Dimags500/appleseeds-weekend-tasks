function trib(n) {
  let n1 = 1,
    n2 = 1,
    n3 = 1,
    nextNum = n1 + n2 + n3;

  while (nextNum <= n) {
    console.log(nextNum);
    n1 = n2;
    n2 = n3;
    n3 = nextNum;
    nextNum = n1 + n2 + n3;
  }
}

trib(6);
////////////////////////////??????????????????????????
