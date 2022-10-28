import React from "react";

function Search({searchBoxValue, setSearchBoxValue}){
    return(
        <div className="inputField">
            <label>Search By Song Name: </label>
            <input 
                type="text"
                placeholder="ex. Terrapin Station"
                value={(searchBoxValue)}
                onChange={(e) => setSearchBoxValue(e.target.value)}
            />  
        </div>    
    )
}

export default Search