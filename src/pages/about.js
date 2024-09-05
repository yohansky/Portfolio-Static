import BasePage from "@/components/BasePage";
import BaseLayout from "@/components/layouts/BaseLayout";
import Header from "@/components/shared/Header";
import { useEffect } from "react";
import { Col, Row } from "reactstrap";

const About = () => {
  useEffect(() => {
    return () => {
      window.__isAboutLoaded = true;
    };
  });

  const createFadeIn = () => {
    if (typeof window !== "undefined") {
      return window.__isAboutLoaded ? "" : "fadein";
    }

    return "fadein";
  };

  return (
    <BaseLayout>
      <BasePage className="about-page">
        <Row className="mt-5">
          <Col md="6">
            <div className="left-side">
              <h1 className={`title ${createFadeIn()}`}>Hello, Welcome</h1>
              <h4 className={`subtitle ${createFadeIn()}`}>To About Page</h4>
              <p className={`subsubTitle ${createFadeIn()}`}>Feel free to read short description about me.</p>
            </div>
          </Col>
          <Col md="6">
            <div className={`${createFadeIn()}`}>
              <p>My name is Yohanes Hubert and I am an Software Engineer and Golang Developer. </p>
              <p>
                Hi there! I'm Yohanes Hubert, a passionate and dedicated backend developer specializing in Golang with a strong background in building robust and scalable web applications. I hold a Bachelor's degree in Computer Engineering
                from Indraprasta PGRI University, Jakarta, and I am a proud graduate of Pijar Camp where I honed my skills in Golang and ReactJS.
                {/* I have a Master's degree in Artificial Intelligence and several years of experience working on a wide range of technologies and projects from C++ development for ultrasound devices to modern mobile and web applications in
                React and Angular. */}
              </p>
              <p>
                Throughout my journey, I have worked on various projects, ranging from full-stack web applications to complex backend systems. My experience includes working with the Fiber framework, PostgreSQL, and implementing security
                features such as JWT. I am also proficient in database optimization and seamless integration between frontend and backend components.
              </p>
              <p>
                I thrive in environments that challenge me to learn and grow, and I am always eager to dive into new technologies. My goal is to contribute to innovative projects where I can leverage my skills and collaborate with
                cross-functional teams to deliver exceptional results.
              </p>
              <p>When I'm not coding, I enjoy exploring the latest trends in technology, contributing to open-source projects, and continuously learning to stay at the forefront of the industry.</p>
              <p>Feel free to check out my projects and connect with me. I'm always open to new opportunities and collaborations!</p>
            </div>
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  );
};

export default About;
