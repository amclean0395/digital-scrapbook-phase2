import React from "react";

function Search({searchBoxValue, setSearchBoxValue}){
    return(
        <div className="input-field">
            <label>Search By Song Name: </label>
            <input 
                type="text"
                placeholder="Search by song name"
                value={(searchBoxValue)}
                onChange={(e) => setSearchBoxValue(e.target.value)}
            />  
        </div>    
    )
}

export default Search