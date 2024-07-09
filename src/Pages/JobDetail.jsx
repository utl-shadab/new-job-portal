import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Wipro from "../assets/small-icon/wipro.svg"
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Swal from 'sweetalert2';
const JobDetail = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { job } = location.state;
    const [savedJobs, setSavedJobs] = useState([]);
    const toggleSaved = () => {
        if (savedJobs.includes(job.id)) {
            setSavedJobs(savedJobs.filter(savedJobId => savedJobId !== job.id));
        } else {
            setSavedJobs([...savedJobs, job.id]);
        }
    };
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


    ];
    const jobDetails = {
        title: "UI/UX Designer",
        description: "We are looking for a dynamic UI/UX designer who will be responsible for the user experience (UX) and user interface (UI) design of our various digital assets. The successful candidate will evidence a passion for delivering adaptive and creative solutions to UI/UX design problems by staying up to date with best practices and emerging trends in user experience design and user interface technology.",
        responsibilities: [
            "Investigating user experience design requirements for our suite of digital assets.",
            "Developing and conceptualising a comprehensive UI/UX design strategy for the brand.",
            "Producing high-quality UX design solutions through wireframes, visual and graphic designs, flow diagrams, storyboards, site maps, and prototypes.",
            "Designing UI elements and tools such as navigation menus, search boxes, tabs, and widgets for our digital assets.",
            "Testing UI elements such as CTAs, banners, page layouts, page designs, page flows, and target links for landing pages.",
            "Collaborating with the marketing team, development team, and internal to ensure the creation and delivery of tailored experiences for the digital user.",
            "Providing advice and guidance on the implementation of UX research methodologies and testing activities in order to analyze and predict user behavior.",
            "Adhering to style standards on typography and graphic design."
        ],
        skillsRequired: [
            "A minimum of 2 years UI/UX design experience for Web UI digital products or services.",
            "A portfolio of professional UI/UX design work for both web and mobile platforms.",
            "Working knowledge of the following technologies and software: Adobe Creative Suite Like Photoshop, Illustrator, Adobe XD, Figma, Coral Draw, Canva",
            "A team player but can work independently too.",
            "Excellent written and verbal communication skills.",
            "Multi-tasking and time-management skills, with the ability to prioritise tasks."
        ],

        jobLinks: [
            { url: "https://www.linkedin.com/jobs/view/2801010145/", icon: "ri-linkedin-line", text: "LinkedIn" },
            { url: "", icon: "ri-share-line", text: "Share" },
            { url: "", icon: "ri-facebook-circle-line", text: "Facebook" },
            { url: "", icon: "ri-link", text: "Link" }
        ]
    };
   
  const [applied, setApplied] = useState(false);
    const handleApplyClick = () => {
        Swal.fire({
          title: 'Success!',
          text: `You have successfully applied to '${jobDetails.title}'`,
          icon: 'success',
          confirmButtonText: 'OK',
        }).then(() => {
          setApplied(true); 
          navigate('/jobs'); 
        });
      };
    return (
        <>
            <Navbar />
            <div className="job-details-container py-5 container">
                <div className="row align-items-center">
                    <div className="col-lg-4 col-md-6 ">
                        <div className="job-listing-datails d-flex gap-2 align-items-center">
                            <img src={Wipro} className='image-size' alt="" />
                            <div className="company-name">
                                <div className="company-top">
                                    {job.title}
                                </div>
                                <div className="company-bottom">
                                    {job.company}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 ">
                        <div className="work-exp d-flex gap-2 align-item-center">
                            <i className='ri-briefcase-line text-primary'></i>
                            <p className='year-exp'>{job.experience}</p>
                        </div>
                        <div className="work-location d-flex gap-2 align-item-center">
                            <i className='ri-map-pin-fill  text-primary'></i>
                            <div className="d-flex align-items-center flex-column flex-start">
                                <p className='work-city '>
                                    {job.location}
                                </p>
                            </div>

                        </div>

                    </div>
                    <div className="col-lg-2 col-md-6 ">
                        <div className="work-salary d-flex gap-2 align-item-center">
                            <i className='ri-wallet-3-line text-primary'></i>
                            <p className='year-exp'>₹ {job.salary}</p>
                        </div>
                        <div className="work-position d-flex gap-2 align-item-center">
                            <i className='ri-building-line  text-primary'></i>
                            <div className="d-flex align-items-center flex-column flex-start">
                                <p className='work-sector '>
                                    {job.title}
                                </p>
                                <p> </p>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 ">
                        <div className="save-jobs d-flex justify-content-center align-items-center gap-3">
                            <p className='text-black'>Save Jobs</p>
                            <div className={`archive ${savedJobs.includes(job.id) ? 'saved' : ''}`} onClick={toggleSaved}>
                                <i className="ri-bookmark-line bookmark-icon "></i>
                            </div>
                            <div className="job-apply btn-primary" onClick={handleApplyClick}>Apply Now</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="py-4 border-top">
                            <div className="job-description">
                                {job.title}
                            </div>
                            <div className="responsibility">
                                Key Responsibilities:
                                <p>{jobDetails.description}</p>
                            </div>
                            <div className="requirement">
                                Skills Required:
                                <ul>
                                    <div className='p-3'>
                                        {jobDetails.skillsRequired.map((skill, index) => (
                                            <li key={index}>{skill}</li>
                                        ))}
                                    </div>
                                </ul>
                            </div>
                            <div className="resp">
                                <ul>UI UX Designer Responsibilities:
                                    <div className='p-3'>
                                        {jobDetails.responsibilities.map((responsibility, index) => (
                                            <li key={index}>{responsibility}</li>
                                        ))}
                                    </div>

                                </ul>

                            </div>
                            <div className="benifits">
                                Benefits
                                <ul className="d-lg-flex justify-content-around  d-sm-block gap-2 py-2">
                                    <li><i className='ri-check-double-line text-primary'></i>Cell phone reimbursement</li>
                                    <li><i className='ri-check-double-line text-primary'></i>Health insurance</li>
                                    <li><i className='ri-check-double-line text-primary'></i>Performance bonuses</li>
                                    <li><i className='ri-check-double-line text-primary'></i>WFH  allowance</li>
                                    <li><i className='ri-check-double-line text-primary'></i>Life insurance</li>
                                </ul>
                                <ul className="d-lg-flex justify-content-around  d-sm-block gap-2 py-2 ">
                                    <li><i className='ri-check-double-line text-primary'></i>Flexible schedule</li>
                                    <li><i className='ri-check-double-line text-primary'></i>Internet reimbursement</li>
                                    <li><i className='ri-check-double-line text-primary'></i>paid sick Leave</li>
                                    <li><i className='ri-check-double-line text-primary'></i>Flexible schedule</li>
                                    <li><i className='ri-check-double-line text-primary'></i>WFH  allowance</li>
                                </ul>
                            </div>
                            <div className="job-link d-flex gap-3 align-items-center">
                                <p className='p'>Job Link Share:</p>
                                <div className="d-flex share-icons justify-content-center  gap-3">
                                    <a href="https://www.linkedin.com/jobs/view/2801010145/" target="_blank" rel="noreferrer">
                                        <i className="ri-linkedin-line"></i>
                                    </a>
                                    <a href="https://www.linkedin.com/jobs/view/2801010145/" target="_blank" rel="noreferrer">
                                        <i className="ri-share-line"></i>
                                    </a>
                                    <a href="https://www.linkedin.com/jobs/view/2801010145/" target="_blank" rel="noreferrer">
                                        <i className="ri-facebook-circle-line"></i>
                                    </a>
                                    <a href="https://www.linkedin.com/jobs/view/2801010145/" target="_blank" rel="noreferrer">
                                        <i className="ri-link"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="job-detail-sidebar">
                            <div className="profile-details">
                                <div className="profile-details-title">
                                    Profile Details
                                </div>
                                <div className="job-open">
                                    <h5 className='h5 text-black'>Number of Job Opening</h5>
                                    <p className='p'>5</p>
                                </div>
                                <div className="job-open">
                                    <h5 className='h5 text-black'>Role</h5>
                                    <p className='p'> {job.title}</p>
                                </div>
                                <div className="job-open">
                                    <h5 className='h5 text-black'>Industry Type</h5>
                                    <p className='p'>IT Support - Other</p>
                                </div>
                                <div className="job-open">
                                    <h5 className='h5 text-black'>Employment Type</h5>
                                    <p className='p'>Full Time, Part time, Permanent</p>
                                </div>
                                <div className="job-open">
                                    <h5 className='h5 text-black'>Department</h5>
                                    <p className='p'>{job.company}</p>
                                </div>
                                <div className="job-open">
                                    <h5 className='h5 text-black'>Work Mode</h5>
                                    <p className='p'>Work From Home</p>
                                </div>
                                <div className="job-open">
                                    <h5 className='h5 text-black'>Key skills</h5>
                                    <p className='p'>{job.company}</p>
                                </div>
                                <div className="job-open">
                                    <h5 className='h5 text-black'>Good to have skills</h5>
                                    <p className='p'>Figma, Wireframing, User Interface Designing, Prototyping, User research, Photoshop, Graphic Design ,  Visual Design</p>
                                </div>
                                <div className="job-open">
                                    <h5 className='h5 text-black'>Education</h5>
                                    <p className='p'>B.Tech  or any graduate</p>
                                </div>
                            </div>
                        </div>
                        <div className="location-map my-3">
                            <div className="location-map-title">
                                Get Location
                            </div>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.3834240727083!2d77.39711097616082!3d28.498109690171194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce9274c9b2627%3A0x711fc9c4aa2497a2!2sUTL%20IT%20solution!5e0!3m2!1sen!2sin!4v1719050758221!5m2!1sen!2sin"
                                width="600"
                                height="450"
                                style={{ border: 0, width: '100%', height: '300px' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>

                    </div>
                    <div className="col-lg-12">
                        <div className="py-3">
                            <div className="related-job">Related Job :</div>
                            <div className="row">
                                {jobs.map((job, index) => (
                                    <div key={index} className="col-lg-4">
                                        <div className="job-card related-job-card bg-white ">
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
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};
export default JobDetail;
