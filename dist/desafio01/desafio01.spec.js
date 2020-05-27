"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var desafio01_1 = require("./desafio01");
describe('Find all 3 or 5 multiples', function () {
    it('shoud be able to find all 3 or 5 multiples and sum they', function () {
        var result = desafio01_1.findAllMultiples(10);
        expect(result).toBe(23);
    });
});
