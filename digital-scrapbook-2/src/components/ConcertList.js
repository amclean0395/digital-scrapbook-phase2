import React from "react";
import ConcertCard from "./ConcertCard";
import Search from "./Search";

function ConcertList({concerts, searchBoxValue, setSearchBoxValue}){
    
    const concertCard = concerts.map((oneConcert) => (
        <ConcertCard 
            key={oneConcert.id}
            name = {oneConcert.name}
            date = {oneConcert.date}
            rating={oneConcert.rating}
            picture={oneConcert.picture}
        />
    ))
        
    return (
        <div>
            <Search searchBoxValue={searchBoxValue} setSearchBoxValue={setSearchBoxValue}/>
            {concertCard}
        </div>
    )
}

export default ConcertList