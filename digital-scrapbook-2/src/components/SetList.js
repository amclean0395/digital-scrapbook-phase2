import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom"

function SetList(){

    const [list, setList] = useState([])
    const parameters = useParams()

    useEffect(() => {
        fetch(`http://localhost:3001/concerts/${parameters.id}`)
        .then((r) => r.json())
        .then(data => setList(data))
    }, [parameters.id])

    const {name, date, location, venue, set} = list
    
    // const noEmptys = () =>{
    //     if(set.song18 != ""){
    //         return (
    //             <div>No Song.</div>
    //         )
    //     }
    //     else {
    //         return null
    //     }
    // } 

    const  noUndefined = () => {
        if(set != null){
            return (
                <div>
                    <li>{set.song1}</li>
                    <li>{set.song2}</li>
                    <li>{set.song3}</li>
                    <li>{set.song4}</li>
                    <li>{set.song5}</li>
                    <li>{set.song6}</li>
                    <li>{set.song7}</li>
                    <li>{set.song8}</li>
                    <li>{set.song9}</li>
                    <li>{set.song10}</li>
                    <li>{set.song11}</li>
                    <li>{set.song12}</li>
                    <li>{set.song13}</li>
                    <li>{set.song14}</li>
                    <li>{set.song15}</li>
                    <li>{set.song16}</li>
                    <li>{set.song17}</li>
                    <li>{set.song18}</li>
                    <li>{set.song19}</li>
                    <li>{set.song20}</li>
                </div>
            )
        }
        else {
            return null
        }
    }
 
    return(
        <div id="middle">
            <div id="setListBundle">
                <h1 className="center">
                    {name}
                </h1>
                <ul className="center">
                    <p>Date: {date}</p>
                    <p>City: {location}</p>
                    <p>Venue: {venue}</p>
                </ul>
                <ol>
                    {noUndefined()}
                    <button className="setlistButton"><NavLink className="finalTouch" to="/ConcertList">Return to Cards</NavLink></button>
                </ol>
            </div>
        </div>    
    )
}

export default SetList


