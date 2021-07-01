import { makeAutoObservable, action, observable, computed } from "mobx"
import store from "./index"
import * as shop from "../api/shop"

export interface Product {
  id: number,
  price: number,
  title: string,
  inventory: number
}

export interface CartItem {
  id: number,
  quantity: number
}

class CartStore {
  public rootStore: store
  @observable items: CartItem[] = []
  @observable checkoutStatus: string | null = null
  @observable foo = 'baz'
  @action.bound addToCart(product: Product) {
    const prod: CartItem | undefined = this.items.find((cartitem: CartItem) => cartitem.id == product.id)
    if (prod) {
      prod.quantity++
    } else {
      this.items.push({
        id: product.id,
        quantity: 1
      })
    }
    this.rootStore.product.decrementInventory(product)
    console.log(JSON.stringify(this.items));
  }
  @action.bound setCheckoutStatus(status: string | null) {
    this.checkoutStatus = status
  }
  @action.bound setItems(items:CartItem[]) {
    this.items = items
  }
  @action.bound checkout(products: any) {
    const savedProducts = [...products]
    this.setCheckoutStatus(null)
    this.setItems([])
    shop.buyProducts(products,
      () => {
        this.setCheckoutStatus("successful")
      },
      () => {
        this.setCheckoutStatus("failed")
        this.setItems(savedProducts)
      })
  }
  @computed get cartProducts() {
    const products = this.rootStore.product.all
    return this.items.map(cartItem => {
      let singleProduct = products.find(item => item.id === cartItem.id)
      return {
        id: singleProduct?.id,
        title: singleProduct?.title,
        price: singleProduct?.price,
        quantity: cartItem.quantity
      }
    })
  }
  @computed get totalPrice() {
    return this.cartProducts.reduce((total, prod) => {
      let price = 0
      if (prod.price) {
        price = (prod.price * prod.quantity)
      }
      return Number((total + price).toFixed(2))
    }, 0)
  }
  constructor(rootStore: store) {
    this.rootStore = rootStore
    makeAutoObservable(this)
  }
}

export default CartStore