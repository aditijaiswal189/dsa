function add(a, b) {
  let c = a + b;
  console.log(c);
}

add(2, 6);

function multiply(x, y) {
  console.log(x * y);
}

multiply(12, 4);

function eligibleVoter(age) {
  if (age < 18) {
    console.log("eligible to Vote");
  } else {
    console.log("Not eligible to Vote");
  }
}

eligibleVoter(22);
eligibleVoter(12);

///Create a function eligibletovote which will also check for negative numbers

function eligibleToVote(age) {
  if (age < 0) {
    console.log("Invalid age");
  } else if (age < 18) {
    console.log("eligible to Vote");
  } else {
    console.log("Not eligible to Vote");
  }
}

eligibleToVote(22);
eligibleToVote(12);
eligibleToVote(-2);

//create a function that checks odd or even no.
function isOddEven(num) {
  let rem = num % 2;

  if (rem == 0) {
    console.log("even number");
  } else {
    console.log("odd number");
  }
}
isOddEven(7);
isOddEven(20);
