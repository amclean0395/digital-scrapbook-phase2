import React, { useState } from "react";
import {NavLink} from "react-router-dom"
//import { useNavigate } from "react-router-dom";

function ConcertForm({addConcert}){

    // const history = useNavigate()

    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [location, setLocation] = useState('')
    const [venue, setVenue] = useState('')
    const [rating, setRating] = useState('')
    const [poster, setPoster] = useState('')
    const [liveImage, setLiveImage] = useState('')
    const [song1, setSong1] = useState("")
    const [song2, setSong2] = useState("")
    const [song3, setSong3] = useState("")
    const [song4, setSong4] = useState("")
    const [song5, setSong5] = useState("")
    const [song6, setSong6] = useState("")
    const [song7, setSong7] = useState("")
    const [song8, setSong8] = useState("")
    const [song9, setSong9] = useState("")
    const [song10, setSong10] = useState("")
    const [song11, setSong11] = useState("")
    const [song12, setSong12] = useState("")
    const [song13, setSong13] = useState("")
    const [song14, setSong14] = useState("")
    const [song15, setSong15] = useState("")
    const [song16, setSong16] = useState("")
    const [song17, setSong17] = useState("")
    const [song18, setSong18] = useState("")
    const [song19, setSong19] = useState("")
    const [song20, setSong20] = useState("")

    const newConcert = {
        name: name,
        date: date,
        location: location,
        venue: venue,
        rating: rating,
        picture: {
          poster: poster,
          liveImage: liveImage,
        }, 
        set: {
            song1: song1,
            song2: song2,
            song3: song3,
            song4: song4, 
            song5: song5,
            song6: song6,
            song7: song7,
            song8: song8, 
            song9: song9, 
            song10: song10,  
            song11: song11, 
            song12: song12,
            song13: song13,
            song14: song14,
            song15: song15, 
            song16: song16,
            song17: song17, 
            song18: song18,
            song19: song19,
            song20: song20
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
                <h1 className="formHeader">Input your concerts here</h1>
                <label className="inputTitles">Band Name:</label>
                <input 
                    className="submitAreas"
                    value = {name} 
                    onChange={(e) => setName(e.target.value)} 
                    placeholder="Ex. Dark Star Orchestra"
                    name="name"
                    
                />
                <label className="inputTitles">Date:</label>
                <input 
                    className="submitAreas"
                    onChange={(e) => setDate(e.target.value)} 
                    name="date"
                    //type="date"
                    placeholder="Ex. 03/11/1995"
                />
                <label className="inputTitles">Location:</label>
                <input 
                    className="submitAreas"
                    value = {location} 
                    onChange={(e) => setLocation(e.target.value)} 
                    placeholder="Ex. Boulder, CO"
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
                    placeholder="Ex. https://iamawebsite.com/...."
                    name="frontUrl"
                />
                <label className="inputTitles">Picture From The Show:</label>
                <input
                    value={liveImage}
                    className="submitAreas"
                    onChange={(e) => setLiveImage(e.target.value)}
                    label="Back Image URL"
                    placeholder="Ex. https://iamawebsite.com/...."
                    name="backUrl"
                />
                <label>Input Set-list!</label>
                <input 
                    value={song1} 
                    className="setlistInput" 
                    onChange={(e) => setSong1(e.target.value)}
                />
                <input 
                    value={song2} 
                    className="setlistInput" 
                    onChange={(e) => setSong2(e.target.value)}
                />
                <input 
                    value={song3} 
                    className="setlistInput" 
                    onChange={(e) => setSong3(e.target.value)}
                />
                <input 
                    value={song4} 
                    className="setlistInput" 
                    onChange={(e) => setSong4(e.target.value)}
                />
                <input 
                    value={song5} 
                    className="setlistInput" 
                    onChange={(e) => setSong5(e.target.value)}
                />
                <input 
                    value={song6} 
                    className="setlistInput" 
                    onChange={(e) => setSong6(e.target.value)}
                />
                <input 
                    value={song7} 
                    className="setlistInput" 
                    onChange={(e) => setSong7(e.target.value)}
                />
                <input 
                    value={song8} 
                    className="setlistInput" 
                    onChange={(e) => setSong8(e.target.value)}
                />
                <input 
                    value={song9} 
                    className="setlistInput" 
                    onChange={(e) => setSong9(e.target.value)}
                />
                <input 
                    value={song10} 
                    className="setlistInput" 
                    onChange={(e) => setSong10(e.target.value)}
                />
                <input 
                    value={song11} 
                    className="setlistInput" 
                    onChange={(e) => setSong11(e.target.value)}
                />
                <input 
                    value={song12} 
                    className="setlistInput" 
                    onChange={(e) => setSong12(e.target.value)}
                />
                <input 
                    value={song13} 
                    className="setlistInput" 
                    onChange={(e) => setSong13(e.target.value)}
                />
                <input 
                    value={song14} 
                    className="setlistInput" 
                    onChange={(e) => setSong14(e.target.value)}
                />
                <input 
                    value={song15} 
                    className="setlistInput" 
                    onChange={(e) => setSong15(e.target.value)}
                />
                <input 
                    value={song16} 
                    className="setlistInput" 
                    onChange={(e) => setSong16(e.target.value)}
                />
                <input 
                    value={song17} 
                    className="setlistInput" 
                    onChange={(e) => setSong17(e.target.value)}
                />
                <input 
                    value={song18} 
                    className="setlistInput" 
                    onChange={(e) => setSong18(e.target.value)}
                />
                <input 
                    value={song19} 
                    className="setlistInput" 
                    onChange={(e) => setSong19(e.target.value)}
                />
                <input 
                    value={song20} 
                    className="setlistInput" 
                    onChange={(e) => setSong20(e.target.value)}
                />
                <br/>
                <button>Submit</button>
                <button><NavLink to="/ConcertList">Take Me To My Concerts</NavLink></button>
            </form>
        </div>
    )
}

export default ConcertForm