import React, { useState } from "react";

function ConcertForm({addConcert}){

    const [date, setDate] = useState('')
    const [rating, setRating] = useState('')
    const [poster, setPoster] = useState('')
    const [liveImage, setLiveImage] = useState('')

    const newConcert = {
        date: date,
        rating: rating,
        picture: {
          poster: poster,
          liveImage: liveImage,
        }
    }    

    function  handleSubmit(e){
        e.preventDefault()
        fetch('http://localhost:3001/concerts', {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(newConcert)
        })
        .then((r) => r.json())
        .then((newConcert) => addConcert(newConcert))
    }

    return(
        <div>
            <form onSubmit={handleSubmit}  className="ui form">
                <input 
                    value = {date} 
                    onChange={(e) => setDate(e.target.value)} 
                    type="date" 
                />
                <input 
                    value = {rating} 
                    onChange={(e) => setRating(e.target.valueAsNumber)}  
                    type="number" 
                    name="rating" 
                    placeholder="Rating" 
                    step="0.01" 
                />
                <input
                    value = {poster}
                    onChange={(e) => setPoster(e.target.value)}
                    label="Front Image URL"
                    placeholder="url"
                    name="frontUrl"
                />
                <input
                    value={liveImage}
                    onChange={(e) => setLiveImage(e.target.value)}
                    label="Back Image URL"
                    placeholder="url"
                    name="backUrl"
                />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default ConcertForm