import React from 'react';
import Auther from "../../assets/small-icon/auther.png";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "./testimonial.css";

const testimonials = [
  {
    name: "John Doe",
    designation: "Software Engineer",
    feedback: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image: Auther,
    rating: 5,
  },
  {
    name: "Jane Smith",
    designation: "Product Manager",
    feedback: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: Auther,
    rating: 4,
  },
  // Add more testimonials here
];

const options = {
  loop: true,
  margin: 10,
  nav: false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 2,
    },
  },
  navText: [
    '<span class="fa fa-chevron-left"></span>',
    '<span class="fa fa-chevron-right"></span>',
  ],
};

const Testimonial = () => {
  const navButtonStyles = {
    background: 'white',
    color: 'blue',
    border: 'none',
    borderRadius: '50%',
    height: '40px',
    cursor: 'pointer',
    fontSize: '20px',
    width: '40px',
  };

  return (
    <section className="testimonial py-5">
      <div className="container">
        <div className="subtitle text-white">
          Employee Feedback
        </div>
        <OwlCarousel className="owl-theme" {...options}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testi-cards">
              <div className="testimonial-header">
                <div className="test-left d-flex gap-2 align-items-center">
                  <div className="image">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <div className="test-name">
                    <p className='auther-name'>{testimonial.name}</p>
                    <p className='auther-designation'>{testimonial.designation}</p>
                  </div>
                </div>
                <div className="test-right">
                  <div className="star">
                    {Array(testimonial.rating).fill().map((_, i) => (
                      <i key={i} className="ri-star-line text-warning mx-1"></i>
                    ))}
                  </div>
                </div>
              </div>
              <p>{testimonial.feedback}</p>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </section>
  );
};

export default Testimonial;
