import React from "react";
import {NavLink} from "react-router-dom"

function Header() {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/ConcertForm">Add a Concert</NavLink>
            <NavLink to="/ConcertList">My Concerts</NavLink>
        </nav>
    )
    
}

export default Header
