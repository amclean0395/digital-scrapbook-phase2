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
            <h3>{name}</h3>
            <div className="image">
                {shownImage ? (
                    <img className = "poster" onClick={handleFlip} src={picture.poster} alt="Error Loading Media" />
                ) : (
                    <img className = "crowd" onClick={handleFlip} src={picture.liveImage} alt="Error Loading Media"/>
                )}
            </div>
            <div id="nasty">
                <p className="cardText">Location: {location}</p>
                <p className="cardText">Venue: {venue}</p>
                <p className="cardText">Date: {date}</p>
                <p className="cardText">Rating: {rating}</p>
                <button className="deleteButtons" onClick={handleDeleteShow}>Remove Show</button>
                <button className="navButtons"><NavLink className="navButtons" to={`/ConcertList/${id}`} >View Set-list</NavLink></button>
            </div>
        </div>
    )
}

export default ConcertCard