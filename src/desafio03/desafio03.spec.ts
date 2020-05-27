import { isPrime, findLargestPrimeFactor } from './desafio03';

describe('Prime Factors', () => {
  it('should be able to tell if a given number is prime or not.', () => {
    expect(isPrime(-1)).toBe(false);
    expect(isPrime(0)).toBe(false);
    expect(isPrime(1)).toBe(true);
    expect(isPrime(2)).toBe(true);
    expect(isPrime(4)).toBe(false);
    expect(isPrime(13)).toBe(true);
  });
});

describe('Prime Factors', () => {
  it('Should be able to return the largest prime factor of a number', () => {
    expect(findLargestPrimeFactor(13195)).toBe(29);
    expect(findLargestPrimeFactor(10)).toBe(5);
    expect(findLargestPrimeFactor(17)).toBe(17);
    expect(findLargestPrimeFactor(600853)).toBe(54623);
  });
});
