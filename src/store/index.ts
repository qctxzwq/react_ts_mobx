import AppStore from "./App";
import ProductrStore from "./Productor";
import CartStore from "./Cart"

class RootStore {
  public app:AppStore
  public product:ProductrStore
  public cart:CartStore

  constructor() {
    this.app = new AppStore(this)
    this.product = new ProductrStore(this)
    this.cart = new CartStore(this)
    // autorun(() => {
    //   console.log("autorun",this.product.all);
    // })
  }
}

export default RootStore