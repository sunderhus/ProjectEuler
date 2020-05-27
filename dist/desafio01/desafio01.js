"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAllMultiples = void 0;
exports.findAllMultiples = function (numberToCheck) {
    var sum = 0;
    function divisibleBy3(number) {
        return number % 3 === 0;
    }
    function divisibleBy5(number) {
        return number % 5 === 0;
    }
    for (var i = numberToCheck - 1; i > 0; i--) {
        if (divisibleBy3(i) || divisibleBy5(i)) {
            sum += i;
        }
    }
    return sum;
};
