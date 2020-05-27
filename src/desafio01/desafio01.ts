export const findAllMultiples = (numberToCheck: number) => {
  let sum: number = 0;

  function divisibleBy3(number: number): boolean {
    return number % 3 === 0;
  }

  function divisibleBy5(number: number): boolean {
    return number % 5 === 0;
  }

  for (let i = numberToCheck - 1; i > 0; i--) {
    if (divisibleBy3(i) || divisibleBy5(i)) {
      sum += i;
    }
  }

  return sum;
};
