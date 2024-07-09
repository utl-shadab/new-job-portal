import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import JobList from '../components/Jobs/JobList'

const Jobs = () => {
  return (
    <div>
      <Navbar/>
      <JobList/>
      <Footer/>
    </div>
  )
}

export default Jobs
