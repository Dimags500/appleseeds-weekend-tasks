// function fib(n) {
//   let n1 = 0,
//     n2 = 1,
//     nextNum = n1 + n2;

//   while (nextNum <= n) {
//     console.log("-----------------");
//     console.log(n1);
//     console.log(n2);
//     console.log(nextNum);
//     console.log("-----------------");

//     n1 = n2;
//     n2 = nextNum;
//     nextNum = n1 + n2;
//   }
// }

// fib(10);

// program to display fibonacci sequence using recursion
function fibonacci(num) {
  if (num < 2) {
    return num;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}

console.log(fibonacci(4));
console.log(fibonacci(10));
