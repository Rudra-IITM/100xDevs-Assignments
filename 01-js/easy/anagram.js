/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length!=str2.length) return false;
  str1 = str1.toLowerCase().split("").sort().join("");
  str2 = str2.toLowerCase().split("").sort().join("");
  console.log(str1, str2);
  for (let i=0; i<str1.length; i++){
    if (str1[i]!=str2[i]) return false;
  }
  return true;
}

isAnagram('Debit Card', 'Bad Credit')

module.exports = isAnagram;
