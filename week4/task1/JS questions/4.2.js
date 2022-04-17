// function trib(n) {
//   let n1 = 1,
//     n2 = 1,
//     n3 = 1,
//     nextNum = n1 + n2 + n3;

//   while (nextNum <= n) {
//     console.log(nextNum);
//     n1 = n2;
//     n2 = n3;
//     n3 = nextNum;
//     nextNum = n1 + n2 + n3;
//   }
// }

// trib(60);
////////////////////////////??????????????????????????

const signature = [0, 1, 1];
function trib2(n, signature) {
  if (n < 0) {
    return [];
  }
  let sequence = [...signature];

  for (let i = 0; i < n - signature.length; i++) {
    sequence.push(
      sequence[sequence.length - 1] +
        sequence[sequence.length - 2] +
        sequence[sequence.length - 3]
    );
  }

  console.log(sequence.slice(0, n));
  return sequence.slice(0, n);
}

trib2(10, signature);
