import { action, makeAutoObservable, observable } from "mobx"
import store from "./index"

class AppStore {
  public rootStore: store
  @observable count = 1
  @action.bound sub() {
    this.count--
  }
  @action.bound pub() {
    this.count++
  }
  constructor(rootStore: store) {
    this.rootStore = rootStore
    makeAutoObservable(this)
  }
}

export default AppStore