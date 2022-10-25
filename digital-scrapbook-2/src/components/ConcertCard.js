import React, { useState } from "react";

function ConcertCard({month, day, year, rating, picture}){

    const [shownImage, setShownImage] = useState(true)
    const [starColor, setStarColor] = useState(true)

    function handlePictureSide(){
        setShownImage((shownImage) => !shownImage)
    }

    function handleFavorite(){
        setStarColor((starColor) => !starColor)
    }

    return(
        <li className="cards">
            <h4>{month}</h4>
            <h4>{day}</h4>
            <h4>{year}</h4>
            <h4>{rating}</h4>
            <div className="image">
                {shownImage ? (
                    <img onClick={handlePictureSide} src={picture.poster} alt="OH NO!" />
                ) : (
                    <img onClick={handlePictureSide} src={picture.liveImage} alt="oh no!" />
                )}
            </div>
            <button className = {starColor ? "emoji-button favorite active" : "emoji-button favorite"}
            onClick={handleFavorite}> {starColor ? "★" :"☆"} </button>
        </li>
    )
}

export default ConcertCard