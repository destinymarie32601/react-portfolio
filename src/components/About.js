import React from 'react';
import destiny from './images/portfolio-picture.PNG';
export const About = () => {
    return (
        <div name="about" className="w-full h-screen flex[35%] bg-[#1e1b4b]">
            <div className="max-w-[1000px] justify-center mx-auto px-8 flex flex-col h-full">
                <p className="text-[#c7d2fe] text-4xl sm:text-7xl">Destiny Dardon</p>
                <h1 className="text-[#e0e7ff] text-4xl sm:text-7xl font-bold">
                    {" "}
                    Aspiring Full Stack Web Developer
                </h1>
                <div>
                    <img src = {destiny} className="w-72 h-72 rounded-full" alt="Destiny"  />
                </div>
                <div className='mt-8'>
                    <p className="text-[#e0e7ff] text-xl font-bold ">
                    Hello! My name is Destiny Dardon. 
                    I am twenty-two years old, and I have been studying full stack web development for the past six months. Before attending the UNCC Full Stack Web Developer Bootcamp,
                    I was a student at Appalachian State University, studying Criminal Justice, Psychology, as well as Communications. I have a passion for creating and learning, and I am an extremely driven individual.
                    I am excited to start my web development career, and eager to see how far I can push myself in this field.
                    </p>
                </div>
            </div>
        </div>
    );

};
export default About;