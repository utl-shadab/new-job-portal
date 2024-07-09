import React from 'react';
import './logo.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import logo1 from '../../assets/small-icon/1.png'; 
import logo2 from '../../assets/small-icon/2.png';
import logo3 from '../../assets/small-icon/3.png';
import logo4 from '../../assets/small-icon/4.png';
import logo5 from '../../assets/small-icon/5.png';
import logo6 from '../../assets/small-icon/6.png';

const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

const options = {
  loop: true,
  margin: 10,
  nav: false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 1000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 4,
    },
    1000: {
      items: 6,
    },
  },
};

const LogoSlider = () => {
  return (
    <section className="logo-slider">
      <div className="container">
        <div className="subtitle">
          <span className='text-dark mx-1'>Our</span> Trusted Company
        </div>
        <div className="row custom-row">
          <OwlCarousel className="owl-theme" {...options}>
            {logos.map((logo, index) => (
              <div key={index} className="item">
                <img src={logo} alt={`Logo ${index + 1}`} />
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
};

export default LogoSlider;
