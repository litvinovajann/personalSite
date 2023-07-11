import React from "react";

export default function Projects() {
    const [projects, setProjects] = React.useState([])
    React.useEffect(() => {
        fetch("/api/projects")
            .then(res => res.json())
            .then(data => setProjects(data.projects))
    }, [])
   const projectItems = projects.map((project) => (
        <div key={project.id} className="project-tile">
            <img src={project.imageUrl} />
            <div className="project-info">
                <h3>{project.name}</h3>
            </div>
            <i className={`project-type ${project.type} selected`}>{project.type}</i>
        </div>
   ))
    return (
        <div className="project-list-container">
            <h1>Explore all projects</h1>
            <div className="project-list">
                {projectItems}
            </div>
        </div>
    )
}