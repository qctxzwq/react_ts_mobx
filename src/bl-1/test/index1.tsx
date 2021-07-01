import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import { observable, action, autorun, computed, configure, reaction, when, runInAction, makeAutoObservable } from "mobx"
import { observer } from "mobx-react"
// import "./es6/decorator"

configure({
  enforceActions: "observed",
})

// 1. 初始化 mobx 容器仓库
class Store {
  // 可被观测的数据
  @observable count = 0
  @observable price = 10
  // 计算属性 --- 提供某些基于已有的容器状态衍生出的业务状态
  @computed get totalPrice() {
    return this.price * this.count
  }
  // 装饰函数 --- 统一修改状态(避免造成多次状态观测)
  // .bound 避免 this 丢失
  @action.bound increment = () => {
    this.count++
  }
  @action change() {
    this.count = 100
    this.price = 9.8
  }
  // 异步 action（5.0解决方案）
  // 1. 定义另一个 action
  // 2. 直接调用 action 函数
  // 3. runInAction
  @action.bound asyncChange() {
    setTimeout(() => {
      this.count = 100
      this.price = 9.8
    }, 1000)
  }
  constructor() {
    makeAutoObservable(this)
  }
}

const mystore = new Store()

// 监视数据改变
// 0. computed 计算属性
//    适用于观测的数据改变产生了衍生出了的结果

// 1. autorun 默认会执行一次
//    当内部所依赖的被观测的数据发生改变的时候就会重新触发执行
autorun(() => {
  console.log("autorun:", mystore.count, mystore.price);
})

// 2. when 满足特定条件触发 (只触发一次)
when(
  () => {
    return mystore.count > 110
  },
  () => {
    console.log("when =>", mystore.count);
  }
)

// 3. reaction 不同于autorun、when
//    只有当被观测的数据发生改变的时候，才会执行
reaction(
  () => {
    // 执行一些业务逻辑操作，返回数据给下一个函数使用
    return mystore.count
  },
  (data, prev, reaction) => {
    console.log("reaction =>", data, prev);
    if (data > 110) {
      reaction.dispose()
    }
  }
)


runInAction(() => {
  mystore.count = 100
})

mystore.asyncChange()

// 2. 在组件中使用 mobx 容器状态
interface IProps {
  store: any
}
interface IState {
}

@observer
class App extends React.Component<IProps, IState>{
  render() {
    const { store } = this.props
    return <div>
      <h1>App Component</h1>
      <p>count :{store.count}</p>
      <p>price :{store.price}</p>
      <button onClick={store.increment}>加</button>
      <p>Total:{store.totalPrice}</p>
      <p>Total:{store.totalPrice}</p>
      <p>Total:{store.totalPrice}</p>
      <p>Total:{store.totalPrice}</p>
      <p>Total:{store.totalPrice}</p>
      <p>Total:{store.totalPrice}</p>
    </div>
  }
}
// 3. 在组件中发起 action 修改容器状态


export default App
