import React from 'react';
import './recruiters.css';
import Google from '../../assets/small-icon/google.png';
import Amazon from '../../assets/small-icon/amazon.png';
import Capgemini from '../../assets/small-icon/capgemini.png';
import Hcl from '../../assets/small-icon/hcl.png';
import Infosys from '../../assets/small-icon/infosys.png';
import Tesla from '../../assets/small-icon/tesla.png';
import Wipro from '../../assets/small-icon/wipro.png';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';

const recruiters = [
  {
    name: 'Google',
    location: 'Bangalore',
    vacancies: 45,
    image: Google,
  },
  {
    name: 'Amazon',
    location: 'Hyderabad',
    vacancies: 30,
    image: Amazon,
  },
  {
    name: 'Capgemini',
    location: 'Pune',
    vacancies: 25,
    image: Capgemini,
  },
  {
    name: 'HCL',
    location: 'Noida',
    vacancies: 40,
    image: Hcl,
  },
  {
    name: 'Infosys',
    location: 'Chennai',
    vacancies: 50,
    image: Infosys,
  },
  {
    name: 'Tesla',
    location: 'Bangalore',
    vacancies: 35,
    image: Tesla,
  },
  {
    name: 'Wipro',
    location: 'Mumbai',
    vacancies: 33,
    image: Wipro,
  },
];

const options = {
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  navText: [
    '<span class="fa fa-chevron-left"></span>',
    '<span class="fa fa-chevron-right"></span>',
  ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 4,
    },
  },
};

const Recruiters = () => {
  return (
    <section className="recruiter py-5">
      <div className="container">
        <div className="subtitle">
          <span className='text-dark mx-1'>Our Top</span> Recruiters
        </div>
        <OwlCarousel className="owl-theme" {...options}>
          {recruiters.map((recruiter, index) => (
            <div key={index} className="item">
              <div className="rec-card">
                <div className="rec-top">
                  <div className="company">
                    <div className='d-flex justify-content-start gap-3 align-items-center'>
                      <img src={recruiter.image} alt={recruiter.name} />
                      <p className='compane-name'>{recruiter.name}</p>
                    </div>
                    <div className="centered d-flex justify-content-between flex-start flex-column px-2">
                      <div className="location d-flex mx-5 gap-4 align-items-center">
                        <i className="fa fa-map-marker-alt text-primary"></i>
                        <p>{recruiter.location}</p>
                      </div>
                      <div className="applied d-flex mx-5 gap-4 align-items-center">
                        <i className="fa fa-users text-primary"></i>
                        <p>Applied</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rec-bottom d-flex justify-content-between px-2 py-3">
                  <div className="details-btn">
                    <button className="apply-btn px-3">View Details</button>
                  </div>
                  <div className="opening">
                    <div className="d-flex justify-content-center align-items-center gap-2 vac">
                      <p className='text-dark '>Vacancies: <span>{recruiter.vacancies}</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </section>
  );
}

export default Recruiters;
