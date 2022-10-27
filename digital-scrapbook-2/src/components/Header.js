import React from "react";
import {NavLink} from "react-router-dom"

function Header() {
    return (
        <nav id="header">
            <NavLink className="Links" to="/">Search By Date</NavLink>
            <NavLink className="Links" to="/ConcertForm">Add a Concert</NavLink>
            <NavLink className="Links" to="/ConcertList">My Shows</NavLink>
            <NavLink className="Links" to="/Media">Videos</NavLink>
        </nav>
    )
    
}

export default Header
