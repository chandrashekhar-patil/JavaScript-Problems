let num = 5;
let fact = 1;

// for (let i = 1; i <= num; i++) {
//   fact = fact * i;
// }
// console.log(fact);

// let i = 1;
// while (i <= num) {
//   fact = fact * i;
//   i++;
// }
// console.log(fact);

function factorial(num) {
  if (num === 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}
let result = factorial(5);
console.log(result);
