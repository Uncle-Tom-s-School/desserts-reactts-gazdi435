import { createContext, useEffect, useState } from "react";
import DessertCard from "../components/DessertCard";
import { DessertCardProp } from "../components/DessertCard";
import Cart from "../components/Cart";
import { CartItemType } from "../components/Cart";


export const CartContext = createContext<{
  cart: CartItemType[],
  setCart: React.Dispatch<React.SetStateAction<CartItemType[]>>
} | undefined>(undefined)

const Home = () => {
  const [desserts, setDesserts] = useState<DessertCardProp[]>([])
  const [cart, setCart] = useState<CartItemType[] >([])

  useEffect(()=>{
    fetch("/data.json")
    .then(res=> res.json())
    .then(apiDesserts => setDesserts(apiDesserts))
  },[])

  return (
    <CartContext.Provider value={{cart: cart, setCart: setCart}}>
      <div className="home">
        <section className="dessert-panel">
          <h1>Desserts</h1>
          <div className="cards-grid">
            {desserts.map((dessert) => (
              <DessertCard{...dessert} />
            ))}
          </div>
        </section>

        <Cart />
      </div>
    </CartContext.Provider>
  );
};

export default Home;
