import AddToCardBtn from "./AddToCardBtn";
export type DessertCardProp = {
  name: string;
  category: string;
  price: number;
  image?: {
    thumbnail?: string;
    mobile?: string;
    tablet?: string;
    desktop?: string;
  };
};


const DessertCard = (props: DessertCardProp) => {
  return <div className="dessert-card">
    <img src={props.image?.desktop} alt="" />
    <AddToCardBtn {...props}/>
    <h4>{props.category}</h4>
    <h2>{props.name}</h2>
    <h3>${props.price}</h3>
  </div>
};

export default DessertCard;
