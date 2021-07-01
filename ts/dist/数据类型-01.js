"use strict";
// 1. number
// 2. string
// 3. boolean
// 4. 字面量
// 5. any
// 6. unknown
// 7. void
// 8. never
// 9. object
// 10. array
// 11. tuple
// 12. enum
exports.__esModule = true;
// 字面量类型
var a;
a = 10;
// 联合类型
var b;
var c;
// 任意类型 相当于关闭类型检测
// 声明变量不指定类型默认为any
var d;
d = "123";
d = 123;
d = false;
// 未知类型
// unknown 是一个类型安全的any,不可赋值给其他类型
// any 可赋值给其他类型
var e;
var f = 10;
e = "123";
// 解决方案
// 1. 判断类型
if (typeof e == "number")
    f = e;
// 2.1 类型断言1
f = e;
// 2.2 类型断言2
f = e;
// void 表示空,无返回值
function fn1(a) {
    a++;
}
// never 永远不会返回结果
function fn2(a) {
    throw new Error("报错了");
}
exports["default"] = void 0;
