import React from 'react';
import './categories.css';

import { useNavigate } from 'react-router-dom'
import accountImage from '../../assets/small-icon/account.png';
import architectureImage from '../../assets/small-icon/architecture.png';
import chipImage from '../../assets/small-icon/chip.png';
import hrImage from '../../assets/small-icon/hr.png';
import Transport from '../../assets/small-icon/tran.png';
import telecallerImage from '../../assets/small-icon/telecall.png';
import nonProfitImage from '../../assets/small-icon/noprofite.png';
import projectImage from '../../assets/small-icon/prMan.png';
import marketingImage from '../../assets/small-icon/marketing.png';
import developmentImage from '../../assets/small-icon/developement.png';
import placeholderImage from '../../assets/small-icon/error.png';


const handleButtonClick = () => {
  const navigate = useNavigate();
  navigate('/category');
};

const imageMap = {
  'Account & Finance': accountImage,
  'Architecture': architectureImage,
  'Chip': chipImage,
  'HR': hrImage,
  'Telecaller': telecallerImage,
  'Non-Profit': nonProfitImage,
  'Project': projectImage,
  'Marketing': marketingImage,
  'Development': developmentImage,
  'Transport': Transport,
};

const classMap = {
  'Account & Finance': 'account',
  'Architecture': 'architecture',
  'Chip': 'chip',
  'HR': 'hr',
  'Telecaller': 'telecaller',
  'Non-Profit': 'non-profit',
  'Project': 'project',
  'Marketing': 'marketing',
  'Development': 'development',
  'Transport': 'transport',
};

const Categories = () => {
  const handleParagraphClick = () => {
    navigate('/jobs');
  };
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/category');
  };
  const categories = [
    'Account & Finance',
    'Architecture',
    'Chip',
    'HR',
    'Telecaller',
    'Non-Profit',
    'Project',
    'Marketing',
    'Development',
    'Transport',
  ];
  const Available = [75, 23, 15, 87, 24, 43, 90, 87, 102, 10];

  return (
    <section className='py-5'>
      <div className="container">
        <div className="row">
          <div className="subtitle">
            <span className='text-dark mx-1'>Job</span> Categories
          </div>
          <div className="categories-items text-center">
            {categories.map((category, index) => (
              <div key={category} className={`category-item ${classMap[category]}`}>
                <img
                  src={imageMap[category]}
                  alt={category}
                  onError={(event) => {
                    event.target.src = placeholderImage;
                  }}
                />
                <p className='my-2 fw-bold text-dark' onClick={handleParagraphClick} style={{ cursor: 'pointer' }}>
                  {category}
                </p>
                <div className="job-available">
                  <span className='text-secondary'>Job Available: </span>
                  {Available[index]}
                </div>
              </div>
            ))}
          </div>
          <div className="view-more d-flex justify-content-center my-5 align-items-center">
            <button className='cat-btn' onClick={handleButtonClick}>
              View More <span><i className='fa fa-arrow-right mx-2'></i></span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
