import React from 'react';
import './footer.css'; 

const Footer = () => {
  return (
    <footer className="footer bg-black text-white py-5">
      <div className="container">
        <div className="row">
          {/* Column 1: Contact Us */}
          <div className="col-lg-3 col-md-6">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>Phone Number: +1234567890</li>
              <li>Address: 123 Main St, City</li>
              <li>
                <strong>Follow Us:</strong>{' '}
                <span className="social-icons d-block ">
                  <a href="#linkedin"><i class="ri-instagram-line text-white"></i></a>
                  <a href="#twitter"><i className="ri-twitter-line text-white"></i></a>
                  <a href="#facebook"><i className="ri-facebook-line text-white"></i></a>
                </span>
              </li>
            </ul>
          </div>

          {/* Column 2: For Candidates */}
          <div className="col-lg-2 col-md-6">
            <h5>For Candidates</h5>
            <ul className="list-unstyled">
              <li><a href="#jobsearch" className="text-white">Job Search</a></li>
              <li><a href="#resume" className="text-white">Upload Resume</a></li>
              <li><a href="#interview" className="text-white">Interview Tips</a></li>
              <li><a href="#faq" className="text-white">FAQ</a></li>
              <li><a href="#blog" className="text-white">Blog</a></li>
            </ul>
          </div>

          {/* Column 3: For Employers */}
          <div className="col-lg-2 col-md-6">
            <h5>For Employers</h5>
            <ul className="list-unstyled">
              <li><a href="#postjob" className="text-white">Post a Job</a></li>
              <li><a href="#findtalent" className="text-white">Find Talent</a></li>
              <li><a href="#employerfaq" className="text-white">Employer FAQ</a></li>
              <li><a href="#employerblog" className="text-white">Employer Blog</a></li>
            </ul>
          </div>

          {/* Column 4: Support */}
          <div className="col-lg-2 col-md-6">
            <h5>Support</h5>
            <ul className="list-unstyled">
              <li><a href="#contactus" className="text-white">Contact Us</a></li>
              <li><a href="#terms" className="text-white">Terms & Conditions</a></li>
              <li><a href="#privacy" className="text-white">Privacy Policy</a></li>
              <li><a href="#help" className="text-white">Help & Support</a></li>
            </ul>
          </div>

          {/* Column 5: Subscribe */}
          <div className="col-lg-3 col-md-6 footer-form align-items-center justify-content-center m-auto p-4">
            <h5>Subscribe</h5>
            <form className='my-2' >
              <div className="input-group mb-3">
                <input type="email" className="form-control" placeholder="Your Email" />
                <div className="input-group-append">
                  <button className="btn btn-primary" type="button"><i className='fa fa-arrow-right'></i></button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
