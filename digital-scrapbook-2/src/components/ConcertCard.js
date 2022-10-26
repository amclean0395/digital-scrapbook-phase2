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
            <h2>{name}</h2>
            <div className="image">
                {shownImage ? (
                    <img className = "poster" onClick={handlePictureSide} src={picture.poster} alt="OH NO!" />
                ) : (
                    <img className= "poster" onClick={handlePictureSide} src={picture.liveImage} alt="oh no!" />
                )}
            </div>
            <p className="locationText">{location}</p>
            <p className="locationText">{venue}</p>
            <p className="locationText">{date}</p>
            <p className="locationText">{rating}</p>
            <button className = {starColor ? "emoji-button favorite active" : "emoji-button favorite"}
            onClick={handleFavorite}> {starColor ? "★" :"☆"} </button>
            <button className="deleteButton" onClick={handleDeleteShow}>Delete</button>
        </li>
    )
}

export default ConcertCard