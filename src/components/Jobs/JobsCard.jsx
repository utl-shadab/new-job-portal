import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./jobs.css"
const JobsCard = ({ isAppliedJobs }) => {
  const navigate = useNavigate();
  const [applied, setApplied] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [bookmarkedJobs, setBookmarkedJobs] = useState([]);
  // const totalPages = Math.ceil(jobData.length / jobsPerPage);
const jobData = [
  {
    title: "Account Trainee",
    company: "Large IT Service & Consulting Firm",
    experience: "3.5 + Yrs",
    salary: "4 - 8 Lacs P.A.",
    location: "Pune, Mysore",
    type: "Full Time",
    deadline: "05 April, 2023",
    posted: "1d ago"
  },
  {
    title: "Software Engineer",
    company: "Tech Solutions",
    experience: "2 + Yrs",
    salary: "5 - 10 Lacs P.A.",
    location: "Bangalore, Hyderabad",
    type: "Full Time",
    deadline: "10 April, 2023",
    posted: "3d ago"
  },
  {
    title: "Marketing Manager",
    company: "Creative Agency",
    experience: "4 + Yrs",
    salary: "6 - 12 Lacs P.A.",
    location: "Delhi, Mumbai",
    type: "Full Time",
    deadline: "15 April, 2023",
    posted: "2d ago"
  },
  {
    title: "Data Analyst",
    company: "Analytics Firm",
    experience: "1 + Yrs",
    salary: "3 - 6 Lacs P.A.",
    location: "Chennai, Kolkata",
    type: "Full Time",
    deadline: "20 April, 2023",
    posted: "5d ago"
  },
  {
    title: "Product Manager",
    company: "E-commerce Company",
    experience: "5 + Yrs",
    salary: "10 - 15 Lacs P.A.",
    location: "Bangalore, Delhi",
    type: "Full Time",
    deadline: "25 April, 2023",
    posted: "1w ago"
  },
  {
    title: "UX Designer",
    company: "Design Studio",
    experience: "3 + Yrs",
    salary: "6 - 9 Lacs P.A.",
    location: "Mumbai, Pune",
    type: "Full Time",
    deadline: "30 April, 2023",
    posted: "4d ago"
  },
  {
    title: "HR Specialist",
    company: "Finance Company",
    experience: "2 + Yrs",
    salary: "4 - 7 Lacs P.A.",
    location: "Hyderabad, Chennai",
    type: "Full Time",
    deadline: "05 May, 2023",
    posted: "2d ago"
  },
  {
    title: "Sales Executive",
    company: "Retail Firm",
    experience: "1 + Yrs",
    salary: "3 - 5 Lacs P.A.",
    location: "Kolkata, Delhi",
    type: "Full Time",
    deadline: "10 May, 2023",
    posted: "1w ago"
  },
  {
    title: "Customer Support",
    company: "Tech Support Company",
    experience: "0 + Yrs",
    salary: "2 - 4 Lacs P.A.",
    location: "Bangalore, Chennai",
    type: "Full Time",
    deadline: "15 May, 2023",
    posted: "3d ago"
  },
  {
    title: "Project Manager",
    company: "Construction Firm",
    experience: "7 + Yrs",
    salary: "12 - 18 Lacs P.A.",
    location: "Mumbai, Hyderabad",
    type: "Full Time",
    deadline: "20 May, 2023",
    posted: "5d ago"
  }
];
const jobsPerPage = 5;
const totalPages = Math.ceil(jobData.length / jobsPerPage);
  const handleApplyClick = (job) => {
    navigate('/job-details', { state: { job } });
  };
  
  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleBookmarkClick = (job) => {
    setBookmarkedJobs((prev) => {
      if (prev.includes(job)) {
        return prev.filter((j) => j !== job);
      } else {
        return [...prev, job];
      }
    });
  };
  return (
    <div>
      <h1 className="form-title">687 jobs </h1>
      <div className="job-search-form job-from">
        <form>
          <div className="row">
            <div className="form-group card-from-group col-lg-5 col-md-12 col-sm-12">
              <span className="card-form-icon icon ri-search-line" />
              <input
                type="text"
                placeholder="Job title, keywords, or company"
                name="field_name"
              />
            </div>
            <div className="form-group card-from-group col-lg-7 col-md-12 col-sm-12 location">
              <span className="icon card-form-icon ri-map-pin-line" />
              <input type="text" placeholder="City, state, zip code, or “remote”" name="field_name" />
              <div className="form-group  btn-box">
                <button type="submit" className="theme-btn btn-style-one">
                  <span className="btn-title">Find Jobs</span>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="job-card-container">
      {jobData.map((job, index) => (
        <div className="job-card-side" key={index}>
          <div className="long-card">
            <div className="job-card-details d-flex justify-content-between align-items-center">
              <div className="job-post-name">
                {job.title}
                <p>{job.company}</p>
              </div>
              {!isAppliedJobs && (
                  <div className="share-job d-flex gap-3">
                    <i
                      className={`ri-bookmark-line fs-4 ${bookmarkedJobs.includes(job) ? 'text-success' : 'text-primary'}`}
                      onClick={() => handleBookmarkClick(job)}
                    ></i>
                    <i className="ri-share-line text-black fs-4"></i>
                  </div>
                )}
            </div>
            <div className="buttons-job my-2 d-flex gap-2">
              <p className="highlight-btn d-flex gap-2">
                <span>
                  <i className="ri-briefcase-line"></i>
                </span>
                <span>{job.experience}</span>
              </p>
              <p className="highlight-btn d-flex gap-2">
                <span>
                  <i className="ri-money-rupee-circle-line"></i>
                </span>
                <span>{job.salary}</span>
              </p>
              <p className="highlight-btn d-flex gap-2">
                <span>
                  <i className="ri-map-pin-fill"></i>
                </span>
                <span>{job.location}</span>
              </p>
              <p className="highlight-btn d-flex gap-2">
                <span>
                  <i className="ri-alarm-line"></i>
                </span>
                <span>{job.type}</span>
              </p>
            </div>
            <p className='deadline'>Deadline: {job.deadline}</p>
            <p className="job-listing-date my-2">{job.posted}</p>
            {isAppliedJobs ? (
                <div className="applied-message">
                  <i className="ri-check-line" style={{ color: 'white', backgroundColor: 'green', borderRadius: '50%', marginRight: '5px', padding: '2px' }}></i>
                  <span>You have successfully applied to <span className='fw-bold'> '{job.title} </span>'</span>
                </div>
              ) : (
                <button
                  className="job-apply main-job-page-button"
                  onClick={() => handleApplyClick(job)}
                >
                  Apply
                </button>
              )}
          </div>
        </div>
      ))}
    </div>
    <div className="pagination-container bg-light py-3 d-flex justify-content-center align-items-center my-4">
        <button className="pagination-button" onClick={handlePreviousPage}>
          <i className="ri-arrow-left-s-line"></i> Previous
        </button>
        <div className="pagination-numbers d-flex gap-2 mx-3">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`pagination-number ${currentPage === index + 1 ? 'active' : ''}`}
              onClick={() => handlePageClick(index + 1)}
            >
              {index + 1 < 10 ? `0${index + 1}` : index + 1}
            </button>
          ))}
        </div>
        <button className="pagination-button" onClick={handleNextPage}>
          Next <i className="ri-arrow-right-s-line"></i>
        </button>
      </div>
    </div>
  )
}

export default JobsCard
