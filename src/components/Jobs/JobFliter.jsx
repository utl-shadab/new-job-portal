import React from 'react';
import "./jobs.css";

const jobCategories = [
  { name: 'Health Care', count: 80 },
  { name: 'Account & Finance', count: 100 },
  { name: 'Transportation', count: 50 },
  { name: 'Medical', count: 70 },
  { name: 'Development', count: 200 },
  { name: 'Engineering', count: 80 },
  { name: 'Receptionist', count: 100 },
  { name: 'Non - Profit Org.', count: 50 }
];

const jobTypes = [
  { name: 'Full Time', count: 80 },
  { name: 'Freelance', count: 100 },
  { name: 'Part Time', count: 50 },
  { name: 'Remote', count: 70 },
  { name: 'Internship', count: 50 }
];

const locations = [
  { name: 'Gurgaon', count: 80 },
  { name: 'New Delhi', count: 100 },
  { name: 'Ahmedabad', count: 50 },
  { name: 'Bengaluru', count: 70 },
  { name: 'Noida', count: 200 },
  { name: 'Bihar', count: 80 },
  { name: 'Uttarakhand', count: 100 },
  { name: 'Mumbai', count: 50 }
];

const salaries = [
  { name: '0 - 2 Lakhs', count: 100 },
  { name: '3 - 4 Lakhs', count: 80 },
  { name: '4 - 6 Lakhs', count: 50 },
  { name: '6 - 8 Lakhs', count: 70 },
  { name: '8 - 10 Lakhs', count: 200 },
  { name: '10 - 14 Lakhs', count: 80 },
  { name: '14 - 18 Lakhs', count: 100 },
  { name: '18 - 15 Lakhs', count: 50 }
];

const JobFilter = () => {
  return (
    <div className="filter-job">
      <div className='container'>
        <div className="jobs-card">
          <h1 className='py-2 headline'>Job Category</h1>
          {jobCategories.map((category, index) => (
            <div key={index} className="checklist d-flex justify-content-between align-items-center">
              <div className="check-item d-flex justify-content-center gap-3">
                <input type="checkbox" name={category.name.toLowerCase().replace(/ /g, '-')} id={category.name.toLowerCase().replace(/ /g, '-')} />
                <label htmlFor={category.name.toLowerCase().replace(/ /g, '-')}>{category.name}</label>
              </div>
              <div className="jobsnumber">
                ({category.count})
              </div>
            </div>
          ))}
        </div>
        <div className="jobs-card">
          <h1 className='py-2 headline'>Job Category</h1>
          {jobTypes.map((type, index) => (
            <div key={index} className="checklist d-flex justify-content-between align-items-center">
              <div className="check-item d-flex justify-content-center gap-3">
                <input type="checkbox" name={type.name.toLowerCase().replace(/ /g, '-')} id={type.name.toLowerCase().replace(/ /g, '-')} />
                <label htmlFor={type.name.toLowerCase().replace(/ /g, '-')}>{type.name}</label>
              </div>
              <div className="jobsnumber">
                ({type.count})
              </div>
            </div>
          ))}
        </div>
        <div className="jobs-card">
          <h1 className='py-2 headline'>Search by location</h1>
          {locations.map((location, index) => (
            <div key={index} className="checklist d-flex justify-content-between align-items-center">
              <div className="check-item d-flex justify-content-center gap-3">
                <input type="checkbox" name={location.name.toLowerCase().replace(/ /g, '-')} id={location.name.toLowerCase().replace(/ /g, '-')} />
                <label htmlFor={location.name.toLowerCase().replace(/ /g, '-')}>{location.name}</label>
              </div>
              <div className="jobsnumber">
                ({location.count})
              </div>
            </div>
          ))}
        </div>
        <div className="jobs-card">
          <h1 className='py-2 headline'>Salary</h1>
          {salaries.map((salary, index) => (
            <div key={index} className="checklist d-flex justify-content-between align-items-center">
              <div className="check-item d-flex justify-content-center gap-3">
                <input type="checkbox" name={salary.name.toLowerCase().replace(/ /g, '-')} id={salary.name.toLowerCase().replace(/ /g, '-')} />
                <label htmlFor={salary.name.toLowerCase().replace(/ /g, '-')}>{salary.name}</label>
              </div>
              <div className="jobsnumber">
                ({salary.count})
              </div>
            </div>
          ))}
        </div>
        <div className=" d-flex align-items-center" style={{ border: '1px solid #E8F0FB', borderRadius: '4px', padding: '8px 5px', backgroundColor: '#F3F8FF' }}>
          <input type="text" placeholder="Search by City" className="search-input" style={{ border: 'none', outline: 'none', flex: 1, padding: '10px', fontSize: '16px' }} />
          <button className="search-button" style={{ backgroundColor: '#E8F0FB', border: 'none', padding: '10px', borderRadius: '0 4px 4px 0' }}>
            <i className="fa fa-search" style={{ color: '#1967D2', fontSize: '16px' }}></i>
          </button>
        </div>
        <div className="">
          <h1 className='py-2 headline'>Experience</h1>
          <input type="range"  min="0" max="30" className="experience-slider w-100" onInput={(e) => e.target.nextElementSibling.innerText = `${e.target.value} yrs`} />
          <div className="experience-labels d-flex justify-content-between">
            <span>0 Year</span>
            <span>30 Years</span>
          </div>
          {/* <div className="experience-value" style={{ textAlign: 'center', marginTop: '10px', fontSize: '16px', color: '#1967D2' }}>0 yrs</div> */}
        </div>
      </div>
    </div>
  );
}

export default JobFilter;