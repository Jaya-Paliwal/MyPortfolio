import React from 'react'

const About = () => {
  return (
    <>
    <section className="section about" id="two">
            <div className="section__inner" id="sec-graphical-intro">
                <div className="section__inner-content">
                    <div className="container">
                        <div className="row align-items-center row-margin">
                            <div className="col-lg-6">
                                <div className="about__thumb col-margin" data-aos="zoom-in">
                                    <div className="about__thumb-text">
                                        <h1>10</h1>
                                        <h4 className="text-end">Years <br/> Experience <br/> Working</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 offset-lg-1">
                                <div className="about__content col-margin">
                                    <div className="about__content-intro">
                                        <h2>Great Experience</h2>
                                        <p>Since 2016 to the present day, I am closely involved in Web Design and
                                            Development.</p>
                                    </div>
                                    <div className="about__skill">
                                        <div className="about__skill-single">
                                            <div className="skill__text">
                                                <span>HTML5</span>
                                                <span>80%</span>
                                            </div>
                                            <div className="skill-bar">
                                                <div className="skill-bar-inner" data-aos="fade-right"
                                                    data-aos-duration="1000" data-aos-easing="ease-in-out">

                                                </div>
                                            </div>
                                        </div>
                                        <div className="about__skill-single">
                                            <div className="skill__text">
                                                <span>CSS3</span>
                                                <span>80%</span>
                                            </div>
                                            <div className="skill-bar">
                                                <div className="skill-bar-inner" data-aos="fade-right" data-aos-delay="100"
                                                    data-aos-duration="1000" data-aos-easing="ease-in-out">

                                                </div>
                                            </div>
                                        </div>
                                        <div className="about__skill-single">
                                            <div className="skill__text">
                                                <span>JavaScript</span>
                                                <span>80%</span>
                                            </div>
                                            <div className="skill-bar">
                                                <div className="skill-bar-inner" data-aos="fade-right" data-aos-delay="200"
                                                    data-aos-duration="1000" data-aos-easing="ease-in-out">

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default About