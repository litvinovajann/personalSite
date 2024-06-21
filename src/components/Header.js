import React from "react"
import { Link, NavLink } from "react-router-dom"
import Aos from "aos"
import 'aos/dist/aos.css'


export default function Header() {
    React.useEffect(()=> {
    Aos.init({duration:2000})
    }, [])
    return (
    <header data-aos="fade-up">
        <Link className="site-logo" to="/">Janna Litvinova</Link>
        <nav>
            <NavLink className={({isActive}) => isActive? "my-link": ""} to="/">Home</NavLink>
            <NavLink className={({isActive}) => isActive? "my-link": ""}  to="/projects">Projects</NavLink>
        </nav>
    </header>
    ) 
}