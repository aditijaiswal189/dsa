// star pattern
// let n = 4;
// for (let i = 0; i < n; i++) {
//   let row = " ";
//   for (let j = 0; j < n; j++) {
//     row = row + " *";
//   }
//   console.log(row);
// }

// print below star pattern
// *
// **
// ***
// ****

// for (let i = 0; i < 4; i++) {
//   let row = " ";
//   for (let j = 0; j <= i; j++) {
//     row = row + " *";
//   }
//   console.log(row);
// }

// for (let i = 0; i < 5; i++) {
//   let row = " ";
//   for (let j = 0; j < i; j++) {
//     if (j % 2 == 0) {
//       row = row + " *";
//     } else {
//       row = row + "  ";
//     }
//   }
//   console.log(row);
// }

// -----------------------------------------------
// star patter questions

// print -----01

// *****
// *****
// *****
// *****
// *****

// let n = 5;
// for (let i = 0; i < n; i++) {
//   let row = " ";
//   for (let j = 0; j < n; j++) {
//     row = row + "*";
//   }
//   console.log(row);
// }

// let n = 5;
// for (let i = 0; i < n; i++) {
//   let row = " ";
//   for (let j = 0; j < n; j++) {
//     row = row + "*";
//   }
//   console.log(row);
// }

// print -----02

// *
// **
// ***
// ****
// *****

// let n = 5;
// for (let i = 0; i <= n; i++) {
//   let row = " ";
//   for (let j = 0; j < i; j++) {
//     row = row + "*";
//   }
//   console.log(row);
// }
// let n = 5;
// for (let i = 0; i < n; i++) {
//   let row = " ";
//   for (let j = 0; j <= i; j++) {
//     row = row + "*";
//   }
//   console.log(row);
// }

// print -----03

// 1
// 12
// 123
// 1234
// 12345

// let n = 5;
// for (let i = 0; i <= n; i++) {
//   let row = " ";
//   for (let j = 1; j <= i; j++) {
//     row = row + j;
//   }
//   console.log(row);
// }

// let n = 5;
// for (let i = 0; i < n; i++) {
//   let row = " ";
//   for (let j = 1; j <= i + 1; j++) {
//     row = row + j;
//   }
//   console.log(row);
// }

// print -----04

// 1
// 22
// 333
// 4444
// 55555

// let n = 5;
// for (let i = 0; i <= n; i++) {
//   let row = " ";
//   for (let j = 1; j <= i; j++) {
//     row = row + i;
//   }
//   console.log(row);
// }
// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let row = " ";
//   for (let j = 0; j < i; j++) {
//     row = row + i;
//   }
//   console.log(row);
// }

// print -----05

// *****
// ****
// ***
// **
// *

// let n = 5;
// for (let i = 0; i <= n; i++) {
//   let row = " ";
//   for (let j = 0; j < n - i; j++) {
//     row = row + "*";
//   }
//   console.log(row);
// }

// let n = 5;
// for (let i = 0; i <= n; i++) {
//   let row = " ";
//   for (let j = 5; j > i - 1; j--) {
//     row = row + "*";
//   }
//   console.log(row);
// }

// let n = 5;
// for (let i = 0; i <= n; i++) {
//   let row = " ";
//   for (let j = 0; j < n - i; j++) {
//     row = row + "*";
//   }
//   console.log(row);
// }

// print -----06

// 12345
// 1234
// 123
// 12
// 1
// let n = 5;

// for (let i = 0; i < n; i++) {
//   let row = "";

//   for (let j = 0; j < n - i; j++) {
//     row += j + 1;
//   }

//   console.log(row);
// }

// let n = 5;
// for (let i = 0; i <= n; i++) {
//   let row = " ";
//   for (let j = 0; j < n - i; j++) {
//     row = row + (j + 1);
//   }
//   console.log(row);
// }
// print -----06

// 11111
// 2222
// 333
// 44
// 5
// let n = 5;

// for (let i = 0; i < n; i++) {
//   let row = "";

//   for (let j = 0; j < n - i; j++) {
//     row += i + 1;
//   }

//   console.log(row);
// }

// let n = 5;
// for (let i = 0; i <= n; i++) {
//   let row = " ";
//   for (let j = 0; j < n - i; j++) {
//     row = row + (i + 1);
//   }
//   console.log(row);
// }

// print -----07

//     *
//    ***
//   *****
//  *******
// *********

let n = 5;

for (let i = 0; i < n; i++) {
  let row = "";

  for (let j = 0; j < n - i; j++) {
    row += i + 1;
  }

  console.log(row);
}

// let n = 5;
// for (let i = 0; i < n; i++) {
//   let row = " ";
//   for (let j = 0; j < n - i - 1; j++) {
//     row = row + " ";
//   }
//   for (let k = 0; k < 2 * i + 1; k++) {
//     row = row + "*";
//   }
//   for (let l = 0; l < n - i - 1; l++) {
//     row = row + " ";
//   }

//   console.log(row);
// }

// print -----08
// *********
//  *******
//   *****
//    ***
//     *

// let n = 5;
// for (let i = 0; i < n; i++) {
//   let row = " ";
//   for (let j = 0; j < i; j++) {
//     row = row + " ";
//   }
//   for (let k = 0; k < 2 * n - (2 * i + 1); k++) {
//     row = row + "*";
//   }
//   for (let l = 0; l < i; l++) {
//     row = row + " ";
//   }

//   console.log(row);
// }

// print 09
//     *
//    ***
//   *****
//  *******
// *********
// *********
//  *******
//   *****
//    ***
//     *

// let n = 5;
// for (let i = 0; i < n; i++) {
//   let row = " ";
//   for (let j = 0; j < n - i - 1; j++) {
//     row = row + " ";
//   }
//   for (let k = 0; k < 2 * i + 1; k++) {
//     row = row + "*";
//   }
//   for (let l = 0; l < n - i - 1; l++) {
//     row = row + " ";
//   }

//   console.log(row);
// }
// for (let i = 0; i < n; i++) {
//   let row = " ";
//   for (let j = 0; j < i; j++) {
//     row = row + " ";
//   }
//   for (let k = 0; k < 2 * n - (2 * i + 1); k++) {
//     row = row + "*";
//   }
//   for (let l = 0; l < i; l++) {
//     row = row + " ";
//   }

//   console.log(row);
// }

// print 10
// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *

// let n = 5;
for (let i = 0; i < 2 * n - 1; i++) {
  let row = " ";
  if (i > n) {
    i = 2 * n - i - 1;
  }
  for (let j = 0; j < i; j++) {
    row = row + "*";
  }
  // console.log(row);
}
