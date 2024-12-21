import React from 'react';

const ServicesUs = () => {
  return (
    <section className="services-section">
      <div className="auto-container">
        <div className="sec-title text-center">
          <div className="sub-title">Our Services</div>
          <h2>Common Pest Control</h2>
        </div>
        <div className="wrapper-box">
          <span className="shape-one">
            <img src="assets/images/shape/shape-2.png" alt="Shape" />
          </span>
          <span className="shape-two">
            <img src="assets/images/shape/shape-3.png" alt="Shape" />
          </span>
          <div className="row">
            <div className="col-lg-3 col-md-6 service-block-one">
              <div className="inner-box wow fadeInDown" data-wow-duration="1500ms">
                <div className="icon">
                  <span className="flaticon-cockroach"></span>
                </div>
                <h4>
                  <a href="cockroach-control.html">Cockroach Control</a>
                </h4>
                <div className="text">
                  Professional solutions for eliminating cockroaches from your home or business.
                </div>
                <div className="link-btn">
                  <a href="cockroach-control.html" className="theme-btn btn-style-one style-two">
                    <span>Learn More</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 service-block-one">
              <div className="inner-box wow fadeInUp" data-wow-duration="1500ms">
                <div className="icon">
                  <span className="flaticon-tarantula"></span>
                </div>
                <h4>
                  <a href="spiders-control.html">Spiders Control</a>
                </h4>
                <div className="text">
                  Safe and efficient spider control services to protect your home from unwanted arachnids.
                </div>
                <div className="link-btn">
                  <a href="spiders-control.html" className="theme-btn btn-style-one style-two">
                    <span>Learn More</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 service-block-one">
              <div className="inner-box wow fadeInDown" data-wow-duration="1500ms">
                <div className="icon">
                  <span className="flaticon-termite"></span>
                </div>
                <h4>
                  <a href="termites-control.html">Termite Control</a>
                </h4>
                <div className="text">
                  Protect your property from termites with our comprehensive termite control services.
                </div>
                <div className="link-btn">
                  <a href="termites-control.html" className="theme-btn btn-style-one style-two">
                    <span>Learn More</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 service-block-one">
              <div className="inner-box wow fadeInUp" data-wow-duration="1500ms">
                <div className="icon">
                  <span className="flaticon-squirrel"></span>
                </div>
                <h4>
                  <a href="rodents-control.html">Rodents Control</a>
                </h4>
                <div className="text">
                  We provide safe and effective methods to remove and prevent rodents from your property.
                </div>
                <div className="link-btn">
                  <a href="rodents-control.html" className="theme-btn btn-style-one style-two">
                    <span>Learn More</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="all-service-link text-center mt-30 mb-30">
            <a href="services.html" className="theme-btn btn-style-one style-three">
              <span>More Services</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesUs;
