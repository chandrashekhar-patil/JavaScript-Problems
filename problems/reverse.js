//reverse string without build in function i js

// const isReverse = (str) => {
//   let result = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     result = result + str[i];
//   }
//   return result;
// };

// console.log(isReverse("chandu"));


function reverseNow(str) {
  return str.split("").reverse().join("");
}
let now = reverseNow("chandu");
console.log(now);
