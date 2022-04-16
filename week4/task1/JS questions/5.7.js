// Ex5.7 - shortest words
// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types

function shortestWords(str) {
  let str_arr = str
    .trim()
    .split(" ")
    .sort((a, b) => a.length - b.length);

  const result = str_arr.filter((item) => item.length <= str_arr[0].length);

  return result.join(" ");
}

console.log(shortestWords("She be Some word will be "));
// console.log(shortestWords("She s "));
