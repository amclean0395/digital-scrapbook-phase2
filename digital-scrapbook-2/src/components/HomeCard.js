import React from "react";

function HomeCard({name, date, location, venue}){
    return(
        <tr className="column">
            <td className="columns">{name}</td>
            <td className="columns">{date}</td>
            <td className="columns">{location}</td>
            <td className="columns">{venue} </td>
        </tr>
    )
}

export default HomeCard

