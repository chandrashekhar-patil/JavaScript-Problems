// let word = "ganesh";
// let reverse = "";

// for (let i = word.length - 1; i >= 0; i--) {
//   reverse = reverse + word[i];
// }
// // if (word === reverse) {
// //   console.log("pelidronme");
// // } else {
// //   console.log("not pelidronme");
// // }
// console.log(reverse);

function isPelindome(str){
  return str === str.split('').reverse().join('');
}
console.log(isPelindome("level"));
