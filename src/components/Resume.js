import React from 'react';

function Resume() {
    const resumeLink = 'https://example.com/resume.pdf';
    const proficiencies = [
        'HTML',
        'CSS/Bootstrap',
        'Javascript',
        'JQuery',
        'Web APIs',
        'Server-side APIs',
        'Node.js',
        'React',
        'MYSQL',
        'NoSQL',
        'MongoDB',
        'PWA Applications',
        'Express.js'
    ];

    return(
        <section className="resume">
            <h2>Download my CV Resume</h2>
            <a href={resumeLink} download>
                Download
            </a>
            <ul>
                {proficiencies.map((proficiency,index) => (
                    <li key={index}>{proficiency}</li>
                ))}
            </ul>
        </section>
    );
}

export default Resume;