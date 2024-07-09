import React from 'react'
import "./feature.css"
const jobs = [
  {
    title: 'UI/UX Designer',
    company: 'Ramogneee Technologies Pvt.Ltd',
    city: 'Noida',
    responsibilities: [
      'Develop and create visually stunning designs for a variety of marketing......',
      'Collaborate with the creative team to conceptualize and execute design.......',
    ],
    postedDate: 'Posted 3 days ago',
  },
  {
    title: 'Frontend Developer',
    company: 'Tech Solutions Inc.',
    city: 'Bangalore',
    responsibilities: [
      'Build and maintain high-performance web applications.......',
      'Work closely with backend developers to integrate APIs.......',
    ],
    postedDate: 'Posted 5 days ago',
  },
  {
    title: 'Backend Developer',
    company: 'Innovative Labs',
    city: 'Hyderabad',
    responsibilities: [
      'Design and develop scalable backend Developement systems.......',
      'Optimize database performance and ensure data security.......',
    ],
    postedDate: 'Posted 1 week ago',
  },
  {
    title: 'Project Manager',
    company: 'Global Tech',
    city: 'Chennai',
    responsibilities: [
      'Lead project teams to deliver high-quality projects on time.......',
      'Coordinate with clients and stakeholders to ensure project success.......',
    ],
    postedDate: 'Posted 2 weeks ago',
  },
  {
    title: 'Data Scientist',
    company: 'Data Insights',
    city: 'Mumbai',
    responsibilities: [
      'Analyze and interpret complex data sets to drive business decisions.......',
      'Develop and implement machine learning models.......',
    ],
    postedDate: 'Posted 1 month ago',
  },
  {
    title: 'Android Developer',
    company: 'Mobile Innovations',
    city: 'Pune',
    responsibilities: [
      'Design and build advanced applications for the Android platform.......',
      'Collaborate with cross-functional teams to define, design, and ship new features.......',
    ],
    postedDate: 'Posted 1 month ago',
  },

];
const Features = () => {
  return (
    <section className="features py-5">
      <div className="container">
        <div className="subtitle text-dark ">
          <span className='text-primary'>Featured </span>
          Jobs
        </div>
        <div className="row">
          {jobs.map((job, index) => (
            <div key={index} className="col-lg-4">
              <div className="job-card bg-white ">
                <div className="job-title">{job.title}</div>
                <p className="job-location">{job.company}</p>
                <p className="city">{job.city}</p>
                <ul>
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
                <div className="job-card-bottom  d-flex justify-content-between">
                  <span className="post-date">{job.postedDate}</span>
                  <button className="apply-btn">Apply</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="view-more d-flex justify-content-center my-5 align-items-center">
          <button className='cat-btn'>View More <span><i className='fa fa-arrow-right mx-2'></i></span></button>
        </div>
      </div>
    </section>
  )
}

export default Features
