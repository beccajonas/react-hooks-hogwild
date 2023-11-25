import React, {useState} from "react";

function Card({ name, image, weight, greased, specialty, highestMedal }) {
    const [isClicked, setIsClicked] = useState(false)

    function handleClick() {
        console.log('clicked');
        setIsClicked(!isClicked)
    }
    
        return (
            <div onClick={handleClick}>
                <h3>{name}</h3>
                <img style={{ width: '200px', height: '200px' }} src={image} />
                {isClicked ? (
                    <div>
                    <p>Weight: {weight}</p>
                    <p>Specialties: {specialty}</p>
                    <p>Highest medal achieved: {highestMedal}</p>
                    <p>{greased ? "Greased" : "Not Greased"}</p>
                    </div>)
                    : null
                }
            </div>
        )
}

export default Card  