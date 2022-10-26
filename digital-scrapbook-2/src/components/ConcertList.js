import React from "react";
import ConcertCard from "./ConcertCard";
import Search from "./Search";

function ConcertList({handleDelete, concerts, searchBoxValue, setSearchBoxValue}){
    
    const concertCard = concerts.map((oneConcert) => (
        <ConcertCard 
            key={oneConcert.id}
            id = {oneConcert.id}
            name = {oneConcert.name}
            date = {oneConcert.date}
            rating={oneConcert.rating}
            picture={oneConcert.picture}
        />
    ))
        
    return (
        <div>
            <Search searchBoxValue={searchBoxValue} setSearchBoxValue={setSearchBoxValue} handleDelete={handleDelete}/>
            {concertCard}
        </div>
    )
}

export default ConcertList