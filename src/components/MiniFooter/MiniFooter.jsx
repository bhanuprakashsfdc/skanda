import React from 'react';

const MiniFooter = () => {
  return (
    <footer className="main-footer">
      <div className="upper-box">
        <div className="auto-container">
          <div className="row">
            {/* About Section */}
            <div className="col-lg-4 col-md-7">
              <div className="widget about-widget">
                <h4 className="widget_title">About Skanda Pest Control</h4>
                <div className="text">
                  Skanda Pest Control offers professional and eco-friendly pest control services to keep your home and business safe from pests.
                </div>
                <div className="copyright">
                  <a href="#">Skanda Pest Control</a> © 2024 All Rights Reserved
                </div>
              </div>
              <div className="content auto-container">
                <ul className="social-icon flex">
                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                    <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                </ul>
             </div>
            </div>

            {/* Useful Links Section */}
            <div className="col-lg-2 col-md-6">
              <div className="widget links-widget">
                <h4 className="widget_title">Useful Links</h4>
                <div className="widget-content">
                  <ul className="list">
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Our Services</a></li>
                    <li><a href="#">How It Works</a></li>
                    <li><a href="#">Our Blog</a></li>
                    <li><a href="#">Contact Us</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service Links Section */}
            <div className="col-lg-2 col-md-6">
              <div className="widget links-widget">
                <h4 className="widget_title">Our Services</h4>
                <div className="widget-content">
                  <ul className="list">
                    <li><a href="#">House Sanitizing</a></li>
                    <li><a href="#">Window Sanitizing</a></li>
                    <li><a href="#">Domestic Sanitizing</a></li>
                    <li><a href="#">Disinfection</a></li>
                    <li><a href="#">Office Sanitizing</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="col-lg-3 offset-lg-1 col-md-6">
              <div className="widget contact-widget">
                <h4 className="widget_title">Contact Us</h4>
                <ul>
                  <li>3491 Pall Mall Drive, Suite #203 Jacksonville, FL 42368</li>
                  <li><a href="mailto:info@skandapestcontrol.com">info@skandapestcontrol.com</a></li>
                  <li><a href="tel:+2(305)5873407">+2(305) 587-3407</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MiniFooter;
