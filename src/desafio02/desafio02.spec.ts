import { sumFibonacciEven, isEven } from './desafio02';

describe('Sum all even fibonacci numbers under 4 milion sum ', () => {
  it('should check if the number is even or not', () => {
    expect(isEven(2)).toBe(true);
    expect(isEven(1)).toBe(false);
    expect(isEven(5)).toBe(false);
  });
});
describe('Sum all even fibonacci numbers ', () => {
  it('should sum only even', () => {
    expect(sumFibonacciEven()).toBe(4613732);
  });
});
