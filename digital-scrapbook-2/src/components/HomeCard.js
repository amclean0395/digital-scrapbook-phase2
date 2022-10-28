import React from "react";

function HomeCard({id, name, date, location, venue, handleDelete2}){
    
    function handleDeleteShow2(){
        fetch(`http://localhost:3001/concerts/${id}`, {
            method: "DELETE",
        })
        handleDelete2(id)
    }
    
    return(
       
        <tr className="column">
            <td className="columns">{name}</td>
            <td className="columns">{date}</td>
            <td className="columns">{location}</td>
            <td className="columns">{venue} </td>
            <td ><button className="deleteButtons" onClick={handleDeleteShow2}>Delete</button></td>
        </tr>
       
    )
}

export default HomeCard

