import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper container">
                <a href="#!" className="brand-logo"><i className="material-icons">sentiment_very_satisfied</i>Jokes'nYou</a> 
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>     
    )
}

export default Navbar