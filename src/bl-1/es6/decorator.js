@fn
@fn2(10)
@fn3
class MyClass {
  @fn4 message = "hello"
}

// 修饰类
function fn(target) {
  target.foo = "bar"
}

// 接收参数修饰类
function fn2(value) {
  return function (target) {
    target.count = value
  }
}

// 修饰类的实例
function fn3(target) {
  target.prototype.foo = "bar"
}

// 修饰类的实例成员
/**
 * 
 * @param {*} target 目标类的prototype
 * @param {*} name 被修饰的类成员的名称
 * @param {*} descriptor 被修饰的类成员的描述对象
 */
function fn4(target, name, descriptor) {
  console.log(target);
  console.log(name);
  console.log(descriptor);
  // 只读属性
  descriptor.writable = false
  // 该类成员不允许被遍历
  descriptor.enumerable = false
}


console.log(MyClass.foo);
console.log(MyClass.count);
console.log(new MyClass().foo);

// 应用实例 "mixins"
function mixins(...list) {
  return function (target) {
    Object.assign(target.prototype, ...list)
  }
}

const Foo = {
  foo() { console.log("foo"); }
}

@mixins(Foo)
class RCTComponent {

}

let component = new RCTComponent()
component.foo() // 'foo'