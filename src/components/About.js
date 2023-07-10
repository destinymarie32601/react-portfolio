import React from 'react';
import {useSpring, animated} from 'react-spring';
import {color1, color2, color4} from './colors';
import profilePicture from './images/portfolio-picture.PNG';

function About() {
    const aboutStyle = {
        backgroundColor: color1,
        color: color4,
        height:650
    };
    const imgStyle = {
        width: '200px',
        height:'260px'
    };
    const animationProps = useSpring({
        to: { opacity:1, transform:'translateY(0) rotateY(0deg)'},
        from: { opacity:0, transform:'translateY(100px) rotateY(180deg)'},
        config:{duration:500}
    });
    return(
        <section className ="about" style={aboutStyle}>
            <h2>About Me</h2>
            <div className="profile">
                <animated.img src= {profilePicture} alt = "Profile" style={{...imgStyle, ...animationProps}}/>
                <p>
                    This is a short section all about me 
                </p>
            </div>
        </section>
    );
}
export default About;