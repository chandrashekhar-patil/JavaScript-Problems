// function isPrime(num) {
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return "not a prime";
//     }
//   }
//   return "prime number";
// }
// let result = isPrime(2);
// console.log(result);

let isPrime = true;

for (let i = 2; i < num; i++) {
  if (num % i === 0) {
    isPrime = false;
    break;
  }
}
if (isPrime) {
  console.log("Prime");
} else {
  console.log("Not Prime");
}