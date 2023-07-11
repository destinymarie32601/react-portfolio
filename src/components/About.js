import React from 'react';
import { color1, color2, color4 } from './colors';
import profilePicture from './images/portfolio-picture.PNG';
import { Swiper, SwiperSlide } from 'swiper/react';
import Lottie from 'lottie-react';
import animationData from './images/animation_ljyms67i.json';
import 'bootstrap/dist/css/bootstrap.min.css';


import 'swiper/css';
import 'swiper/css/effect-cards';

import { EffectCards } from 'swiper/modules';

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
                    <Lottie 
                    animationData={animationData}
                    loop
                    autoplay={true}
                    className="lottie-animation"
                    />
                    </div>
                    <div className="profile-content">
                        <Swiper 
                        effect={'cards'}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="mySwiper"
                        >
                         <SwiperSlide>
                            <div>
                                <h1>Who I am</h1>
                                <p>Message about me</p>
                            </div>
                         </SwiperSlide>
                         <SwiperSlide>
                            <div>
                                <h1>My passions</h1>
                                <p>Passions about me</p>
                            </div>
                         </SwiperSlide>
                         <SwiperSlide>
                            <div>
                                <h1>My strengths</h1>
                                <p>Skills about me</p>
                            </div>
                         </SwiperSlide>
                         </Swiper>
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