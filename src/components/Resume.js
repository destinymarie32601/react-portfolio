import React from 'react';

export const Resume = () => {
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
        <div name="resume" className='w-full h-screen flex[35%] bg-[#1e1b4b]'>
            <div className='max-w-[1000px] justify-center mx-auto px-1 flex flex-col h-full'>
            <h2 className='lg:text-[70px] text-[#eef2ff]'>Download my <br /> CV Resume <br /> <br /> Coming Soon...</h2>
            <a href={resumeLink} download
                className = "btn btn-lg bg-[#eef2ff] text-[#1e1b4b] rounded-sm px-2 py-2 font-bold item-start"
                >
                    Download
            </a>
            
            <ul className='text-[#eef2ff] lg:text-[20px]'>
                {proficiencies.map((proficiency,index) => (
                    <li key={index}>{proficiency}</li>
                ))}
            </ul>
        
            </div>
        </div>
    );
}

export default Resume;