//Write a program to remove duplicates from an array ?

// let arr = [1, 2, 3, 2, 4, 3, 5];
// let newArr = [];

// for (let i = 0; i < arr.length; i++) {
//   let isDuplicate = false;

//   for (let j = 0; j < newArr.length; j++) {
//     if (arr[i] === newArr[j]) {
//       isDuplicate = true;
//       break;
//     }
//   }
//   if (!isDuplicate) {
//     newArr.push(arr[i]);
//   }
// }
// console.log("Array without duplicates:", newArr);

let arr = [1,2,3,2,4,3,5];

let newArr = [...new Set(arr)];
console.log(newArr);
