// factorial of a number using recursion

let n = -5;

function factorial(n) {
  if (n < 0) return "Factorial of negative numbers is not possible";

  if (n <= 1) return 1;

  return n * factorial(n - 1);
}

console.log(factorial(n));
