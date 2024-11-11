// let num = [1, 2, 4, 5];
// let sum = num.reduce(function (a, b) {
//   return a + b;
// });
// console.log(sum);

let num = [1, 2, 4, 5];
let sum = 0;

for (let i = 0; i < num.length; i++) {
  sum += num[i];
}
console.log("Sum of all Element of the array : " , sum);

