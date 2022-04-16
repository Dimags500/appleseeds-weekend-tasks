// Ex6.1 - Mumbling
// This time no story, no theory. The examples below show you how to write function
// accum:
// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-zzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function doSomeShit(str) {
  let str_arr = str.split("").map((item) => item.toUpperCase());
  let result = [];
  for (let i = 0; i < str_arr.length; i++) {
    if (result[i] == undefined) {
      result[i] = str_arr[i];
    }

    for (let j = 0; j < i; j++) {
      result[i] += str_arr[i].toLowerCase();
    }
  }
  return result.join("-");
}

console.log(doSomeShit("RqaEzty"));
