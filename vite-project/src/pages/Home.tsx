import { useEffect, useState } from "react";
import DessertCard from "../components/DessertCard";
import { DessertCardProp } from "../components/DessertCard";

const Home = () => {
  const [desserts, setDesserts] = useState<DessertCardProp[]>([])

  useEffect(()=>{
    fetch("/data.json")
    .then(res=> res.json())
    .then(apiDesserts => setDesserts(apiDesserts))
  },[])

  return (
    <div>
      <section>
        <h1>Desserts</h1>
        <div className="cards-grid">
          {desserts.map((dessert) => (
            <DessertCard{...dessert} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
