import React from "react";
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
  return <div>
    <h2>{props.name}</h2>
    <img src={props.image?.desktop} alt="" />
  </div>
};

export default DessertCard;
