import React from "react";

function Media(){
    return (
       <div>
            <div className="Videos"> 
                <h2>Dead & Company | Boulder, Colorado </h2>
                <iframe className="vid" width="560" height="315" src="https://www.youtube.com/embed/QJSGPSmhVDA" title="YouTube video player" frameBorder="3" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className="Videos"> 
                <h2>Joe Russo's Almost Dead | Morrison, Colorado</h2>
                <iframe className="vid" width="560" height="315" src="https://www.youtube.com/embed/awMSkZxIbW4" title="YouTube video player" frameBorder="3" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className="Videos"> 
                <h2>Dead & Company | Hershey, Pennsylvania</h2>
                <iframe className="vid" width="560" height="315" src="https://www.youtube.com/embed/2t2MrbOS_Ts" title="YouTube video player" frameBorder="3" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>            
            </div>
            <div className="Videos"> 
                <h2>Dead & Company | Queens, New York</h2>
                <iframe  className="vid" width="560" height="315" src="https://www.youtube.com/embed/CSmHJ8Ve6Q8" title="YouTube video player" frameBorder="3" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <br></br>
        </div> 
    )
}

export default Media