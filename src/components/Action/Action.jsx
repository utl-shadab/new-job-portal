import React from 'react'
import "./action.css"
const Action = () => {
  return (
    <div>
     <section className="action">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                   <h2 className='action-heading my-4'>Accelerate your job search with premium services</h2>
                   <p className='action-para my-3'>Services to help you get hired, faster: from preparing your CV, getting recruiter attention, finding the right jobs, and more!</p>
                   <div className="button-group my-4 d-flex  gap-2 align-items-center flex-wrap">
                    <button>Priority applicant <span><i className='fa fa-chevron-right mx-2'></i></span></button>
                    <button>Resume Writing <span><i className='fa fa-chevron-right mx-2'></i></span></button>
                    <button>Resume Display <span><i className='fa fa-chevron-right mx-2'></i></span></button>
                   </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center justify-content-lg-end justify-content-center">
                    <button className='learn'>Learn More <span><i className='fa fa-arrow-right mx-2'></i></span></button>
                </div>
            </div>
        </div>
     </section>
    </div>
  )
}

export default Action
