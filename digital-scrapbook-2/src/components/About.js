import React from "react";

function About(){
    return(
        <div className="about">
            <h1 >Digital Concert Scrapbook</h1>
            <ul className="description"> 

                <h4>You can...</h4>
    
                <li> Add a concert with: band name, image, date, location, venue , and set-list.</li>
                <br></br>
                
                <li>Delete a show from the list. </li>
                <br></br>
                <li>Learn more about the show by clicking on the View Set-list button. </li>
                <br></br>
                <li>Search by song name, and the shows in which that song was played will render. </li>
                <br></br>
                <li>Click through to see more pictures, one picture will be the show poster, the next will be a picture  from the show. </li>
                <br></br>
                <li>See video footage of some of the shows on the cards.  </li>
            </ul>
        </div>
    )
}

export default About