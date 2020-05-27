"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var desafio02_1 = require("./desafio02");
describe('Sum all even fibonacci numbers under 4 milion sum ', function () {
    it('should check if the number is even or not', function () {
        expect(desafio02_1.isEven(2)).toBe(true);
        expect(desafio02_1.isEven(1)).toBe(false);
        expect(desafio02_1.isEven(5)).toBe(false);
    });
});
describe('Sum all even fibonacci numbers ', function () {
    it('should sum only even', function () {
        expect(desafio02_1.sumFibonacciEven()).toBe(4613732);
    });
});
