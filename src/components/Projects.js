import React from "react";
import {Link} from "react-router-dom"

export default function Projects() {
    const [projects, setProjects] = React.useState([])
    React.useEffect(() => {
        fetch("/api/projects")
            .then(res => res.json())
            .then(data => setProjects(data.projects))
    }, [])

   const projectItems = projects.map((project) => (
        <div key={project.id} className="project-tile">
            <Link to={project.link}>
            
            <div className="project-info">
                <h3>{project.name}</h3>
                <h4>{project.description}</h4>
            </div>
            <img src={project.imageUrl} />
            </Link>
        </div>
   ))
    
    return (
        <>
        <div className="project-list-container">
            <h1>Explore all projects</h1>
            <div className="project-list">
                {projectItems}
            </div>
        </div>
        </>
    )
}