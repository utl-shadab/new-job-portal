import React from 'react'
import JobFliter from './JobFliter'
import JobsCard from './JobsCard'
// import JobsCard from './JobsCard'

const JobList = () => {
  return (
    <div>
      {/* <JobsCard/> */}
      <section className="job-listing">
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
               <div className="fixed-item">
                <JobFliter/>
               </div>
         
                </div>
                <div className="col-lg-8">
               <div className="scrolled">
                <JobsCard/>
               </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default JobList
