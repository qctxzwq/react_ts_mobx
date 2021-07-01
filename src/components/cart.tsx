import React from "react";
import { inject, observer } from "mobx-react"
// import CartStore from "../store/Cart"
// import Productor from "../store/Productor"

interface IProps {
  // store: Store
  cart?: any,
  product?: any,
}

interface IState {
}

@inject('cart', 'product')
@observer
class Cart extends React.Component<IProps, IState>{
  constructor(props: IProps) {
    super(props)
  }
  render() {
    const { cart, product } = this.props
    console.log(cart.cartProducts);

    return <div>
      <h2>cart</h2>
      <ul>
        {cart.cartProducts.map((item: any) => (
          <li key={item.id}>
            {item.title} - {item.price} * {item.quantity}
          </li>
        ))}
      </ul>
      <p>total:{cart.totalPrice}</p>
      <p><button disabled={!cart.items.length} onClick={() => {cart.checkout(cart.cartProducts) }}>check out</button></p>
      {cart.checkoutStatus && <p>checkout {cart.checkoutStatus}</p>}
    </div>
  }
}

export default Cart