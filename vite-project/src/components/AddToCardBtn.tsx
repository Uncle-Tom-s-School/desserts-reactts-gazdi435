import { useContext, useState } from "react"
import { CartContext } from "../pages/Home"
import { DessertCardProp } from "./DessertCard"

const AddToCardBtn = (props: DessertCardProp) => {
    const [quantity, setQuantity] = useState(0)
    const CartCxt = useContext(CartContext)

    if (!CartCxt) {
        throw new Error("nincs kontext bro")
    }

    const {cart, setCart} = CartCxt

    const increase = ()=> {
        setQuantity(quantity+1)
        setCart([...cart, props])
    }

    const decrease = ()=>{
        setQuantity(quantity-1)
        let same = cart.filter(dessert => dessert.name == props.name)
        same.pop()
        setCart([... cart.filter((dessert)=> dessert.name != props.name), ...same])
    }


  return (
    <>
    {
        quantity === 0?
            <div className="add-btn" onClick={increase}>Add to Cart</div> :
            <div className="add-btn used">
                <button onClick={decrease}>-</button>
                {quantity}
                <button onClick={increase}>+</button>
            </div>
    }
    </>
  )
}

export default AddToCardBtn