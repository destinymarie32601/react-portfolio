import React from 'react';

function Project(props) {

    const { title, description, image, link } = props;

    return(
        <div className = "project">
            <h3>{title}</h3>
            <img src = {image} alt ={title}/>
            <p>{description}</p>
            <a href = {link} target ="_blank" rel = "noopener noreferrer">
                View Project
            </a>
        </div>
    );
}
export default Project;