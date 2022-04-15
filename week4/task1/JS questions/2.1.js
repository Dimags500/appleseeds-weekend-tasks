// Ex2.1 - Sum of lowest numbers
// Create a function that returns the sum of the two lowest positive numbers given an array of
// minimum 4 positive integers. No floats or non-positive integers will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
// [10, 343445353, 3453445, 3453545353453] should return 3453455.

function sumTwoLowestNumbers(array) {
  if (Array.isArray(array)) {
    const positive_integers_array = array.filter(
      (num) => Number.isInteger(num) && num > 0
    );
    const sorted_numbers = positive_integers_array.sort(
      (num1, num2) => num1 - num2
    );

    return sorted_numbers[0] + sorted_numbers[1];
  }

  console.log("only array allowed");
  return null;
}

const array = [12, 20000, 324.22, -10, 33, 1.1, 100, 2.4];
const resualt = sumTwoLowestNumbers(array);
console.log(resualt);
