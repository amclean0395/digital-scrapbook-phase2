import React from "react";
import ConcertCard from "./ConcertCard";
import Search from "./Search";

function ConcertList({setConcerts, concerts, searchBoxValue, setSearchBoxValue}){
    
    function handleDelete(id) {
        const newConcertList = concerts.filter((oneConcert) => 
        oneConcert.id !== id)
        setConcerts(newConcertList)
      }

    const concertCard = concerts.map((oneConcert) => (
        <ConcertCard 
            key={oneConcert.id}
            id = {oneConcert.id}
            name = {oneConcert.name}
            date = {oneConcert.date}
            location = {oneConcert.location}
            venue = {oneConcert.venue}
            rating={oneConcert.rating}
            picture={oneConcert.picture}
            handleDelete={handleDelete}
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