import React from "react";
import { inject, observer } from "mobx-react"
import { Product } from "../store/Cart"

interface IProps {
  product?: any,
  cart?: any,
}

interface IState {
}

@inject('product', 'cart')
@observer
class Productor extends React.Component<IProps, IState>{
  constructor(props: IProps) {
    super(props)
  }
  componentWillMount() {
    this.props.product.getAllProducts()
  }
  render() {
    const { product, cart } = this.props

    return <div>
      <h2>products</h2>
      <ul>
        {product.all.map((item: Product) => {
          const flag: boolean = item.inventory <= 0
          return <li key={item.id}>
            {item.title} - {item.price} * {item.inventory}
            <br />
            <button disabled={flag} onClick={() => { cart.addToCart(item) }}>{!flag ? "add to cart" : "sell out"}</button>
          </li>

        })}
      </ul>
    </div>
  }

}

export default Productor