import React from "react";
import {NavLink} from "react-router-dom"

function Header() {
    return (
        <div className="container2">
            <nav id="header">
                <NavLink className="Links" to="/ConcertForm">Add a Concert</NavLink>
                <NavLink className="Links" to="/List">List</NavLink>
                <NavLink className="Links" to="/ConcertList">Cards</NavLink>
                <NavLink className="Links" to="/Media">Videos</NavLink>
            </nav>
        </div>
    )
    
}

export default Header
