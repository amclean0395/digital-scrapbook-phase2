import React, { useState } from "react";
import {NavLink} from "react-router-dom"

function ConcertCard({id, name, location, venue, date, rating, picture, handleDelete}){

    const [shownImage, setShownImage] = useState(true)

    function handleFlip(){
        setShownImage((shownContent) => !shownContent)
    }

    function handleDeleteShow(){
        fetch(`http://localhost:3001/concerts/${id}`, {
            method: "DELETE",
        })
        handleDelete(id)
    }

    return(
        <div className="cards">
            <h2>{name}</h2>
            <div className="image">
                {shownImage ? (
                    <img className = "poster" onClick={handleFlip} src={picture.poster} alt="Error Loading Media" />
                ) : (
                    <img className = "crowd" onClick={handleFlip} src={picture.liveImage} alt="Error Loading Media"/>
                )}
            </div>
            <ul id="nasty">
                <p className="cardText">Location: {location}</p>
                <p className="cardText">Venue: {venue}</p>
                <p className="cardText">Date: {date}</p>
                <p className="cardText">Rating: {rating}</p>
                <button className="cardButtons" onClick={handleDeleteShow}>Remove Show</button>
                <button className="cardButtons"><NavLink to={`/ConcertList/${id}`} >View Set-list</NavLink></button>
            </ul>
        </div>
    )
}

export default ConcertCard