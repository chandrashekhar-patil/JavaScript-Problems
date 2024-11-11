//Program to find longest word in a given sentence ?

let word = "find the longest word in given sentence";

function findLongestWord(word) {
  let longestWord = "";
  let currentWord = "";

  for (let i = 0; i < word.length; i++) {
    if (word[i] === " ") {
      if (currentWord.length > longestWord.length) {
        longestWord = currentWord;
      }
      currentWord = "";
    } else {
      currentWord += word[i];
    }
  }

  if (currentWord.length > longestWord.length) {
    longestWord = currentWord;
  }

  return longestWord;
}

console.log("Longest word in given sentence:", findLongestWord(word));
