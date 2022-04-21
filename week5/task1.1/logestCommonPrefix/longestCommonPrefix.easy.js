/**
 * @param {string[]} strs
 * @return {string}
 *
 * @description {Write a function to find the longest common prefix string amongst an array of strings.
                If there is no common prefix, return an empty string "".}
 * 
 * Example 1 
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 * 
 *
 * Example 2
 * Input: strs = ["dog","racecar","car"]
 * Output: ""
 *
 */

const longestCommonPrefix = function (strs) {
  const prefixArray = strs
    .slice()
    .sort()
    .map((i) => (i = i[0] + i[1]));

  let prefixObj = {};

  prefixArray.forEach((item) => {
    if (!prefixObj[item]) {
      prefixObj[item] = 0;
    }

    prefixObj[item] += 1;
  });

  let superGo = Object.entries(prefixObj).sort((a, b) => b[1] - a[1]);

  return superGo[0][1] > 1 ? superGo[0][0] : "";
};

module.exports = longestCommonPrefix;
