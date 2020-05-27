export const isPrime = (number: number) => {
  if (number === 1 || number === 2) {
    return true;
  }
  if (number <= 0) {
    return false;
  }

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};
export const findLargestPrimeFactor = (number: number) => {
  let i = 2;

  while (number > 1) {
    if (number % i === 0) {
      number = number / i;
    } else {
      i += 1;
    }
  }
  console.log(i);
  return i;
};
