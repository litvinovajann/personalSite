import React from "react"
import Aos from "aos"
import 'aos/dist/aos.css'

export default function Footer() {
        React.useEffect(()=> {
        Aos.init({duration:2000})
        }, [])
    return (
        <footer data-aos="fade-up" >&#169; 2023 </footer>
    )
}