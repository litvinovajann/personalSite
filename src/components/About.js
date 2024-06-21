import React from 'react'
import Aos from "aos"
import 'aos/dist/aos.css'

export default function About() {
    React.useEffect(()=> {
        Aos.init({duration:2000})
        }, [])
    return(
        <div data-aos="fade-up"  className='about-container'>
            <div className="icons">
            <a target="_blank" href="https://github.com/litvinovajann">
                 <div className='social'>
                    <div className='social-github'></div>
                </div>
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/zhanna-litvinova/"> 
                <div className='social'>
                    <div className='social-linkedin'></div>
                </div>    
            </a>
            </div>
        </div>
    )
}