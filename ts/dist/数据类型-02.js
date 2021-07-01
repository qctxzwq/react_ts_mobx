"use strict";
exports.__esModule = true;
// object 类型
// 表示一个object对象
var a;
a = {};
// 指定对象中包含的属性
// 语法: { 属性名: 属性值 }
// 在属性名后加 ?,表示可选
var b;
b = { name: "zs", age: 18 };
// 表示任意类型的属性 
var c;
c = { name: "ls", age: 18, gender: "male" };
// 声明函数类型 
var d;
d = function (a, b) {
    return a + b;
};
// array 类型
// 表示数值数组
var e;
e = [1, 2, 3];
// 字符串类型数组
var f;
var g;
// touple 元组类型
// 就是固定长度的数组
var h;
h = ["hello", "typescript"];
// enum 枚举类型
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var i;
i = {
    name: "ww",
    gender: Gender.Male
};
// | 表示或者
// & 表示同时
var j;
var k;
var l;
var m;
k = 1;
exports["default"] = void 0;
