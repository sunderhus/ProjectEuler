export const isEven = (n: number): boolean => {
  return n % 2 === 0;
};
export const sumFibonacciEven = (): number => {
  let sequence = [1, 2];
  let greatNumber = 2;
  let lastNumberIndex = sequence.indexOf(2);

  while (greatNumber + sequence[lastNumberIndex - 1] <= 4000000) {
    greatNumber = sequence[lastNumberIndex] + sequence[lastNumberIndex - 1];
    sequence = [...sequence, greatNumber];
    lastNumberIndex = sequence.indexOf(greatNumber);
  }

  const result: number = sequence
    .filter((number) => {
      return isEven(number);
    })
    .reduce((acc, current) => {
      return acc + current;
    });

  return result;
};

sumFibonacciEven();
