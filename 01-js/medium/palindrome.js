/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str=str.toLowerCase();
  str = str.replace(/[^a-zA-Z0-9]/g, '');;
  console.log(str)
  var i = 0, j = str.length-1;
  while(i<=j){
    if (str[i]!=str[j]) return false;
    i++, j--;
  }
  return true;
}

isPalindrome('Able, was I ere I saw Elba!');

module.exports = isPalindrome;
