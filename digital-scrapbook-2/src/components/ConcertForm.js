import React, { useState } from "react";

function ConcertForm({addConcert}){

    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [location, setLocation] = useState('')
    const [venue, setVenue] = useState('')
    const [rating, setRating] = useState('')
    const [poster, setPoster] = useState('')
    const [liveImage, setLiveImage] = useState('')

    const newConcert = {
        name: name,
        date: date,
        location: location,
        venue: venue,
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
            <form onSubmit={handleSubmit}  className="uiForm">
                <h1>Input your concerts here</h1>
                <label className="inputTitles">Band Name:</label>
                <input 
                    className="submitAreas"
                    value = {name} 
                    onChange={(e) => setName(e.target.value)} 
                    placeholder="EX. Dead & Company"
                    name="name"
                    
                />
                <label className="inputTitles">Date:</label>
                <input 
                    className="submitAreas"
                    onChange={(e) => setDate(e.target.value)} 
                    name="date"
                    type="date"
                />
                <label className="inputTitles">Location:</label>
                <input 
                    className="submitAreas"
                    value = {location} 
                    onChange={(e) => setLocation(e.target.value)} 
                    placeholder="Ex. Dead & Company"
                    name="name"
                />
                <label className="inputTitles">Venue:</label>
                <input 
                    className="submitAreas"
                    value = {venue} 
                    onChange={(e) => setVenue(e.target.value)} 
                    placeholder="Ex. Folsom Field"
                    name="name"
                />
                <label className="inputTitles">Rating:</label>
                <input 
                    value = {rating} 
                    className="submitAreas"
                    onChange={(e) => setRating(e.target.valueAsNumber)}  
                    type="number" 
                    name="rating" 
                    placeholder="Ex. 9.5, 8.3"
                    step="0.1" 
                />
                <label className="inputTitles">Concert Poster:</label>
                <input
                    value = {poster}
                    className="submitAreas"
                    onChange={(e) => setPoster(e.target.value)}
                    label="Front Image URL"
                    placeholder="Ex. https://marqspusta.com/...."
                    name="frontUrl"
                />
                <label className="inputTitles">Picture From The Show:</label>
                <input
                    value={liveImage}
                    className="submitAreas"
                    onChange={(e) => setLiveImage(e.target.value)}
                    label="Back Image URL"
                    placeholder="Ex. https://marqspusta.com/...."
                    name="backUrl"
                />
                <br/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default ConcertForm