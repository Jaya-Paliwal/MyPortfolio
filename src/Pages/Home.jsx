import React from 'react'

const Home = () => {
  return (
    <>
                   <section className="section hero" id="one">
            <div className="section__inner">
                <img src="assets/images/asset.jpg" alt="img" className="anim max-width-unset" />
                <div className="section__inner-content" data-background="assets/images/profile.png">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-10 col-xl-8">
                                <div className="hero__content" data-aos="fade-right">
                                    <a className="hero__popup" href="https://www.youtube.com/watch?v=RvreULjnzFo"
                                        target="_blank" rel="noreferrer" title="YouTube video player">
                                        <i className="fa-solid fa-play"></i>
                                    </a>
                                    <h5 className="hero__subtitle">Hi, I'm A Freelancer</h5>
                                    <h2 className="hero__title"><span className="typed">Developer</span></h2>
                                    <p className="hero__text">Based in Los Angeles, USA.</p>
                                    <div className="hero__cta">
                                        <a href="#projects" data-menuanchor="projects" className="cmn-button">View
                                            Projects</a>
                                        <a href="#contact" data-menuanchor="contact">Hire Me<div
                                                className="arrow-down icon animated-icon"></div></a>
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

export default Home