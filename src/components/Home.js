import React from 'react'
import { Link } from "react-router-dom"

export default function About() {
    return(
        <div className="home-container">
        <h1>Frontend Development</h1>
        <p>Hi! I'm Janna and I am a skilled and versatile developer with expertise in an array of technologies. My knowledge spans across several areas, including JavaScript, React, PHP, SQL, Git, HTML5, CSS3, and various operating systems like macOS and Linux (specifically Ubuntu).</p>
        <Link to="/">Email me</Link>
    </div>
    )
}