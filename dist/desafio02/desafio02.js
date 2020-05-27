"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumFibonacciEven = exports.isEven = void 0;
exports.isEven = function (n) {
    return n % 2 === 0;
};
exports.sumFibonacciEven = function () {
    var sequence = [1, 2];
    var greatNumber = 2;
    var lastNumberIndex = sequence.indexOf(2);
    while (greatNumber + sequence[lastNumberIndex - 1] <= 4000000) {
        greatNumber = sequence[lastNumberIndex] + sequence[lastNumberIndex - 1];
        sequence = __spreadArrays(sequence, [greatNumber]);
        lastNumberIndex = sequence.indexOf(greatNumber);
    }
    var result = sequence
        .filter(function (number) {
        return exports.isEven(number);
    })
        .reduce(function (acc, current) {
        return acc + current;
    });
    return result;
};
exports.sumFibonacciEven();
