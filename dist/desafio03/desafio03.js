"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findLargestPrimeFactor = exports.isPrime = void 0;
exports.isPrime = function (number) {
    if (number === 1 || number === 2) {
        return true;
    }
    if (number <= 0) {
        return false;
    }
    for (var i = 2; i < number; i += 1) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
};
exports.findLargestPrimeFactor = function (number) {
    var i = 2;
    while (number > 1) {
        if (number % i === 0) {
            number = number / i;
        }
        else {
            i += 1;
        }
    }
    console.log(i);
    return i;
};
