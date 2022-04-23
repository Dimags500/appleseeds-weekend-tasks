/**
 * @param {string} s
 * @return {boolean}
 * 
 * @description Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 */
const isValid = function (s) {
  let arr = [
    [
      ["[", 0],
      ["]", 0],
    ],
    [
      ["{", 0],
      ["}", 0],
    ],
    [
      ["(", 0],
      [")", 0],
    ],
  ];

  let input = s.split("");
  let result = true;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < input.length; j++) {
      if (arr[i][0][0] == input[j]) {
        arr[i][0][1]++;
      }

      if (arr[i][1][0] == input[j]) {
        arr[i][1][1]++;
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0][1] != arr[i][1][1]) {
      result = false;
    }
  }

  return result;
};

module.exports = isValid;
