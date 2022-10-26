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

    console.log(parameters.id)

    const {name, date, location, venue} = list
 


    return(
        <div id="setListBundle">
            <h1>
                {name}
                {date}
                {location}
                {venue}

            </h1>
        </div>
    )
}

export default SetList


