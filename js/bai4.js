// Ex4
const FIZZ = 3;
const BUZZ = 5;
const LENGTH = 50;

for (let i = 1; i <= LENGTH; i++) {
  if (i % FIZZ == 0 && i % BUZZ == 0) {
    console.log("FizzBuzz");
  } else if (i % FIZZ == 0) {
    console.log("Fizz");
  } else if (i % BUZZ == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
