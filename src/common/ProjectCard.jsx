import React from "react";

function ProjectCard({ src, link, h3, p, h5 }) {
  return (
    <a href={link} target="_blank">
      <img className="hover" src={src} alt={`${h3} logo`} />
      <h3>{h3}</h3>
      <p>{p}</p>
      <h5>{h5}</h5>
    </a>
  );
}

export default ProjectCard;
