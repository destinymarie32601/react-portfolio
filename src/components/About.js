import React from 'react';

function About() {
    return(
        <section className ="about">
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