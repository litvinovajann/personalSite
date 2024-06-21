import React from 'react'
import { Link } from "react-router-dom"
import About from './About.js'
import Aos from "aos"
import 'aos/dist/aos.css'
export default function Home() {
    React.useEffect(()=> {
        Aos.init({duration:2000})
        }, [])
    return(
        < >
            <div data-aos="fade-up" className="home-container">
                <h1>Frontend Development</h1>
                <p>Hi! I'm Janna and I'm a frontend developer.</p>
                <p>This little site is built on React.js with React Router.</p>
                <p>I know many more technologies that you can check on my <a target="_blank"href='https://drive.google.com/file/d/1IhoTG8b-ZEOQKH_eom4z23dI-JGUqD2e/view?usp=sharing'>CV</a> </p>
                <Link to="mailto:litvinovajann@gmail.com">Email me</Link>
            </div>
            <About />
        </>
    )
}