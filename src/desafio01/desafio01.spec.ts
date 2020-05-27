import { findAllMultiples } from './desafio01';

describe('Find all 3 or 5 multiples', () => {
  it('shoud be able to find all 3 or 5 multiples and sum they', () => {
    const result = findAllMultiples(10);
    expect(result).toBe(23);
  });
});
