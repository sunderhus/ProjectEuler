"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var desafio03_1 = require("./desafio03");
describe('Prime Factors', function () {
    it('should be able to tell if a given number is prime or not.', function () {
        expect(desafio03_1.isPrime(-1)).toBe(false);
        expect(desafio03_1.isPrime(0)).toBe(false);
        expect(desafio03_1.isPrime(1)).toBe(true);
        expect(desafio03_1.isPrime(2)).toBe(true);
        expect(desafio03_1.isPrime(4)).toBe(false);
        expect(desafio03_1.isPrime(13)).toBe(true);
    });
});
describe('Prime Factors', function () {
    it('Should be able to return the largest prime factor of a number', function () {
        expect(desafio03_1.findLargestPrimeFactor(13195)).toBe(29);
        expect(desafio03_1.findLargestPrimeFactor(10)).toBe(5);
        expect(desafio03_1.findLargestPrimeFactor(17)).toBe(17);
        expect(desafio03_1.findLargestPrimeFactor(600851475143)).toBe(6857);
    });
});
