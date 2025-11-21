// find 2nd largest in an array
let arr2 = [1, 2, 3, 4, 5, 6, 6];

// I tried

// function checkSecondLargest(arr) {
//   let largest = -Infinity;
//   let secondLargest = arr[0];
//   for (i = 0; i < arr.legth; i++) {
//     if (largest > secondLargest > arr[i]) {
//       secondLargest = arr[i];
//     }
//   }
//   return secondLargest;
// }

// console.log(checkSecondLargest(arr2));

// solution

function checkSecondLargest(arr) {
  if (arr.length < 2) {
    return null;
  }
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] != firstLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

console.log(checkSecondLargest(arr2));
