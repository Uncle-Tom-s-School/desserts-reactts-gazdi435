import { CartItemType } from "./Cart"

const CartItem = (props: CartItemType) => {
  return (
    <div className="cart-item">
        <div>
        <strong>{props.name}</strong>
        <span>{props.price}</span>
        </div>
        <button>X</button>
    </div>
  )
}

export default CartItem