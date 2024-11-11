//find the largest element of the array

// let marks = [20, 33, 44, 54, 66, 33, 64, 32, 80, 77, 65, 55];
// console.log("Highest Value : ", Math.max(...marks));

function findLargestElement(arr) {
    let largest = arr[0]; 
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > largest) {
        largest = arr[i]; 
      }
    }
    return largest;
  }
  let num = [1, 2, 3, 10, 5, 8];
  console.log("Largest element in the array:", findLargestElement(num));
  
