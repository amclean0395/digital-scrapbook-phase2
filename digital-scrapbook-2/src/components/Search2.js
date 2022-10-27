import React from "react";

function Search2({searchBoxValue2, setSearchBoxValue2}){
    return(
        <div className="input-field">
            <label>Search By Date: </label>
            <input 
                type="text"
                placeholder="ex. March, 11th 1995"
                value={(searchBoxValue2)}
                onChange={(e) => setSearchBoxValue2(e.target.value)}
            />  
        </div>    
    )
}

export default Search2