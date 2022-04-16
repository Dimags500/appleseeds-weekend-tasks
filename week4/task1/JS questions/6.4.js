// Ex6.4 - isogram
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement
// a function that determines whether a string that contains only letters is an isogram. Assume the
// empty string is an isogram. Ignore letter case.
// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case

function isogram(str) {
  let strArray = str.toLowerCase().split("").sort();

  for (let i = 0; i < strArray.length; i++) {
    if (strArray[i] == strArray[i - 1]) {
      return false;
    }
  }
  return true;
}

const result = isogram("moOse");

console.log(result);
