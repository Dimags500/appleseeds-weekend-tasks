// Ex6.3 - organize strings
// Take 2 strings s1 and s2 including only letters from avto z. Return a new sorted string, the
// longest possible, containing distinct letters,
// each taken only once - coming from s1 or s2.
// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"
// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longestDistinctStr(str1, str2) {
  // vlidation  , if input has number ,it will return undefined
  const afterValidation = [isAtoZ(str1), isAtoZ(str2)];
  const afterFiltering = afterValidation.filter((item) => item != undefined);

  // after filtering , split word to letters
  let splitedlettersArray = afterFiltering.map((item) => item.split("").sort());

  let objectArray = [{}, {}];

  // insert splited letters array into object
  splitedlettersArray.forEach((item, i) => {
    item.forEach((key) => (objectArray[i][key] = ""));
  });

  // get objects keys & insert into array item & join to single word
  let resultArray = objectArray.map((item) => {
    return Object.keys(item).join("");
  });

  // sort array by lenght of array item
  const lenSorted = resultArray.sort((a, b) => a.length - b.length);

  // retun longest distinct string
  return lenSorted[0] < lenSorted[1] ? lenSorted[0] : lenSorted[1];
}

function isAtoZ(str) {
  if (str.length > 1 && str.match(/^[a-z_]+$/i)) {
    return str;
  } else {
    console.log("Wrong input");
  }
}

const result = longestDistinctStr("bgfff", "abcdefklmopqwxy");
console.log(result);
