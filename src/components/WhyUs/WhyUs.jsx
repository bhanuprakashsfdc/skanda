import React from 'react';
import {NAME } from '../../constants/constants';
const WhyUs = () => {
  return (
    <section className="whychoose-us-section">
      <div className="auto-container">
        <div className="row">
          <div className="col-lg-5">
            <div className="sec-title mb-20">
              <div className="sub-title">Why Choose Us</div>
              <h2>We Treat Your Home <br /> Like It's Our Own</h2>
            </div>
            <div className="text mb-40">
              {NAME} has been offering professional and effective pest control services for over 20 years. We ensure your home is safe, secure, and pest-free with eco-friendly solutions.
            </div>
            <div className="icon-box wow fadeInDown" data-wow-duration="1500ms">
              <div className="icon"><span className="flaticon-settings"></span></div>
              <div className="content">
                <h4>Top Rated Services</h4>
                <div className="text">
                  Our pest control services are highly rated for their effectiveness and customer satisfaction.
                </div>
              </div>
            </div>
            <div className="icon-box wow fadeInDown" data-wow-duration="1500ms">
              <div className="icon"><span className="flaticon-pesticide"></span></div>
              <div className="content">
                <h4>Fully Equipped</h4>
                <div className="text">
                  We use the latest and most advanced equipment to provide thorough pest control treatments.
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1">
            <div className="image-wrapper">
              <span className="shape-one">
                <img src="assets/images/shape/shape-2.png" alt="Pest Control Shapes" />
              </span>
              <span className="shape-two">
                <img src="assets/images/shape/shape-3.png" alt="Pest Control Shapes" />
              </span>
              <div className="image wow fadeInDown" data-wow-duration="1500ms">
                <img src="assets/images/resource/image-3.jpg" alt="Pest Control Technician" />
              </div>
              <div className="author-info" data-parallax='{"y": 40}'>
                <div className="author">
                  <img src="assets/images/resource/author-1.jpg" alt="{NAME} Expert" />
                </div>
                <h4>Years of Experience</h4>
                <div className="link">
                  <a href="#" className="theme-btn btn-style-one style-three">
                    <span>Expert Technicians</span>
                  </a>
                </div>
              </div>
              <a href="tel:2107636992" className="phone wow fadeInDown" data-wow-duration="1500ms">
                <img src="assets/images/icons/icon-3.png" alt="Call Us" />
                <div className="hover-image">
                  <img src="assets/images/icons/icon-3.png" alt="Call Us" />
                </div>
              </a>
              <a className="email wow fadeInDown" data-wow-duration="1500ms" href="mailto:info@example.com">
                <img src="assets/images/icons/icon-4.png" alt="Email Us" />
                <div className="hover-image">
                  <img src="assets/images/icons/icon-4.png" alt="Email Us" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
