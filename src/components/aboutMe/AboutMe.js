import React from 'react';
import './AboutMe.css';
import { Container, Row, Col, Image } from 'react-bootstrap';
import karateAvatar from './karateAvatar.webp';

const AboutMe = () => {
    return (
        <Container className="my-4 py-2 px-2">
            <Row>
                <Col xs={12} md={6} >
                    <h2 class="about-me__headline">Wojciech Onoszko - junior fullstack developer</h2>
                    <article class="about-me__showcase">
                        <p class="about-me__paragraph about-me__paragraph__first">
                            Hi, I'm Wojciech Onoszko - fullstack developer at the beginning of career in IT industry. My
                            technology stack is based on HTML, CSS, JavaScript, React, Node.js and everything what is
                            necessary to build modern websites and apps.
                        </p>
                        <p class="about-me__paragraph">
                            I made this website to contact with potential collaborators and employers. I will put here my
                            newest projects and something more about IT themes like articles, task solutions etc.
                        </p>
                        <p class="about-me__paragraph">
                            If you have job opportunity for young developer, who love computers and sport (do workouts,
                            not watching champions league :)) or just you want to collaborate with me at some projects -
                            mail or call me. I wait for new challenges.
                        </p>
                    </article>
                </Col>
                <Col xs={10} md={5} className='m-auto'>
                    <Image src={karateAvatar} alt="karate Avatar" fluid roundedCircle />
                </Col>
            </Row>
        </Container>
    )
}

export default AboutMe;


