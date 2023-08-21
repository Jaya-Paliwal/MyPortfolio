import React from 'react'

const Contact = () => {
    let url;
  return (
    <>
     <section className="section contact" id="five">
            <div className="section__inner" id="contact-wave">
                <div className="section__inner-content">
                    <div className="container">
                        <div className="row row-margin align-items-center align-items-center">
                            <div className="col-lg-6">
                                <div className="contact__content col-margin" data-aos="fade-right">
                                    <h2>Let&#xFE50;s work together</h2>
                                    <h4>Get in touch with me</h4>
                                    <p>I&#xFE50;m interested in freelance opportunities &#65123; especially ambitious or large
                                        projects. However, if you have other request or question, don&#xFE50;t hesitate to use
                                        the form.</p>
                                    <div className="social__wrapper">
                                        <h6>Follow Me</h6>
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
                                            <a href={url}>
                                                In
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6  col-xl-5 offset-xl-1">
                                <div className="contact__form col-margin" data-aos="fade-left">
                                    <form action="#" method="post" autoComplete="off">
                                        <div className="contact__form-input">
                                            <input type="text" name="contact_name" id="contactName"
                                                placeholder="Enter Your Name" />
                                        </div>
                                        <div className="contact__form-input">
                                            <input type="email" name="contact_email" id="contactEmail"
                                                placeholder="Enter Email Address" />
                                        </div>
                                        <div className="contact__form-input">
                                            <input type="text" name="contact_sub" id="contactSub"
                                                placeholder="Subject" />
                                        </div>
                                        <div className="contact__form-input">
                                            <select name="price__range" id="priceRange" className="price-range">
                                                <option value="" data-display="Select Pricing">Select Pricing</option>
                                                <option value="$200 - $300">$200 - $300</option>
                                                <option value="$400 - $500">$400 - $500</option>
                                                <option value="$600 - $700">$600 - $700</option>
                                                <option value="$800 - $900">$900 - $900</option>
                                                <option value="$900 - $1000">$900 - $1000</option>
                                            </select>
                                        </div>
                                        <div className="contact__form-input">
                                            <textarea name="contact_mess" id="contactMessage"
                                                placeholder="Write me a message"></textarea>
                                        </div>
                                        <button type="submit">Contact Me</button>
                                    </form>
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

export default Contact