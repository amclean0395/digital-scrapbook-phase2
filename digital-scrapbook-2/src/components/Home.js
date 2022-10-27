import React from "react";
import HomeCard from "./HomeCard";
import Search2 from "./Search2";

function Home(  {displayedConcerts2, setSearchBoxValue2, searchBoxValue2}){
 


    const homeCard = displayedConcerts2.map((oneConcert) => (
        <HomeCard 
            key = {oneConcert.id}
            name = {oneConcert.name}
            date = {oneConcert.date}
            location = {oneConcert.location}
            venue = {oneConcert.venue}
        />
    ))

    return (
        <div id="home">
            <Search2 searchBoxValue2={searchBoxValue2} setSearchBoxValue2={setSearchBoxValue2}/>
            
            
        <table className="ui celled striped padded table">
            <tbody>
                <tr>
                <th>
                    <h3 className="ui center aligned header">Name</h3>
                </th>
                <th>
                    <h3 className="ui center aligned header">Date</h3>
                </th>
                <th>
                    <h3 className="ui center aligned header">Location</h3>
                </th>
                <th>
                    <h3 className="ui center aligned header">Venue</h3>
                </th>
                </tr>
                {homeCard}
            </tbody>
        </table>
        </div>
    )
}

export default Home