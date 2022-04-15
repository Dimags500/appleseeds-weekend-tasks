// Ex5.1 - trimming string
// It's pretty straightforward. Your goal is to create a function that removes the first and last
// characters of a string. You're given one parameter, the original string. You don't have to worry
// with strings with less than two characters.

function removeFirstAndLast1(str) {
  if (str.length < 2) {
    console.log(" String too short");
    return;
  }

  const str_array = str.split("");
  str_array.shift();
  str_array.pop();
  new_str = str_array.join("");
  return new_str;
}

const result1 = removeFirstAndLast1("rock and Roll");

console.log(result1);

//----------------------------------------- ver 2

function removeFirstAndLast2(str) {
  if (str.length < 2) {
    console.log(" String too short");
    return;
  }
  return str.slice(1, str.length - 1);
}

const result2 = removeFirstAndLast2("rock and Roll");

console.log(result2);
