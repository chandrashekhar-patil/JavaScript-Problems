// function fibonacci(num) {
//   let fibo = [0, 1];

//   for (let i = 2; i <= num; i++) {
//     fibo[i] = fibo[i - 1] + fibo[i - 2];
//   }
//   return fibo;
// }
// let result = fibonacci(5);
// console.log(result);

// function fibonacci(num) {
//   if (num === 0) {
//     return 0;
//   } else if (num === 1) {
//     return 1;
//   } else {
//     return fibonacci(num - 1) + fibonacci(num - 2);
//   }
// }
// let result = fibonacci(20);
// console.log(result);

let num = 5;
firstNo = 0;
secondNo = 1;
for (i = 0; i < num; i++) {
  console.log(firstNo);
  thirdNo = firstNo + secondNo;
  firstNo = secondNo;
  secondNo = thirdNo;
}

