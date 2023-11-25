import React from "react";
import Card from "./Card";

function CardContainer( {hogs} ) {
    const hogsToDisplay = hogs.map(hog => {
        return (
            <div>
                <Card
                key={hog.name}
                name={hog.name}
                image={hog.image}
                weight={hog.weight}
                greased={hog.greased}
                specialty={hog.specialty}
                highestMedal={hog.medal} 
                />
            </div>
        )})
    return (
        <div style={{height: '500px'}}>{hogsToDisplay}</div>
    )
}

export default CardContainer 

