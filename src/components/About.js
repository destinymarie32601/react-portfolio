import React from 'react';
import { useSpring, animated } from 'react-spring';
import { color1, color2, color4 } from './colors';
import profilePicture from './images/portfolio-picture.PNG';

function About() {

    const descrStyle = {
        color: color4
    };

    return (
        <section className="about" >
            <div className="profile-container">
                <div className="profile-left">
                    <div className="profile-title">
                        <h2>Background</h2>
                    </div>
                    <div className="profile-content">
                        <p style={descrStyle}>
                            This is a short section all about me
                        </p>
                    </div>
                </div>
                <div className="profile-right">
                    <div className="profile-image">
                        <img src={profilePicture} alt="Profile" />
                    </div>
                </div>
            </div>
        </section>
    );
}
export default About;