import React from 'react';
import profilePicture from './images/portfolio-picture.PNG';
import { Swiper, SwiperSlide } from 'swiper/react';
import Lottie from 'lottie-react';
import animationData from './images/animation_ljyvxowa.json';
import { Container, Row, Col } from 'react-bootstrap';
import 'swiper/css';
import 'swiper/css/effect-cards';

import { EffectCards } from 'swiper/modules';

function About() {
    return (
        <section className="about" >
            <div className='animation-background bg-primary'>
                    <Lottie
                        animationData={animationData}
                        loop
                        autoplay={true}
                        className='lottie-animation'
                    />
                </div>
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} md={6} className=" text-center">
                        <div className="profile-content mb-4">
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
                    </Col>
                    <Col xs={12} md={4} className="text-center">
                        <div className="profile-image">
                            <img
                                src={profilePicture}
                                alt="Profile"
                                className='img-fluid rounded-circle'
                                style={{ width: '400px', height: '500px' }}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
export default About;