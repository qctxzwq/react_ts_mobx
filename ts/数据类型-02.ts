// object 类型
// 表示一个object对象
let a: object
a = {}

// 指定对象中包含的属性
// 语法: { 属性名: 属性值 }
// 在属性名后加 ?,表示可选
let b: { name: string, age?: number }
b = { name: "zs", age: 18 }

// 表示任意类型的属性 
let c: { name: string, [propName: string]: any }
c = { name: "ls", age: 18, gender: "male" }

// 声明函数类型 
let d: (a: number, b: number) => number
d = function (a, b) {
  return a + b
}

// array 类型
// 表示数值数组
let e: number[]
e = [1, 2, 3]

// 字符串类型数组
let f: string[]
let g: Array<any>


// touple 元组类型
// 就是固定长度的数组
let h: [string, string]
h = ["hello", "typescript"]


// enum 枚举类型
enum Gender {
  Male,
  Female
}
let i: { name: string, gender: Gender }
i = {
  name: "ww",
  gender: Gender.Male
}

// | 表示或者
// & 表示同时
let j: { name: string } & { age: number }

// 类型别名
type myType = 1 | 2 | 3 | 4 | 5
let k: myType
let l: myType
let m: myType
k = 1

export default void 0