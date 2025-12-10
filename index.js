// star pattern
let n = 4;
for (let i = 0; i < n; i++) {
  let row = " ";
  for (let j = 0; j < n; j++) {
    row = row + " *";
  }
  //   console.log(row);
}

// print below star pattern
// *
// **
// ***
// ****

for (let i = 0; i < 4; i++) {
  let row = " ";
  for (let j = 0; j <= i; j++) {
    row = row + " *";
  }
  console.log(row);
}
