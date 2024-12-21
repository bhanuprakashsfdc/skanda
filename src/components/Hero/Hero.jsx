import React from 'react';

const Hero = () => {
  return (
    <div>
      <section className="banner-section-two">
        <div className="sec-bg" style={{ backgroundImage: 'url(assets/images/main-slider/shape-1.png)' }}></div>
        <div className="shape-one"></div>
        <div className="content-outer">
          <div className="content-box">
            <div className="inner">
              <h1>Protecting <br /> Your Home <br /> from Pests</h1>
              <div className="text">Professional pest control services for your peace of mind.</div>
              <div className="link-box">
                <a href="contact.html" className="theme-btn btn-style-one">
                  <span>Schedule Services</span>
                </a>
              </div>
            </div>
            <div className="image-wrapper">
              <span className="shape-two">
                <img src="assets/images/shape/shape-2.png" alt="Pest Control Shape" />
              </span>
              <span className="shape-three">
                <img src="assets/images/shape/shape-3.png" alt="Pest Control Shape" />
              </span>
              <div className="image">
                <div className="bg" style={{ backgroundImage: 'url(assets/images/resource/image-9.jpg)' }}></div>
                <img src="assets/images/resource/image-2.png" alt="Pest Control" />
              </div>
              <div className="video-box">
                <a href="https://www.youtube.com/watch?v=nfP5N9Yc72A" className="overlay-link lightbox-image video-fancybox">
                  <i className="flaticon-play-arrow"></i>
                </a>
                <h5>Watch Our Intro Video</h5>
              </div>
              <div className="contact-number">
                <h5>Emergency Pest Control</h5>
                <div className="number">
                  <a href="tel:(254)2648215">(254) 2648 215</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
