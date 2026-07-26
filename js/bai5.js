// Ex5

let n = 29;
let isPrime = true;

if (n <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime) {
  console.log("n là số nguyên tố");
} else {
  console.log("n không phải số nguyên tố");
}
