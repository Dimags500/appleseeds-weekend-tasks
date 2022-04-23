const twoSum = require("./twoSum.easy");

test(" twoSum test 1", () => {
  expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([0, 1]);
});

test(" twoSum test 1", () => {
  expect(twoSum([3, 2, 4], 6)).toStrictEqual([1, 2]);
});

test(" twoSum test 1", () => {
  expect(twoSum([3, 3], 6)).toStrictEqual([0, 1]);
});

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]}
