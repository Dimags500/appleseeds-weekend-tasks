// Ex5.2 - String Repeat
// Write a function called repeat_str which repeats the given string src exactly count times.
// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

const reeateFunc = (num, str) => {
  let resullt = "";

  for (let i = 0; i < num; i++) {
    resullt += str;
  }

  return resullt;
};

console.log(reeateFunc(4, "rock"));
