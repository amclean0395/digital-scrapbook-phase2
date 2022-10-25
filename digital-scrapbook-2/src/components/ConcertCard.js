import React, { useState } from "react";

function ConcertCard({id, name, location, venue, date, rating, picture, handleDelete}){

    const [shownImage, setShownImage] = useState(true)
    const [starColor, setStarColor] = useState(true)

    function handlePictureSide(){
        setShownImage((shownImage) => !shownImage)
    }

    function handleFavorite(){
        setStarColor((starColor) => !starColor)
    }

    function handleDeleteShow(){
        fetch(`http://localhost:3001/concerts/${id}`, {
            method: "DELETE",
        })
        handleDelete(id)
    }

    return(
        <li className="cards">
            <h4>{name}</h4>
            <div className="image">
                {shownImage ? (
                    <img onClick={handlePictureSide} src={picture.poster} alt="OH NO!" />
                ) : (
                    <img onClick={handlePictureSide} src={picture.liveImage} alt="oh no!" />
                )}
            </div>
            <h1>{location}</h1>
            <h1>{venue}</h1>
            <h4>{date}</h4>
            <h4>{rating}</h4>
            <button className = {starColor ? "emoji-button favorite active" : "emoji-button favorite"}
            onClick={handleFavorite}> {starColor ? "★" :"☆"} </button>
            <button onClick={handleDeleteShow}>Delete</button>
        </li>
    )
}

export default ConcertCard