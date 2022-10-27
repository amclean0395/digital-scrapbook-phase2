import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"

function SetList(){

    const [list, setList] = useState([])
    const parameters = useParams()

    useEffect(() => {
        fetch(`http://localhost:3001/concerts/${parameters.id}`)
        .then((r) => r.json())
        .then(data => setList(data))
    }, [parameters.id])

    const {name, date, location, venue} = list
    // add in "", set" after "venue"^^
    
    // const {song1, song2, song3, song4, song5, 
    //         song6, song7, song8, song9, song10, 
    //         song11, song12, song13, song14, song15, 
    //         song16, song17, song18, song19, song20} = set
 
    return(
        <div id="setListBundle">
            <h1>
                {name}
            </h1>
            <ul>
                <p>Date: {date}</p>
                <p>City: {location}</p>
                <p>Venue: {venue}</p>
            </ul>
            <ol>
                {/*<li>{song1}</li>
                <li>{song2}</li>
                <li>{song3}</li>
                <li>{song4}</li>
                <li>{song5}</li>
                <li>{song6}</li>
                <li>{song7}</li>
                <li>{song8}</li>
                <li>{song9}</li>
                <li>{song10}</li>
                <li>{song11}</li>
                <li>{song12}</li>
                <li>{song13}</li>
                <li>{song14}</li>
                <li>{song15}</li>
                <li>{song16}</li>
                <li>{song17}</li>
                <li>{song18}</li>
                <li>{song19}</li>
                <li>{song20}</li> */}
            </ol>
        </div>
    )
}

export default SetList


