import React from "react"
import { Link, NavLink } from "react-router-dom"

export default function Header() {
    return (
    <header>
        <Link className="site-logo" to="/">Janna Litvinova</Link>
        <nav>
            <NavLink className={({isActive}) => isActive? "my-link": ""} to="/">Home</NavLink>
            <NavLink className={({isActive}) => isActive? "my-link": ""}  to="/projects">Projects</NavLink>
        </nav>
    </header>
    ) 
}