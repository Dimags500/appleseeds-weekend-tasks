// Ex5.3 - To Camel Case
// Complete the method/function so that it converts dash/underscore delimited words into camel
// casing. The first word within the output should be capitalized only if the original word was
// capitalized (known as Upper Camel Case, also often referred to as Pascal case).
// Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

function toCamelCase(str) {
  let new_str = str.split(/[., _\/ -]/);

  const str_arr = new_str.map((item, index) => {
    if (index == 0) {
      return item;
    }
    return (item = item.charAt(0).toUpperCase() + item.slice(1));
  });

  return str_arr.join("");
}

const result = toCamelCase("The_Stealth_Warrior");
console.log(result);
