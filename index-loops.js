// for (let i = 0; i < 20; i++) {
//   console.log(i);
//   console.log("good morning");
// }

let arr2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function searchElement(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == x) {
      return i;
    }
  }
  return -1;
}
let arr = [1, 2, 3, 4, 5, 6, 5, 8, 9, 10];
// console.log(searchElement(arr, 5));
// console.log(searchElement(arr2, 15));
// console.log(searchElement(arr2, 2));

let arr3 = [3, -9, 5, -10, 4, -1, 2];

function checkNegative(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      console.log("Negative number found:", arr[i]);
      count++;
    }
  }
  return count;
}

// console.log(checkNegative(arr3));

//  3rd

let arr4 = [2, 4, 6, 8, 100, 12, 14, 16, 180, 20];

function checkLargest(arr) {
  let large = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > large) {
      large = arr[i];
    }
  }
  return large;
}
console.log(checkLargest(arr4));

let arr5 = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

function checkMinimum(arr) {
  let minimum = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] < minimum) {
      minimum = arr[i];
    }
  }
  return minimum;
}

console.log(checkMinimum(arr5));
