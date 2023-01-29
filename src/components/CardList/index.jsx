import React from "react";
import { useSelector } from "react-redux";

import BeerCard from '../BeerCard'

const CardList = () => {
    const cards = useSelector(state => state.card.cards)

    return (
        <>
            {cards.map((item, index)=> (
                <BeerCard key={index} data={item} />
            ))}
        </> 
     );
}
 
export default CardList;
