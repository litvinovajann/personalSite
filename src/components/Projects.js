import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Projects() {
  React.useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const navigate = useNavigate();
  window.onhashchange = function () {
    navigate("/");
  };
  window.onbeforeunload = function (e) {
    e.preventDefault();
    navigate("/");
  };
  const [projects, setProjects] = React.useState([]);
  React.useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data.projects));
  }, []);

  const projectItems = projects.map((project) => (
    <div key={project.id} className="project-tile">
      <Link to={project.link} target="_blank" rel="noopener noreferrer">
        <div className="project-info">
          <h3>{project.name}</h3>
          <h4>{project.description}</h4>
        </div>
        <div className="project-svg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            version="1.1"
            viewBox="-4.5 0 20 20"
          >
            <g>
              <title>arrow_right [#ffffff]</title>
              <desc>Created with Sketch.</desc>
              <g fill="none" fill-rule="evenodd">
                <g transform="translate(-305 -6679)" fill="#fff">
                  <g transform="translate(56 160)">
                    <path d="m249.37 6538.7c0.40491 0.38975 1.0604 0.38975 1.4643 0l8.5632-8.2636c0.80879-0.78049 0.80879-2.0467 0-2.8271l-8.6254-8.3245c-0.40077-0.38575-1.048-0.39074-1.454-0.00999-0.41423 0.38874-0.41941 1.0293-0.011391 1.4241l7.8943 7.617c0.40491 0.39074 0.40491 1.0233 0 1.4141l-7.8311 7.557c-0.40491 0.38975-0.40491 1.0233 0 1.4131" />
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
        {/* <img src={project.imageUrl} /> */}
      </Link>
    </div>
  ));

  return (
    <>
      <div className="project-list-container">
        <h1>Explore all projects</h1>
        <div data-aos="fade-up" className="project-list">
          {projectItems}
        </div>
      </div>
    </>
  );
}
