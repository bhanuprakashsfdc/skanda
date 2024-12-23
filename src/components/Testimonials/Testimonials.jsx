import React from 'react';
import Slider from 'react-slick';
import {NAME } from '../../constants/constants';
const Testimonials = () => {
  // Carousel settings
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="testimonials-section">
      <div className="auto-container">
        <div className="sec-title text-center">
          <div className="sub-title">Testimonials</div>
          <h2>Customer Reviews</h2>
        </div>
        <Slider {...settings}>
          <div className="testimonial-block">
            <div className="inner-box">
              <div className="image">
                <img src="assets/images/resource/author-2.jpg" alt="Customer 1" />
              </div>
              <div className="rating">
                <span className="fas fa-star"></span>
                <span className="fas fa-star"></span>
                <span className="fas fa-star"></span>
                <span className="fas fa-star"></span>
                <span className="fas fa-star"></span>
              </div>
              <div className="text">
                "{NAME} provided quick and effective solutions for our cockroach problem. Their service was excellent, and their team was professional and friendly. Highly recommend!"
              </div>
              <div className="author-info">
                <h4>Mike Hardson</h4>
                <div className="designation">New York</div>
              </div>
            </div>
          </div>
          <div className="testimonial-block">
            <div className="inner-box">
              <div className="image">
                <img src="assets/images/resource/author-2.jpg" alt="Customer 2" />
              </div>
              <div className="rating">
                <span className="fas fa-star"></span>
                <span className="fas fa-star"></span>
                <span className="fas fa-star"></span>
                <span className="fas fa-star"></span>
                <span className="fas fa-star"></span>
              </div>
              <div className="text">
                "The termite control service was incredibly effective. We haven’t seen any signs of termites since their visit. The team was thorough, and they walked us through every step of the process."
              </div>
              <div className="author-info">
                <h4>Jane Doe</h4>
                <div className="designation">California</div>
              </div>
            </div>
          </div>
          <div className="testimonial-block">
            <div className="inner-box">
              <div className="image">
                <img src="assets/images/resource/author-2.jpg" alt="Customer 3" />
              </div>
              <div className="rating">
                <span className="fas fa-star"></span>
                <span className="fas fa-star"></span>
                <span className="fas fa-star"></span>
                <span className="fas fa-star"></span>
                <span className="fas fa-star"></span>
              </div>
              <div className="text">
                "Excellent service for rodent control. {NAME} did a great job in addressing the issue, and the technicians were knowledgeable and efficient."
              </div>
              <div className="author-info">
                <h4>John Smith</h4>
                <div className="designation">Florida</div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
