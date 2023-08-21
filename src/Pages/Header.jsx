import React from 'react'

const Header = () => {
    let url="";
  return (
    <>
    <header className="header">
        <div className="container-fluid">
            <nav className="nav">
                <a href="#home" data-menuanchor="home" className="nav__logo">RONL<span>IO.</span></a>
                <div className="nav__items">
                    <button className="close"><i className="fa-solid fa-xmark"></i></button>
                    <ul>
                        <li><a href="#home" data-menuanchor="home" className="nav__item">Home</a></li>
                        <li><a href="#about" data-menuanchor="about" className="nav__item">About</a></li>
                        <li><a href="#projects" data-menuanchor="projects" className="nav__item">Projects</a></li>
                        <li><a href="#experience" data-menuanchor="experience" className="nav__item">Experience</a>
                        </li>
                        <li><a href="#contact" data-menuanchor="contact" className="nav__item">Contact</a></li>
                    </ul>
                    <div className="social">
                        <a href={url}>
                            Fb
                        </a>
                        <a href={url}>
                            Tw
                        </a>
                        <a href={url}>
                            Ln
                        </a>
                        <a href="https://pixner.net/cdn-cgi/l/email-protection#7c0f1311191312193c19041d110c1019521f1311">
                            <i className="fa-solid fa-envelope"></i>
                        </a>
                    </div>
                </div>
                <div className="nav__uncollapsed">
                    <div className="social">
                        <a href={url} >Fb</a>
                        <a href={url}>Tw</a>
                        <a href={url}>Ln</a>
                        <a href="https://pixner.net/cdn-cgi/l/email-protection#6e1d01030b01000b2e0b160f031e020b400d0103">
                            <i className="fa-solid fa-envelope"></i>
                        </a>
                    </div>
                    <button className="nav__bar d-block d-xxl-none">
                        <span className="icon-bar top-bar"></span>
                        <span className="icon-bar middle-bar"></span>
                        <span className="icon-bar bottom-bar"></span>
                    </button>
                </div>
            </nav>
        </div>
    </header>
    <div className="backdrop"></div></>
  )
}

export default Header