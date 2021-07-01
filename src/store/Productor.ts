import { observable, action, makeAutoObservable } from "mobx"
import * as shop from "../api/shop"
import { Product } from "./Cart"
import store from "./index"

class ProductrStore {
  public rootStore: store
  @observable all: Product[] = []
  @observable foo = 'bar'
  @action.bound getAllProducts() {
    shop.getAllProducts((products: any) => {
      this.setAll(products)
    })
  }

  @action.bound setAll(products: any) {
    this.all = products
  }

  @action.bound decrementInventory(product: Product) {
    const prod = this.all.find((item) => item.id == product.id)
    if (prod) prod.inventory--
  }
  constructor(rootStore: store) {
    this.rootStore = rootStore
    makeAutoObservable(this)
  }
}

export default ProductrStore;