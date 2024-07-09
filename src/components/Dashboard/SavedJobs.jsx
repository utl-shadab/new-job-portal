import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import DashboardLeft from './DashboardLeft'
import JobsCard from '../Jobs/JobsCard'

const SavedJobs = ({ bookmarkedJobs , isAppliedJobs }) => {
    return (
        <div>
            <Navbar />
            <section style={{ backgroundColor: "#f8fbfe" }}>
            <div className='container'>
                <div className="row">
                    <div className="col-lg-3 position-sticky top-0">
                        <DashboardLeft />
                </div>
                <div className="col-lg-9 py-3 " style={{ height: "100vh", overflowY: "scroll", scrollbarWidth: "none", paddingTop: "20px", paddingBottom: "20px", "WebkitScrollbar": { display: "none" } }}>
                <JobsCard isAppliedJobs={isAppliedJobs} bookmarkedJobs={bookmarkedJobs} />
                </div>
                </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default SavedJobs
