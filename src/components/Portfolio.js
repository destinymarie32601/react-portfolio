import React from 'react';
import Project from './Project';


function Portfolio() {
    const projects = [
        {
            title: 'Project 1',
            description: 'Description of project 1',
            image: 'project1.jpg',
            link: 'https://project1.com'
        },
        {
            title: 'Project 2',
            description: 'Description of project 2',
            image: 'project2.jpg',
            link: 'https://project1.com'
        },
        {
            title: 'Project 3',
            description: 'Description of project 3',
            image: 'project1.jpg',
            link: 'https://project1.com'
        },
        {
            title: 'Project 4',
            description: 'Description of project 4',
            image: 'project1.jpg',
            link: 'https://project1.com'
        },
        {
            title: 'Project 5',
            description: 'Description of project 5',
            image: 'project1.jpg',
            link: 'https://project1.com'
        },
        {
            title: 'Project 6',
            description: 'Description of project 6',
            image: 'project1.jpg',
            link: 'https://project1.com'
        },

    ];

    return (
        <section className = "portfolio">
            <h2>Portfolio</h2>
            {projects.map((project, index) => (
                <Project
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                link={project.link}
                />
            ))}
        </section>
    );
}

export default Portfolio;