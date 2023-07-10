import React from 'react';
import {color1, color2, color4} from './colors';

function About() {
    const aboutStyle = {
        backgroundColor: color1,
        color: color2
    };
    return(
        <section className ="about" style={aboutStyle}>
            <h2>About Me</h2>
            <div className="profile">
                <img src="path/to/my/image.jpg" alt = "Profile"/>
                <p>
                    This is a short section all about me 
                </p>
            </div>
        </section>
    );
}
export default About;