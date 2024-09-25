import { useState } from "react"

const AddToCardBtn = () => {
    const [quantity, setQuantity] = useState(0)

    const increase = ()=> {
        setQuantity(quantity+1)
    }

    const decrease = ()=>{
        setQuantity(quantity-1)
    }


  return (
    <>
    {
        quantity === 0?
            <div className="add-btn" onClick={increase}>Add to Cart {quantity}</div> :
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