import React from "react";

function Search({searchBoxValue, setSearchBoxValue}){
    return(
        <div className="input-field">
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