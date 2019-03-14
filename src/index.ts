const num: number = +process.argv[2];

console.log(fizzbuzz(num));

function fizzbuzz(argsNum: number): string {
  if (argsNum % 15 === 0) {
    return "FizzBuzz";
  } else if (argsNum % 3 === 0) {
    return "Fizz";
  } else if (argsNum % 5 === 0) {
    return "Buzz";
  }
  return argsNum.toString();
}
