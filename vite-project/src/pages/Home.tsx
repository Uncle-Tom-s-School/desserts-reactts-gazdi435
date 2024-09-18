import DessertCard from "../components/DessertCard";
import { DessertCardProp } from "../components/DessertCard";

const Home = () => {
  let lista: DessertCardProp[] = [
    { name: "almáspite", category: "pie", price: 10 },
  ];

  return (
    <div>
      <section>
        <h1>Desserts</h1>
        <div className="cards-grid">
          {lista.map((suti) => (
            <DessertCard{...suti} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
