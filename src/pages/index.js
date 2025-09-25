import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { ReactTyped } from 'react-typed';
import { Col, Container, Row } from 'reactstrap';
import BaseLayout from '../components/layouts/BaseLayout';

const roles = [
  'Web Developer',
  'Full Stack Web',
  'Golang Developer',
  'Next JS',
  'React JS',
];

const Index = () => {
  const [isFlipping, setIsFlipping] = useState(true);
  const flipInterval = useRef();

  useEffect(() => {
    startAnimation();
    return () => flipInterval.current && clearInterval(flipInterval.current);
  }, []);

  const startAnimation = () => {
    flipInterval.current = setInterval(() => {
      setIsFlipping(prevFlipping => !prevFlipping);
    }, 2500);
  };

  return (
    <BaseLayout
      className={`cover ${isFlipping ? 'cover-orange' : 'cover-blue'}`}
      navClass="transparent"
    >
      <div className="main-section">
        <div className="background-image">
          <Image src="/images/background-index.png" alt="background-image" />
        </div>
        <Container>
          <Row>
            <Col md="6">
              <div className="hero-section">
                <div className={`flipper ${isFlipping ? 'isFlipping' : ''}`}>
                  <div className="front">
                    <div className="hero-section-content">
                      <h2> Full Stack Web Developer </h2>
                      <div className="hero-section-content-intro">
                        Have a look at my portfolio and job history.
                      </div>
                    </div>
                    <Image
                      className="image"
                      src="/images/section-1.png"
                      alt="image-section"
                    />
                    <div className="shadow-custom">
                      <div className="shadow-inner"> </div>
                    </div>
                  </div>
                  <div className="back">
                    <div className="hero-section-content">
                      <h2> Full Stack Web Developer </h2>
                      <div className="hero-section-content-intro">
                        Have a look at my portfolio and job history.
                      </div>
                    </div>
                    <Image
                      className="image"
                      src="/images/section-2.png"
                      alt="image-section2"
                    />
                    <div className="shadow-custom shadow-custom-orange">
                      <div className="shadow-inner"> </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md="6" className="hero-welcome-wrapper">
              <div className="hero-welcome-text">
                <h1>
                  Welcome to the portfolio website of Yohanes Hubert. Get
                  informed, collaborate and discover projects I was working on
                  through the years!
                </h1>
              </div>
              <ReactTyped
                loop
                typeSpeed={50}
                backSpeed={25}
                strings={roles}
                backDelay={750}
                loopCount={0}
                showCursor
                className="self-typed"
                cursorChar="|"
              />
              <div className="hero-welcome-bio">
                <h1>Let's take a look on my work.</h1>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </BaseLayout>
  );
};

export default Index;
