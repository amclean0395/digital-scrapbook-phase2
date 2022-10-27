import React from "react";
import {NavLink} from "react-router-dom"

function Header() {
    return (
        <nav className="header">
            <NavLink to="/">Search By Date</NavLink>
            <NavLink to="/ConcertForm">Add a Concert</NavLink>
            <NavLink to="/ConcertList">Search By Song</NavLink>
        </nav>
    )
    
}

export default Header
