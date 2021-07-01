"use strict";
exports.__esModule = true;
var a = "123";
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["bule"] = 2] = "bule";
})(Color || (Color = {}));
var color = Color.bule;
/**
 *
 * @param a 加数1
 * @param b 加数2
 * @returns 返回结果
 */
var fn1 = function (a, b) {
    return a + b;
};
console.log(color);
fn1(123, 12);
exports["default"] = void 0;
