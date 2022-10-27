import React from "react";

function Search2({searchBoxValue2, setSearchBoxValue2}){
    return(
        <div className="input-field">
            <input 
                type="text"
                placeholder="Search by band name"
                value={(searchBoxValue2)}
                onChange={(e) => setSearchBoxValue2(e.target.value)}
            />  
        </div>    
    )
}

export default Search2