import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import DashboardLeft from './DashboardLeft'
import Swiggy from '../../assets/dashboard/swiggy.png'
import Wave from '../../assets/dashboard/wave.png'
import Heart from '../../assets/dashboard/heart.png'
import Pge from '../../assets/dashboard/pge.png'
import Mail from '../../assets/dashboard/gmail.png'
import JobsCard from '../Jobs/JobsCard'

const images = {
  Swiggy,
  Wave,
  Heart,
  Pge,
  Mail
};


const jobData = [
  { id: 1, title: 'Software Engineer', salary: '₹ 6 - 12 Lacs P.A.', location: 'Bangalore, Hyderabad', type: 'Full Time', logo: images.Swiggy, deadlineExpired: false },
  { id: 2, title: 'Data Analyst', salary: '₹ 5 - 10 Lacs P.A.', location: 'Mumbai, Pune', type: 'Remote', logo: images.Wave, deadlineExpired: true },
  { id: 3, title: 'Product Manager', salary: '₹ 8 - 15 Lacs P.A.', location: 'Delhi, Gurgaon', type: 'Part Time', logo: images.Heart, deadlineExpired: false },
  { id: 4, title: 'UX Designer', salary: '₹ 4 - 9 Lacs P.A.', location: 'Chennai, Coimbatore', type: 'Full Time', logo: images.Pge, deadlineExpired: false },
  { id: 5, title: 'Marketing Specialist', salary: '₹ 3 - 7 Lacs P.A.', location: 'Kolkata, Bhubaneswar', type: 'Remote', logo: images.Mail, deadlineExpired: true },
  { id: 6, title: 'DevOps Engineer', salary: '₹ 7 - 14 Lacs P.A.', location: 'Pune, Mysore', type: 'Part Time', logo: images.Swiggy, deadlineExpired: false },
  { id: 7, title: 'HR Manager', salary: '₹ 5 - 11 Lacs P.A.', location: 'Bangalore, Hyderabad', type: 'Full Time', logo: images.Wave, deadlineExpired: false },
  { id: 8, title: 'Content Writer', salary: '₹ 2 - 5 Lacs P.A.', location: 'Mumbai, Pune', type: 'Remote', logo: images.Heart, deadlineExpired: true },
  { id: 9, title: 'Business Analyst', salary: '₹ 6 - 13 Lacs P.A.', location: 'Delhi, Gurgaon', type: 'Part Time', logo: images.Pge, deadlineExpired: false },
  { id: 10, title: 'Graphic Designer', salary: '₹ 3 - 6 Lacs P.A.', location: 'Chennai, Coimbatore', type: 'Full Time', logo: images.Mail, deadlineExpired: false },
  // Add more data as needed up to 100 entries
];

const AppliedJobs = () => {
  return (
    <div>
      <Navbar />
      <section style={{ backgroundColor: "#f8fbfe" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 position-sticky top-0">
              <DashboardLeft />
            </div>
            <div className="col-lg-9 py-3" style={{ height: "100vh", overflowY: "scroll", scrollbarWidth: "none", paddingTop: "20px", paddingBottom: "20px", "WebkitScrollbar": { display: "none" } }}>
              <div className="job-alerts">
                <h2>Job Alert Jobs <span>(20 new jobs)</span></h2>
                <JobsCard isAppliedJobs={true}/>
              </div>

            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default AppliedJobs
